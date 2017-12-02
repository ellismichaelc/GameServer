class shaders {
    constructor(scene) {
        this.scene = scene;
        this.shaders = [];
        this.materials = [];

        // only one in use right now
        this.shaders.terrain = {
            uniforms : {},
            fog: scene.fog,
            vertexShader:
                "        uniform sampler2D bumpTexture;\n" +
                "        uniform float bumpScale;\n" +
                "\n" +
                "        varying float vAmount;\n" +
                "        varying vec2 vUV;\n" +
                "\n" +
                "        void main()\n" +
                "        {\n" +
                "            vUV = uv;\n" +
                "            vec4 bumpData = texture2D( bumpTexture, uv );\n" +
                "\n" +
                "            vAmount = bumpData.r; // assuming map is grayscale it doesn't matter if you use r, g, or b.\n" +
                "\n" +
                "            // move the position along the normal\n" +
                "            vec3 newPosition = position + normal * bumpScale * vAmount;\n" +
                "\n" +
                "            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n" +
                "        }",
            fragmentShader:
                "        uniform sampler2D oceanTexture;\n" +
                "        uniform sampler2D snowyTexture;\n" +
                "        uniform sampler2D sandyTexture;\n" +
                "        uniform sampler2D grassTexture;\n" +
                "        uniform sampler2D rockyTexture;\n" +
                "\n" +
                "        varying vec2 vUV;\n" +
                "\n" +
                "        varying float vAmount;\n" +
                "\n" +
                "        void main()\n" +
                "        {\n" +
                "            // its like .. bottom point - top point .. and the range in between is the fade\n" +
                "            vec4 snowy = (smoothstep(0.60, 0.6205, vAmount) - smoothstep(1.10, 1.20, vAmount)) * texture2D( snowyTexture, vUV * 100.0 );\n" +
                "            vec4 rocky = (smoothstep(0.39, 0.47, vAmount) - smoothstep(0.5985, 0.6195, vAmount)) * texture2D( rockyTexture, vUV * 80.0 );\n" +
                "            vec4 grass = (smoothstep(0.27, 0.38, vAmount) - smoothstep(0.44, 0.45, vAmount)) * texture2D( grassTexture, vUV * 90.0 );\n" +
                "            vec4 sand = (smoothstep(0.05, 0.25, vAmount) - smoothstep(0.28, 0.36, vAmount)) * texture2D( sandyTexture, vUV * 280.0 );\n" +
                "            vec4 water = (smoothstep(-0.30, -0.25, vAmount) - smoothstep(0.0, 0.35, vAmount)) * texture2D( oceanTexture, vUV * 100.0 );\n" +
                "\n" +
                "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) + water + sand + grass + rocky + snowy;\n" +
                "        }",
        };

        this.shaders.TerrainNormal = {

            uniforms: {
                'heightMap': {type: 't', value: null},
                'resolution': {type: 'v2', value: new THREE.Vector2(128, 128)},
                'scale': {type: 'v2', value: new THREE.Vector2(0, 0)},
                'height': {type: 'f', value: 0.05}
            },

            vs: [

                'varying vec2 vUv;',

                'void main() {',

                'vUv = uv;',
                'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

                '}'

            ].join('\n'),

            fs: [

                'uniform float height;',
                'uniform vec2 resolution;',
                'uniform sampler2D heightMap;',

                'varying vec2 vUv;',

                'void main() {',

                'float val = texture2D( heightMap, vUv ).x;',

                'float valU = texture2D( heightMap, vUv + vec2( 1.0 / resolution.x, 0.0 ) ).x;',
                'float valV = texture2D( heightMap, vUv + vec2( 0.0, 1.0 / resolution.y ) ).x;',

                'gl_FragColor = vec4( ( 0.5 * normalize( vec3( val - valU, val - valV, height  ) ) + 0.5 ), 1.0 );',

                '}'

            ].join('\n')

        };


        this.shaders.TerrainNoise = {

            uniforms: {
                time: {type: 'f', value: 1.0},
                scale: {type: 'v2', value: new THREE.Vector2(1.5, 1.5)},
                offset: {type: 'v2', value: new THREE.Vector2(0, 0)},
            },
            fs: [

                'uniform float time;',
                'varying vec2 vUv;',

                'vec4 permute( vec4 x ) {',

                'return mod( ( ( x * 34.0 ) + 1.0 ) * x, 289.0 );',

                '}',

                'vec4 taylorInvSqrt( vec4 r ) {',

                'return 1.79284291400159 - 0.85373472095314 * r;',

                '}',

                'float snoise( vec3 v ) {',

                'const vec2 C = vec2( 1.0 / 6.0, 1.0 / 3.0 );',
                'const vec4 D = vec4( 0.0, 0.5, 1.0, 2.0 );',

                '// First corner',

                'vec3 i  = floor( v + dot( v, C.yyy ) );',
                'vec3 x0 = v - i + dot( i, C.xxx );',

                '// Other corners',

                'vec3 g = step( x0.yzx, x0.xyz );',
                'vec3 l = 1.0 - g;',
                'vec3 i1 = min( g.xyz, l.zxy );',
                'vec3 i2 = max( g.xyz, l.zxy );',

                'vec3 x1 = x0 - i1 + 1.0 * C.xxx;',
                'vec3 x2 = x0 - i2 + 2.0 * C.xxx;',
                'vec3 x3 = x0 - 1. + 3.0 * C.xxx;',

                '// Permutations',

                'i = mod( i, 289.0 );',
                'vec4 p = permute( permute( permute(',
                ' i.z + vec4( 0.0, i1.z, i2.z, 1.0 ) )',
                '+ i.y + vec4( 0.0, i1.y, i2.y, 1.0 ) )',
                '+ i.x + vec4( 0.0, i1.x, i2.x, 1.0 ) );',

                '// Gradients',
                '// ( N*N points uniformly over a square, mapped onto an octahedron.)',

                'float n_ = 1.0 / 7.0; // N=7',

                'vec3 ns = n_ * D.wyz - D.xzx;',

                'vec4 j = p - 49.0 * floor( p * ns.z *ns.z );  //  mod(p,N*N)',

                'vec4 x_ = floor( j * ns.z );',
                'vec4 y_ = floor( j - 7.0 * x_ );    // mod(j,N)',

                'vec4 x = x_ *ns.x + ns.yyyy;',
                'vec4 y = y_ *ns.x + ns.yyyy;',
                'vec4 h = 1.0 - abs( x ) - abs( y );',

                'vec4 b0 = vec4( x.xy, y.xy );',
                'vec4 b1 = vec4( x.zw, y.zw );',


                'vec4 s0 = floor( b0 ) * 2.0 + 1.0;',
                'vec4 s1 = floor( b1 ) * 2.0 + 1.0;',
                'vec4 sh = -step( h, vec4( 0.0 ) );',

                'vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;',
                'vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;',

                'vec3 p0 = vec3( a0.xy, h.x );',
                'vec3 p1 = vec3( a0.zw, h.y );',
                'vec3 p2 = vec3( a1.xy, h.z );',
                'vec3 p3 = vec3( a1.zw, h.w );',

                '// Normalise gradients',

                'vec4 norm = taylorInvSqrt( vec4( dot( p0, p0 ), dot( p1, p1 ), dot( p2, p2 ), dot( p3, p3 ) ) );',
                'p0 *= norm.x;',
                'p1 *= norm.y;',
                'p2 *= norm.z;',
                'p3 *= norm.w;',

                '// Mix final noise value',

                'vec4 m = max( 0.6 - vec4( dot( x0, x0 ), dot( x1, x1 ), dot( x2, x2 ), dot( x3, x3 ) ), 0.0 );',
                'm = m * m;',
                'return 42.0 * dot( m*m, vec4( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 ), dot( p3, x3 ) ) );',

                '}',

                'float surface3( vec3 coord ) {',

                'float n = 0.0;',

                'n += 1.0 * abs( snoise( coord ) );',
                'n += 0.5 * abs( snoise( coord * 2.0 ) );',
                'n += 0.25 * abs( snoise( coord * 4.0 ) );',
                'n += 0.125 * abs( snoise( coord * 8.0 ) );',

                'return n;',

                '}',

                'void main( void ) {',

                'vec3 coord = vec3( vUv, -time );',
                'float n = surface3( coord );',

                'gl_FragColor = vec4( vec3( n, n, n ), 1.0 );',

                '}'

            ].join('\n'),

            vs: [

                'varying vec2 vUv;',
                'uniform vec2 scale;',
                'uniform vec2 offset;',

                'void main( void ) {',

                'vUv = uv * scale + offset;',
                'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

                '}',

            ].join('\n')
        };

        this.shaders.TerrainLuminosity = {

            uniforms: {
                'tDiffuse': {type: 't', value: null}
            },

            vs: [
                'varying vec2 vUv;',
                'void main() {',
                'vUv = uv;',
                'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
                '}'
            ].join('\n'),
            fs: [
                'uniform sampler2D tDiffuse;',
                'varying vec2 vUv;',
                'void main() {',
                'vec4 texel = texture2D( tDiffuse, vUv );',
                'vec3 luma = vec3( 0.299, 0.587, 0.114 );',
                'float v = dot( texel.xyz, luma );',
                'gl_FragColor = vec4( v, v, v, texel.w );',
                '}'
            ].join('\n')
        };


        this.shaders.TerrainShader2 = {
            uniforms: {
                env: {type: 't', value: null},
                enableReflection: {type: 'i', value: 0},
                useRefract: {type: 'i', value: 0},
                reflectivity: {type: 'f', value: 1.0},
                refractionRatio: {type: 'f', value: 0.98},
                combine: {type: 'i', value: 0},
                fogcolor: {type: 'c', value: new THREE.Color(0x25292e)},

                'oceanTexture': {type: 't', value: null},
                'sandyTexture': {type: 't', value: null},
                'grassTexture': {type: 't', value: null},
                'rockyTexture': {type: 't', value: null},
                'snowyTexture': {type: 't', value: null},

                'enableDiffuse1': {type: 'i', value: 0},
                'enableDiffuse2': {type: 'i', value: 0},
                'enableSpecular': {type: 'i', value: 1},
                'enableFog': {type: 'i', value: 1},

                'tDiffuse1': {type: 't', value: null},
                'tDiffuse2': {type: 't', value: null},
                'tDetail': {type: 't', value: null},
                'tNormal': {type: 't', value: null},
                'tSpecular': {type: 't', value: null},
                'tDisplacement': {type: 't', value: null},

                'uNormalScale': {type: 'f', value: 1.0},

                'uDisplacementBias': {type: 'f', value: 0.0},
                'uDisplacementScale': {type: 'f', value: 1.0},

                'diffuse': {type: 'c', value: new THREE.Color(0xeeeeee)},
                'specular': {type: 'c', value: new THREE.Color(0xFF1111)},
                'ambient': {type: 'c', value: new THREE.Color(0x050505)},
                'shininess': {type: 'f', value: 30},
                'opacity': {type: 'f', value: 1},

                'vAmount': {type: 'f', value: 30},

                'uRepeatBase': {type: 'v2', value: new THREE.Vector2(1, 1)},
                'uRepeatOverlay': {type: 'v2', value: new THREE.Vector2(1, 1)},

                'uOffset': {type: 'v2', value: new THREE.Vector2(0, 0)}
            },

            //] ),

            fs: [
                //'precision highp float;',
                'uniform sampler2D env;',
                'uniform sampler2D oceanTexture;',
                'uniform sampler2D sandyTexture;',
                'uniform sampler2D grassTexture;',
                'uniform sampler2D rockyTexture;',
                'uniform sampler2D snowyTexture;',

                'uniform bool useRefract;',
                'uniform float refractionRatio;',
                'uniform float reflectivity;',
                'uniform bool enableReflection;',
                'uniform bool enableFog;',

                'varying float vAmount;',

                'uniform vec3 fogcolor;',
                'uniform vec3 ambient;',
                'uniform vec3 diffuse;',
                'uniform vec3 specular;',
                'uniform float shininess;',
                'uniform float opacity;',

                'uniform bool enableDiffuse1;',
                'uniform bool enableDiffuse2;',
                'uniform bool enableSpecular;',

                'uniform sampler2D tDiffuse1;',
                'uniform sampler2D tDiffuse2;',
                'uniform sampler2D tDetail;',
                'uniform sampler2D tNormal;',
                'uniform sampler2D tSpecular;',
                'uniform sampler2D tDisplacement;',

                'uniform float uNormalScale;',

                'uniform vec2 uRepeatOverlay;',
                'uniform vec2 uRepeatBase;',

                'uniform vec2 uOffset;',

                'varying vec3 vTangent;',
                'varying vec3 vBinormal;',
                'varying vec3 vNormal;',
                'varying vec2 vUv;',
                'varying vec2 vN;',


                'varying vec3 vViewPosition;',
                'varying vec3 vWorldPosition;',

                //THREE.ShaderChunk[ 'shadowmap_pars_fragment' ],
                //THREE.ShaderChunk[ 'envmap_pars_fragment' ],
                //THREE.ShaderChunk[ 'fog_pars_fragment' ],


                'void main() {',

                'vec2 uvOverlay = uRepeatOverlay * vUv + uOffset;',
                'vec2 uvBase = uRepeatBase * vUv;',

                'vec4 water = (smoothstep(0.01, 0.20, vAmount) - smoothstep(0.24, 0.26, vAmount)) * texture2D( oceanTexture, uvOverlay );',
                'vec4 sandy = (smoothstep(0.10, 0.30, vAmount) - smoothstep(0.28, 0.31, vAmount)) * texture2D( sandyTexture, uvOverlay );',
                'vec4 grass = (smoothstep(0.28, 0.40, vAmount) - smoothstep(0.35, 0.40, vAmount)) * texture2D( grassTexture, uvOverlay );',
                'vec4 rocky = (smoothstep(0.30, 0.76, vAmount) - smoothstep(0.40, 0.70, vAmount)) * texture2D( rockyTexture, uvOverlay );',
                'vec4 snowy = (smoothstep(0.80, 0.99, vAmount))                                   * texture2D( snowyTexture, uvOverlay );',

                'gl_FragColor = vec4( vec3( 1.0 ), opacity );',

                'vec3 specularTex = vec3( 1.0 );',


                'vec3 normalTex = texture2D( tDetail, uvOverlay ).xyz * 2.0 - 1.0;',
                'normalTex.xy *= uNormalScale;',
                'normalTex = normalize( normalTex );',


                'if( enableDiffuse1 && enableDiffuse2 ) {',

                'vec4 colDiffuse1 = texture2D( tDiffuse1, uvOverlay );',
                'vec4 colDiffuse2 = texture2D( tDiffuse2, uvOverlay );',

                /*'#ifdef GAMMA_INPUT',
                    'colDiffuse1.xyz *= colDiffuse1.xyz;',
                    'colDiffuse2.xyz *= colDiffuse2.xyz;',
                '#endif',*/

                'gl_FragColor = gl_FragColor * mix ( colDiffuse1, colDiffuse2, 1.0 - texture2D( tDisplacement, uvBase ) );',
                //'gl_FragColor = gl_FragColor * mix ( colDiffuse1, colDiffuse2, 1.0 - texture2D( tDisplacement, uvBase ) )+ water + sandy + grass + rocky + snowy;',
                'gl_FragColor = vec4( gl_FragColor.xyz, 1.0 )+ water + sandy + grass + rocky + snowy;',
                //'fullTexture = vec4( gl_FragColor.xyz, 1.0 )+ water + sandy + grass + rocky + snowy;',
                //'gl_FragColor.xyz = mix( gl_FragColor.xyz, fullTexture, 1.0 );',


                ' } else if( enableDiffuse1 ) {',

                'gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay );',
                //'gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay ) + water + sandy + grass + rocky + snowy;',
                //'gl_FragColor = gl_FragColor * mix ( tDiffuse1, water + sandy + grass + rocky + snowy, 1.0 - texture2D( tDisplacement, uvBase ) );',

                '} else if( enableDiffuse2 ) {',

                'gl_FragColor = gl_FragColor * texture2D( tDiffuse2, uvOverlay );',

                '}',

                'if( enableSpecular )',
                'specularTex = texture2D( tSpecular, uvOverlay ).xyz;',

                'mat3 tsb = mat3( vTangent, vBinormal, vNormal );',
                'vec3 finalNormal = tsb * normalTex;',

                'vec3 normal = normalize( finalNormal );',
                'vec3 viewPosition = normalize( vViewPosition );',


                'if ( enableReflection ) {',
                // environment
                'vec3 ev = texture2D( env, vN ).rgb;',
                //'gl_FragColor.xyz *= ev;',
                'gl_FragColor.xyz = mix( gl_FragColor.xyz, ev.xyz, reflectivity );',
                '}',

                // fog
                'if(enableFog){',
                'float circle_radius_min = 0.3;',
                'float circle_radius_max = 0.5;',
                'float fogDensity = 0.4;',
                'float fog_far = 30.4;',
                'vec2 nuv = vUv - vec2(0.5, 0.5);',
                'float dist =  sqrt(dot(nuv, nuv));',
                //'vec3 fog_color = vec3(1.0/37., 1.0/41., 1.0/46.);',
                'float fog = 0.0;',
                'if ( dist > circle_radius_min )',
                'fog =(dist-circle_radius_min)*5.0;',

                //'float fog = fogDensity * (gl_FragCoord.z / gl_FragCoord.w) / fog_far;',
                //'float fog = fogDensity * (vUv.x / vUv.y) / fog_far;',
                //'fog -= .2;',
                //'vec3 col = mix( fogcolor, gl_FragColor.xyz , clamp(1. - fog, 0., 1.));',
                //'gl_FragColor = vec4(col, 1.);',
                'gl_FragColor = vec4(gl_FragColor.xyz, 1.-fog);',
                '}',

                '}'

            ].join('\n'),

            vs: [
                //'precision highp float;',
                'attribute vec4 tangent;',

                'uniform vec2 uRepeatBase;',

                'uniform sampler2D tNormal;',

                'uniform sampler2D tDisplacement;',
                'uniform float uDisplacementScale;',
                'uniform float uDisplacementBias;',

                'varying vec3 vTangent;',
                'varying vec3 vBinormal;',
                'varying vec3 vNormal;',
                'varying vec2 vUv;',

                'varying vec3 vViewPosition;',
                'varying vec3 vWorldPosition;',
                'varying float vAmount;',
                // spherical test
                'varying vec2 vN;',
                'varying vec3 vPos;',

                'void main() {',

                'vNormal = normalize( normalMatrix * normal );',

                // tangent and binormal vectors

                'vTangent = normalize( normalMatrix * tangent.xyz );',

                'vBinormal = cross( vNormal, vTangent ) * tangent.w;',
                'vBinormal = normalize( vBinormal );',

                // texture coordinates

                'vUv = uv;',

                'vec4 bumpData = texture2D( tDisplacement, uv );',
                'vAmount = bumpData.r;',

                'vec2 uvBase = uv * uRepeatBase;',

                // displacement mapping

                'vec3 dv = texture2D( tDisplacement, uvBase ).xyz;',
                'float df = uDisplacementScale * dv.x + uDisplacementBias;',
                'vec3 displacedPosition = normal * df + position;',

                'vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );',
                'vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );',


                'gl_Position = projectionMatrix * mvPosition;',

                'vWorldPosition = worldPosition.xyz;',
                'vViewPosition = -mvPosition.xyz;',

                'vec3 normalTex = texture2D( tNormal, uvBase ).xyz * 2.0 - 1.0;',
                'vNormal = normalMatrix * normalTex;',

                // spherical
                'vPos = normalize( vec3( mvPosition ) );',
                //'vNormal = normalize( normalMatrix * normal );',
                'vec3 r = reflect( vPos, normalize(vNormal) );',
                'float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );',
                'vN = r.xy / m + .5;',
                '}'

            ].join('\n')

        }
    }

    getShaders() {
        return this.shaders;
    }

    getShader(name) {
        return this.shaders[ name ];
    }

    addShader(name, shader) {
        this.shaders[ name ] = shader;
    }

    getShaderMaterial(name) {
        if (typeof this.materials[ name ] == "undefined") {
            this.materials[ name ] = new THREE.ShaderMaterial(this.getShader(name));
        }

        return this.materials[ name ];
    }

    setUniforms(name, uniforms) {

        if(typeof this.shaders[ name ] == "undefined") return false;

        this.shaders[ name ]['uniforms'] = uniforms;

        return true;

    }

}

module.exports = shaders;