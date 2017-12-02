

export default class terrain_tile {
    constructor(scene, sector_x, sector_y, spoofing_x, spoofing_y) {
        // for ease
        this.scene = scene;
        this.terrain = scene.world.terrain;

        // this will hold the X and Y that this tile represents
        this.sector_x = sector_x;
        this.sector_y = sector_y;

        // for ease
        this.x = this.sector_x;
        this.y = this.sector_y;

        // should be set to the same size as the heightmap image
        this.data_size = this.terrain.data_size;

        // is the mesh set?
        this.is_loaded = false;

        // are we trying?
        this.is_loading = false;

        // is this mesh needed?
        this.is_needed = false;

        // has init() been called?
        this.has_init = false;

        // should we reinit and reload the mesh?
        this.needs_refresh = false;

        // this tiles mesh (a member of the world group)
        this.mesh = null;

        // for hit detection
        this.name = scene.world.name;

        var extra = "";
        if(spoofing_x) {
            extra = " Acting as [ " + spoofing_x + ", " + spoofing_y + " ]";
        }

        mcec.log("Terrain sector created [ " + sector_x + ", " + sector_y +" ]" + extra);

        this.setSpoofing(spoofing_x, spoofing_y, true);


    }

    setSpoofing(spoofing_x, spoofing_y, bypass_init) {
        //console.log("SET SPOOFING TO", spoofing_x, spoofing_y, this.id());

        // if(spoofing_x !== this.spoofing_x || spoofing_y !== this.spoofing_y) {
        //     if(!bypass_init) this.terrain.initSector(this);
        // }

        // where are we faking as, if any?
        this.spoofing_x = spoofing_x;
        this.spoofing_y = spoofing_y;

        // raw coords, always populated
        this.raw_x = spoofing_x ? spoofing_x : this.x;
        this.raw_y = spoofing_y ? spoofing_y : this.y;

        // this is for our infinite world actual coords (could be negative or overmaxed grid coords)
        this.spoofing = {x: spoofing_x, y:spoofing_y};
        this.is_spoofing = spoofing_x ? true : false;
    }

    id() {
        return "[" + this.sector_x + "," + this.sector_y + "] - as:[" + this.raw_x + "," + this.raw_y + "]";
    }

