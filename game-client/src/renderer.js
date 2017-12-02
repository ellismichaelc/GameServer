import CSS3DObject from '../js/renderers/CSS3DRenderer.js';

class renderer {
    constructor(scene, css_renderer) {
        this.scene = scene;
        this.renderer = this.create(css_renderer);
    }

    create (css_renderer) {

        if(css_renderer) {
            var renderer = new THREE.CSS3DRenderer();

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.domElement.style.position = 'absolute';
            renderer.domElement.style.top = 0;
        } else {
            var renderer = new THREE.WebGLRenderer({antialias: true});

            //var renderer = new THREE.CSS3DRenderer();

            renderer.setPixelRatio( window.devicePixelRatio );

            //renderer.setClearColor("#CCCCCC");
            renderer.sortObjects = false;
            renderer.autoClear = false;
            renderer.gammaInput = true;
            renderer.gammaOutput = true;
            //renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMapEnabled = true;
            renderer.shadowMapType = THREE.PCFSoftShadowMap;

            renderer.shadowMapEnabled = true;
            renderer.shadowMapSoft = true;
        }

        // renderer.shadowCameraNear = 3;
        // renderer.shadowCameraFar = 15000;
        // renderer.shadowCameraFov = 50;
        //
        // renderer.shadowMapBias = 0.0039;
        // renderer.shadowMapDarkness = 0.5;
        // renderer.shadowMapWidth = 1024;
        // renderer.shadowMapHeight = 1024;

        return renderer;
    }

    get () {
        return this.renderer;
    }
}

module.exports = renderer;