    // init the camera and whatever is needed for gpu picking this actual tile
    initPicker2__UNUSED() {
        var renderer = this.scene.getRenderer();

        this.picking_texture = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});
        var texture = new THREE.Texture(this.canvas, THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping, THREE.NearestFilter, THREE.NearestFilter);


        //this.picking_camera = new THREE.OrthographicCamera(this.terrain.sector_size / - 2, this.terrain.sector_size / 2, this.terrain.sector_size / 2, this.terrain.sector_size / - 2, -10000, 10000);
        this.picking_camera = new THREE.PerspectiveCamera(40, 1, 1, 10000);

        this.picking_camera.lookAt(new THREE.Vector3(0, -1, 0));
        this.picking_camera.position.y = this.terrain.sector_alt[1];
        this.picking_camera.position.x = this.terrain.sector_size / 2;
        this.picking_camera.position.z = this.terrain.sector_size / 2;
        //this.scene.camera.tits = this.picking_camera;

        this.picking_scene = new THREE.Scene();


        var mesh = new THREE.Mesh(this.mesh.geometry, texture);
        this.picking_scene.add(mesh);





        // render our scene and store it for picking whenever
        // renderer.render(this.picking_scene, this.picking_camera);//, this.picking_texture);
        //
        // var size = this.terrain.sector_size * this.terrain.sector_size;
        // var gl = renderer.getContext();
        // var pixelBuffer = new Uint8Array(4 * size);
        //
        // //read the pixel under the mouse from the texture
        // gl.readPixels(0, 0, this.terrain.sector_size, this.terrain.sector_size, gl.RGBA, gl.UNSIGNED_BYTE, pixelBuffer);
        //
        //
        // var screenshot = renderer.domElement.toDataURL();
        // //
        // var ss = new Image();
        // ss.src = screenshot;
        // //
        // var src = document.getElementById("body");
        //
        // //
        // if(this.x == 0 && this.y == 0) {
        //     console.log(pixelBuffer);
        //     src.appendChild(ss);
        // }

        //console.log(pixelBuffer);

        // //interpret the pixel as an ID
        // var id = (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | (pixelBuffer[2]);
        // var data = pickingData[id];
        // if(data){
        //     //move our highlightBox so that it surrounds the picked object
        //     if(data.position && data.rotation && data.scale){
        //         highlightBox.position.copy(data.position);
        //         highlightBox.rotation.copy(data.rotation);
        //         highlightBox.scale.copy(data.scale).addSelf(offset);
        //         highlightBox.visible = true;
        //     }
        // } else {
        //     highlightBox.visible = false;
        // }

        mcec.log(this.id() + " GPU Picker initialized and rendered");
    }

    initPicker() {
        mcec.log("Initializing picker " + this.id());
        this.raycaster = new THREE.Raycaster();
        this.picking_scene = new THREE.Scene();
        this.picking_objects = [];
        this.faces_created = [];
    }

    // called after the mesh is actually loaded into the scene
    init() {
        // ideas..

        mcec.log("Sector init " + this.id());
        this.initPicker();

        // this.point = new THREE.Mesh(
        //     new THREE.SphereGeometry(0.1, 32, 32),
        //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
        // );
        //
        // this.scene.add(this.point);
        // this.point.position.copy(this.mesh.position);

        // this.initCharacters();
        // this.initObjects();
        // this.initTerrain();
        //
    }

    // using x,z because we arent dealing with our grid system, but actual position/vector
    setPosition(x, y, z) {
        if(!z) {
            z = y;
            y = false;
        }

        this.mesh.position.x = x;
        if(y) this.mesh.position.y = y;
        this.mesh.position.z = z;

        mcec.log(this.id() + " setting position = (" + x + ", " + y + ", " + z + ")");

        return this.mesh.position;
    }

    setPositionInsideSector(x, y, z) {}

    getPosition() {
        return this.mesh.position;
    }

    unload() {
        delete this.mesh;
        this.mesh = null;

        this.has_init = false;
        this.is_loaded = false;
    }

    onLoad(callback) {
        this.callbacks.push(callback);
    }

    // basically init
    load() {
        // if(this.is_loaded) return;
        // if(this.is_loading) return;

        mcec.log("Starting LOAD for sector " + this.id());

        this.is_loading = true;
        this.is_loaded = false;
        this.has_init = false;
        this.needs_refresh = false;

        // this is going to come from the server so, just sloppy load it for now nastayyyy
        if(!this.image_map) {
            var bumpTexture = new THREE.ImageUtils.loadTexture('shared/world.png');
            bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
            this.image_map = bumpTexture;
        }

        var self = this;
        this.getHeightDataFromImage(this.image_map.image, function(data) {

            var filt = self.BoxFilterHeightMap(self.data_size[0], self.data_size[1], data, true, 1);
            self.setHeightMap(filt);

            var min = 0, max = 0;
            for(var i=0; i<filt.length; i++) {

                var val = filt[i];

                if(min == 0) min = val;
                if(val > max) max = val;
                if(val < min) min = val;

            }

            self.heightmap_min = min;
            self.heightmap_min = max;

            // create mesh
            var mesh = self.heightDataToMesh(filt);

            // set the mesh and set is_loaded which tells terrain to init this tile
            self.mesh = mesh;
            self.is_loaded = true;
            self.is_loading = false;

            // add to world group
            self.terrain.group.add(mesh);

            self.terrain.initSector(self);


            mcec.log("SET MESH FOR " + self.id());

            // for(var i=0; i<self.callbacks.length; i++) {
            //     self.callbacks[i](self);
            // }
            //
            // self.callbacks = [];
        });
    }

    setHeightMap(data) {
        this.heightmap = data;
    }

    BoxFilterHeightMap(width, height, heightMap, smoothEdges, passes) {
        //     width: Width of the height map in bytes
        //    height: Height of the height map in bytes
        // heightMap: Pointer to your height map data

        // Temporary values for traversing single dimensional arrays
        var x = 0;
        var z = 0;

        var widthClamp = (smoothEdges) ?  width : width  - 1;
        var heightClamp = (smoothEdges) ? height : height - 1;

        // [Optimization] Calculate size ahead of time
        var size = width * height;

        // Validate requirements
        if (!heightMap) return;
        if (!passes) passes = 1;

        // Allocate the result
        var result = new Float32Array( size );

        // Make sure memory was allocated
        if (!result) return;

        for (var z = ((smoothEdges) ? 0 : 1); z < heightClamp; ++z) {

            for (var x = ((smoothEdges) ? 0 : 1); x < widthClamp; ++x) {
                // Sample a 3x3 filtering grid based on surrounding neighbors

                var value = 0.0;
                var cellAverage = 1.0;

                // Sample top row

                if (((x - 1) + (z - 1) * width) >= 0 &&
                    ((x - 1) + (z - 1) * width) < size)
                {
                    value += heightMap[(x - 1) + (z - 1) * width];
                    cellAverage++;
                }

                if (((x - 0) + (z - 1) * width) >= 0 &&
                    ((x - 0) + (z - 1) * width) < size)
                {
                    value += heightMap[(x    ) + (z - 1) * width];
                    cellAverage++;
                }

                if (((x + 1) + (z - 1) * width) >= 0 &&
                    ((x + 1) + (z - 1) * width) < size)
                {
                    value += heightMap[(x + 1) + (z - 1) * width];
                    cellAverage++;
                }

                // Sample middle row

                if (((x - 1) + (z - 0) * width) >= 0 &&
                    ((x - 1) + (z - 0) * width) < size)
                {
                    value += heightMap[(x - 1) + (z    ) * width];
                    cellAverage++;
                }

                // Sample center point (will always be in size)
                value += heightMap[x + z * width];

                if (((x + 1) + (z - 0) * width) >= 0 &&
                    ((x + 1) + (z - 0) * width) < size)
                {
                    value += heightMap[(x + 1) + (z    ) * width];
                    cellAverage++;
                }

                // Sample bottom row

                if (((x - 1) + (z + 1) * width) >= 0 &&
                    ((x - 1) + (z + 1) * width) < size)
                {
                    value += heightMap[(x - 1) + (z + 1) * width];
                    cellAverage++;
                }

                if (((x - 0) + (z + 1) * width) >= 0 &&
                    ((x - 0) + (z + 1) * width) < size)
                {
                    value += heightMap[(x    ) + (z + 1) * width];
                    cellAverage++;
                }

                if (((x + 1) + (z + 1) * width) >= 0 &&
                    ((x + 1) + (z + 1) * width) < size)
                {
                    value += heightMap[(x + 1) + (z + 1) * width];
                    cellAverage++;
                }

                // Store the result
                result[x + z * width] = (value / cellAverage);
            }
        }

        if(passes > 1) {

            for(var pass=1; pass<passes; pass++) {
                mcec.log("Pass #" + (pass+1) + " for heightmap");
                result = this.BoxFilterHeightMap(width, height, result, smoothEdges);
            }
        }

        return result;
    }

    getHeightDataFromImage(image, callback) {
        var self = this;

        // has our image already loaded? if so just process it
        if(typeof image.has_init !== "undefined") {
            self.processImageHeightData(image, callback);
            return;
        }

        // process after loading
        image.onload = function () {
            self.processImageHeightData(image, callback);
        };
    }

    processImageHeightData(image, callback) {
        var self = this;
        var width = self.data_size[0];
        var height = self.data_size[1];

        // create canvas
        self.canvas = document.createElement('canvas');
        self.canvas.width = width; // or 'width' if you want a special/scaled size
        self.canvas.height = height; // or 'height' if you want a special/scaled size

        // various shit
        var size = width * height;
        var data = new Float32Array( size );
        var min = self.terrain.sector_alt[0];
        var max = self.terrain.sector_alt[1];
        var range = max - min;

        // draw the image onto the canvas
        var context = self.canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        // loop through all x,y coords and add to data[]
        // (float 0-1 for pixel depth) x (height range) + min
        var range = max - min;
        var i = 0;
        for ( var y = 0; y < height; y ++ ) {

            var row = context.getImageData(0, y, width, 1).data;

            for ( var x = 0; x < width; x ++ ) {

                var r = row[x*4];
                var g = row[(x*4)+1];
                var b = row[(x*4)+2];
                var a = row[(x*4)+3];

                var num = ((r / 255) + (g / 255) + (b / 255)) / 3;

                data[ i ] = (num * range) + min;

                i++;
            }
        }

        image.has_init = true;
        callback(data);
    }

    heightDataToMesh(data) {
        // geometry
        var geometry = this.getTerrainGeometryFromHeightmap(data, this.terrain.sector_size, this.terrain.sector_size);

        // material
        // var texture = THREE.ImageUtils.loadTexture( 'shared/world.png' );
        // var material = new THREE.MeshLambertMaterial( { map: texture, side: THREE.DoubleSide, morph_normals: true } );

        // mesh
        var mesh = new THREE.Mesh( geometry, this.scene.world.shaders.getShaderMaterial('terrain'));
        mesh.name = this.name;

        return mesh;
    }

    addWireframe(mesh) {
        if(!mesh) mesh = this.mesh;
        // // wireframe
        var geo = new THREE.WireframeGeometry( mesh.geometry ); // or WireframeGeometry
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        mesh.add( wireframe );
    }

    getVertice(x, y) {

        var data = this.mesh.geometry.attributes.position.array;
        var square = (y * this.data_size[0]) + x;
        var pos = (square * 3);

        var vertice = new THREE.Vector3(data[ pos ], data[ pos + 1 ], data[ pos + 2 ]);
        return vertice;
    }

    getNormal(x, y) {
        var data = this.mesh.geometry.attributes.normal.array;
        var square = (y * this.data_size[0]) + x;
        var pos = (square * 3);

        var vertice = new THREE.Vector3(data[ pos ], data[ pos + 1 ], data[ pos + 2 ]);
        return vertice;
    }

    getFaceFromGridPoint(precision_x, precision_y, just_geom) {
        // normalize the x and y
        var x = Math.floor(precision_x);
        var y = Math.floor(precision_y);

        // we convert the precision x and y to decimal, basically a percentage of X and Y
        // so its 0-1, so if we combine the two, and we are above 1 (100%) then we are over
        // the halfway point of the triangle. dont question me bitch.
        if(((precision_x % 1) + (precision_y % 1)) < 1) {
            var face = 1;

        } else {
            var face = 2;
        }

        // cache the faces
        // todo: limit the amount cached and auto purge
        if(typeof this.faces_created == "undefined") this.faces_created = [];
        if(typeof this.faces_created[x] == "undefined") this.faces_created[x] = [];
        if(typeof this.faces_created[x][y] == "undefined") this.faces_created[x][y] = [];
        if(typeof this.faces_created[x][y][face] !== "undefined") return this.faces_created[x][y][face];

        // grab our vertices (for the whole square)
        // todo: do something clever later using the face # to limit this
        var v1 = this.getVertice(x, y);
        var v2 = this.getVertice(x + 1, y);
        var v3 = this.getVertice(x, y + 1);
        var v4 = this.getVertice(x + 1, y + 1);

        // math *yawn*
        var normal = new THREE.Vector3( 0, 1, 0 );
        normal = this.mesh.position.clone();
        var geom = new THREE.Geometry();

        // which side of the square are we pushing
        if(face == 1) {
            geom.vertices.push(v1);
            geom.vertices.push(v2);
            geom.vertices.push(v3);
            geom.faces.push(new THREE.Face3(0, 1, 2, normal));

            var tri = new THREE.Triangle(v1, v2, v3);

         } else {
            geom.vertices.push(v2);
            geom.vertices.push(v3);
            geom.vertices.push(v4);
            geom.faces.push(new THREE.Face3(2, 1, 0, normal));

            var tri = new THREE.Triangle(v4, v3, v2);
        }

        // update shit
        //geom.verticesNeedUpdate = true;
        //geom.elementsNeedUpdate = true;
        //geom.morphTargetsNeedUpdate = true;
        //geom.uvsNeedUpdate = true;
        //geom.normalsNeedUpdate = true;
        //geom.colorsNeedUpdate = true;
        //geom.tangentsNeedUpdate = true;

        geom.computeFaceNormals();
        //geom.computeVertexNormals();
        //geom.computeBoundingBox();
        //geom.computeBoundingSphere();

        // dont do the rest if we just want the geometry
        if(just_geom) return geom;


        // create object
        var object = new THREE.Mesh( geom, new THREE.MeshBasicMaterial({color: 0xcccc00, side: THREE.DoubleSide, transparent: true, opacity: 0.5}) );

        // set properties
        object.position.copy(this.mesh.position);
        object.position.y += 0.01;
        object.name = "click_face";
        object.triangle = tri;

        // cache this face
        this.faces_created[x][y][face] = object;

        // add to picking scene
        //this.picking_scene.add(object);

        // clone and add for visibility / debug
        var scene_obj = object.clone();
        this.scene.add(scene_obj);
        this.addWireframe(scene_obj);

        // return the face!
        return this.faces_created[x][y][face];
    }

    getTerrainGeometryFromHeightmap(data, width, height) {

        // build geometry
        var geometry	= new THREE.PlaneBufferGeometry(width, height, (this.data_size[0]-1), (this.data_size[1]-1));
        geometry.rotateX( - Math.PI / 2 );

        var vertices = geometry.attributes.position.array;
        for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
            vertices[ j + 1 ] = data[ i ];
        }

        //var square = 51;

        //var vertice = square * 3 + 1;

        //vertices[ vertice ] = -80;
        //vertices[312] = -50;
        // vertices[313] = -50;
        // vertices[314] = -50;



        // notify the geometry need to update vertices
        //geometry.mergeVertices();
        // geometry.dynamic = true;
        // geometry.verticesNeedUpdate	= true;
        // geometry.normalsNeedUpdate	= true;

        geometry.verticesNeedUpdate = true;
        geometry.elementsNeedUpdate = true;
        geometry.morphTargetsNeedUpdate = true;
        geometry.uvsNeedUpdate = true;
        geometry.normalsNeedUpdate = true;
        geometry.colorsNeedUpdate = true;
        geometry.tangentsNeedUpdate = true;

        geometry.computeFaceNormals();
        geometry.computeVertexNormals();

        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();


        return geometry;
    }

    getHeightData(img) {
        var canvas = document.createElement( 'canvas' );
        canvas.terrain.sector_size = 128;
        canvas.terrain.sector_size = 128;
        var context = canvas.getContext( '2d' );

        var size = 128 * 128, data = new Float32Array( size );

        context.drawImage(img, 0,0);

        for ( var i = 0; i < size; i ++ ) {
            data[i] = 0
        }

        var imgd = context.getImageData(0, 0, 128, 128);
        var pix = imgd.data;

        var j=0;
        for (var i = 0, n = pix.length; i < n; i += (4)) {
            var all = pix[i]+pix[i+1]+pix[i+2];
            data[j++] = all/30;
        }

        return data;
    }

    Ammo_createTerrainShape(data) {

        // This parameter is not really used, since we are using PHY_FLOAT height data type and hence it is ignored
        var heightScale = 5;

        // Up axis = 0 for X, 1 for Y, 2 for Z. Normally 1 = Y is used.
        var upAxis = 1;

        // hdt, height data type. "PHY_FLOAT" is used. Possible values are "PHY_FLOAT", "PHY_UCHAR", "PHY_SHORT"
        var hdt = "PHY_FLOAT";

        // Set this to your needs (inverts the triangles)
        var flipQuadEdges = true;

        // Creates height data buffer in Ammo heap
        //this.ammoHeightData = Ammo._malloc( 4 * this.data_size[0] * this.data_size[1] );

        // Copy the javascript height data array to the Ammo one.
        // var p = 0;
        // var p2 = 0;
        // for ( var j = 0; j < this.data_size[1]; j ++ ) {
        //     for ( var i = 0; i < this.data_size[0]; i ++ ) {
        //
        //         // write 32-bit float data to memory
        //         Ammo.HEAPF32[this.ammoHeightData + p2 >> 2] = data[ p ];
        //
        //         p ++;
        //
        //         // 4 bytes/float
        //         p2 += 4;
        //     }
        // }
        //
        // // Creates the heightfield physics shape
        // var heightFieldShape = new Ammo.btHeightfieldTerrainShape(
        //
        //     this.data_size[0],
        //     this.data_size[1],
        //
        //     this.ammoHeightData,
        //
        //     heightScale,
        //     this.terrain.sector_alt[0],
        //     this.terrain.sector_alt[1],
        //
        //     upAxis,
        //     hdt,
        //     flipQuadEdges
        // );

        // Set horizontal scale
        var scaleX = this.terrain.sector_size / ( this.data_size[0] - 1 );
        var scaleZ = this.terrain.sector_size / ( this.data_size[1] - 1 );

        scaleX = (scaleX) * this.model.scale.x;
        scaleZ = (scaleZ) * this.model.scale.z;

        //console.log("GET RAW", heightFieldShape.getRawHeightFieldValue( 100 , 100 ));


        //heightFieldShape.setLocalScaling( new Ammo.btVector3( scaleX, this.model.scale.y, scaleZ ) );
        //heightFieldShape.setScale(2, 2);
        //heightFieldShape.setMargin( 0.05 );

        //return heightFieldShape;

    }

    update() {
        this.is_needed = false;
        this.terrain.loopNeededSectors((x, y) => {
            var safeX = this.terrain.safeX(x);
            var safeY = this.terrain.safeY(y);

            // check if im needed
            if(safeX == this.x && safeY == this.y) {
                // im necessary for the scene
                this.is_needed = true;

                // check if spoofing is needed
                if(safeX !== x || safeY !== y) {

                    // check if spoofing is current (if ive moved)
                    if(this.spoofing_x !== x || this.spoofing_y !== y) {

                        // update spoofing
                        this.setSpoofing(x, y);

                        // seems like a special case, where the sector is never unloaded
                        // but just moved. and it needs to be repositioned
                        // for example, if sector 1,1 is needed very next, as -14,-14, and never unloads
                        // we can just reinit
                        if(this.is_loaded) this.terrain.initSector(this);
                    }
                }
            }
        });

        // am i needed?
        if(this.is_needed) {

            // well have i init?
            if(!this.is_loaded) {

                // am i at least trying?
                if(!this.is_loading) {

                    // start shit
                    this.load();
                }
            }
        } else {
            // im not needed, but im loaded? wtf?
            if(this.is_loaded || this.has_init) {
                this.terrain.unloadSector(this);
            }
        }
    }

    getSurroundingCoords(x, y, radius) {
        // populate this shit with the sectors we need to load
        var area = [];

        // what type of grid are we making around the player
        if(!radius) radius = 3;

        // figure shit out
        for(var i=0; i<radius; i++) {

            var _x = i + x - Math.floor(radius / 2);

            for(var j=0; j<radius; j++) {

                var _y = j + y - Math.floor(radius / 2);
                var coords = {x: _x, y: _y};

                area.push(coords);
            }
        }

        return area;
    }

    getHeightMapValueAt(x, z, filter_passes) {
        if(typeof this.heightmap == "undefined") return false;
        if(!filter_passes) filter_passes = 0;

        // get the grid coords, aka location on the map image per pixel, of our x,z
        var grid_coords = this.terrain.getGridCoordsAt(x, z);

        // how many times will we average the surrounding pixels values into this ones
        if(filter_passes > 0) {
            // var surrounding = this.getSurroundingCoords(x, z, 5);
            //
            // var total = 0;
            // var count = 0;
            //
            // for(var i=0; i<filter_passes; i++) {
            //     for(var j=0; j<surrounding.length; j++) {
            //
            //         var coords = surrounding[ j ];
            //
            //         if(coords.x == parseInt(coords.x, 10) && coords.y == parseInt(coords.y, 10)) {
            //
            //             total += this.getHeightMapValueAt(coords.x, coords.y);
            //             count++;
            //
            //         }
            //     }
            // }


            var total = 0;
            var count = 0;

            for(var i=0; i<filter_passes; i++) {
                var heights = [];
                for(var _z=0; _z<2; _z++) {
                    for(var _x=0; _x<2; _x++) {
                        var coords = {x: grid_coords.x + _x, z: grid_coords.y + _z};

                        if (coords.x == parseInt(coords.x, 10) && coords.z == parseInt(coords.z, 10)) {
                            var val = this.getPixelValueAt(coords.x, coords.z);

                            heights.push(val);

                            // console.log("FILTER COORDS: ", coords, val);
                            // total += val;
                            // count++;

                        }
                    }
                }


                var max = Math.max.apply(Math, heights);
                var min = Math.min.apply(Math, heights);

                for(var j=0; j<heights.length; j++) {

                    var h = heights[j];

                    if (h == min && h !== max) continue;
                    if (h == max && h !== min) {
                        //total += h;
                    }

                    total += h;
                    count++;
                }

            }

            console.log("Done filtering.. total:", total, " count:", count);

            var map_value = parseFloat(total / count);
        } else {
            var map_value = this.getPixelValueAt(grid_coords.x, grid_coords.y);
        }


        //mcec.log("Terrain (" + this.id() + ") -> getHeightMapValueAt(" + x + ", " +  z + ") = [ heightmap coords: " + grid_coords.x + ", " + grid_coords.y + " ] = " + map_value);

        return map_value;
    }

    getPixelValueAt(x, y) {
        //console.log("EVIDENCE5: " + this.heightmap[14356]);

        // get the pixel value for our grid coords
        var pixel = (y * this.data_size[0]) + x;

        // the actual height (y coord) we are looking for
        var map_value = this.heightmap[ pixel ];

        //console.log("pixelValueAt(" + x + ", " + y + ") [" + pixel + "] = " + map_value);

        return map_value;
    }

    getY(x, z, ref_y) {
        if(this.is_loaded == false) return false;

        var self = this;

        if(!ref_y) ref_y = 100;

        // grab the click face, offset it
        var geom = this.terrain.getFaceFromPosition(x, z, true);
        var p = new THREE.Vector3(x, ref_y, z).clone().sub(this.mesh.position);

        // click face geometry and normals
        var face = geom.faces[0];
        var normal = face.normal;

        // vertices
        var va = geom.vertices[face.a];
        var vb = geom.vertices[face.b];
        var vc = geom.vertices[face.c];

        // dot
        var pd = normal.dot(p.clone().sub(va));

        // move p -(pd - td) units in the direction of the normal
        var proj = p.clone().sub(normal.clone().multiplyScalar(pd));

        // closest point of proj and the triangle
        var cp = this.terrain.closestPointToTriangle(proj, va, vb, vc);

        // move our point
        //self.point.position.copy(cp).add(this.mesh.position);

        return cp.y;
    }

    getYRaycast(x, z) {
        if (!this.isMeshLoaded()) return;

        // should already be done
        if(typeof  this.model.geometry !== "undefined") {
            this.model.geometry.computeBoundingBox();
            // use the height for the ray so we dont waste time putting it to 1k or some shit
            var height = this.model.geometry.boundingBox.max.y * this.model.scale.y;} else {
            var height = this.scene.world.terrain.max_height;
        }

        console.log("GETY(): HEIGHT: " + height);

        var raycaster = new THREE.Raycaster();
        raycaster.ray.direction.set( 0, -1, 0 );
        raycaster.ray.origin.set(x, height, z);

        // var mouse = new THREE.Vector2(x, z);
        // var intersect = this.gpuPicker.pick(mouse, raycaster);

        //return intersect;

        //

        var hits = raycaster.intersectObject( this.terrain.getCurrentSector().mesh );
        var hits_filtered = [];

        if( ( hits.length > 0 ) ) {
            for(var i=0; i<hits.length; i++) {
                //if(hits[i].object.name == this.name) {
                console.log(hits[i]);
                var offset = height - hits[i].distance;
                console.log(offset);
                return offset + hits[i].face.normal.y;
                return (hits[i].point.y);//distance);
                //}
            }

        }

        return false;
    }

    computeFaceCentroids( geometry ) {

        var f, fl, face;

        for ( f = 0, fl = geometry.faces.length; f < fl; f ++ ) {

            face = geometry.faces[ f ];
            face.centroid = new THREE.Vector3( 0, 0, 0 );

            if ( face instanceof THREE.Face3 ) {

                face.centroid.add( geometry.vertices[ face.a ] );
                face.centroid.add( geometry.vertices[ face.b ] );
                face.centroid.add( geometry.vertices[ face.c ] );
                face.centroid.divideScalar( 3 );

            } else if ( face instanceof THREE.Face4 ) {

                face.centroid.add( geometry.vertices[ face.a ] );
                face.centroid.add( geometry.vertices[ face.b ] );
                face.centroid.add( geometry.vertices[ face.c ] );
                face.centroid.add( geometry.vertices[ face.d ] );
                face.centroid.divideScalar( 4 );

            }

        }

    }

    // converted from c++
    intersectTriangle (pt, dir, tri) {

        var EPSILON = 0.000001;
        var edge1 = tri[1].sub(tri[0]);
        var edge2 = tri[2].sub(tri[0]);
        var tvec = pt.sub(tri[0]);
        var pvec = dir.cross(edge2);
        var qvec = tvec.cross(edge1);
        var output = new THREE.Vector3();

        console.log(edge1, edge2, tvec, pvec, qvec);

        var det = edge1.dot(pvec);
        if (det < EPSILON) return null;

        var u = tvec.dot(pvec);
        if (u < 0 || u > det) return null;

        var v = dir.dot(qvec);
        if (v < 0 || u + v > det) return null;

        var t = edge2.dot(qvec) / det;
        output.x = pt.x + t * dir.x;
        output.y = pt.y + t * dir.y;
        output.z = pt.z + t * dir.z;

        return output;
    }

}

module.exports = terrain_tile;