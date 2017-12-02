import terrain_tile from "../src/terrain_tile"

export default class terrain {
    constructor(scene, world) {
        this.scene = scene;
        this.world = world;

        //
        // WARNING
        // WARNING
        // WARNING
        //
        // Changing any of these settings may have serious effects in
        // unexpected areas of the game. If there are any static positions set
        // that don't use the grid system, they will be off if sector size is
        // modified, etc.
        //
        // Dont fuck around bra
        //

        // note: this class uses a lot of x,y shit but THREE uses x,z
        // so just keep that in mind we aren't really referring to y in here, but z .. but fuck that shit

        // this group will hold all sectors, assembled, as our terrain
        this.group = new THREE.Group();

        // sector storage
        this.sectors = [];

        // how many sectors do we have on the X and Y axis
        // ex: x:5, y:2 would mean we have 10 sectors, 2 rows of 5
        this.sectors_x = 0;
        this.sectors_y = 0;

        // we want an infinite map.. so at what coord do we loop back to zero?
        // this number should be the tile BEFORE THE OUT OF BOUNDS tile
        // this is basically tile count
        // todo: obviously retrieve from server on init
        this.sector_max_x = 14; // 14 = 15 since zero counts bra
        this.sector_max_y = 14;

        // sectors are square, no need for W x H
        this.sector_size = 10000; // basically Width and Height and below is max depth, varied by the bump map
        this.max_height = this.sector_size / 3; //  max depth interpreted by the height map
        this.data_size = [100, 100]; // the size of each sector square on the heightmap, also vertices per mesh is data_size[0]-1 squared

        // size of our square
        this.square_x = (this.sector_size / (this.data_size[0]-1));
        this.square_y = (this.sector_size / (this.data_size[1]-1));

        // max depth and height of each sector
        this.sector_alt = [this.max_height * -.25, this.max_height * .75]; // 75% of the depth will be above water // 25% will be below water

        ////////////

        this.terrain_ready = false;
        this.sectors_needed = [];
    }

    // convert any coordinate to an infinite world one
    // ex: you have 5 tiles, -1 becomes #5 again
    // note: this function counts zero as a tile! ex: 0,1,2 .. max: 3 .. -1 becomes 2
    infiniteCoord(coord, max) {
        max = max + 1;

        while(coord < 0 || coord >= max) {
            coord = 0 + (coord % max);

            if (coord < 0) {
                coord = -(coord);
                coord = max - coord;
            }
        }

        return coord;
    }

    // convert any grid/sector coord (like -2/5) to a looparound infite one (max-2/5)
    safeSectors(sector_x, sector_y) {
        // INFINITE WORLD MOTHERFUCKER
        // yeah, hi, and it only took this many lines..

        var x = this.infiniteCoord(sector_x, this.sector_max_x);
        var y = this.infiniteCoord(sector_y, this.sector_max_y);

        return {x: x, y: y};
    }

    safeX(sector_x) {
        var sector_x = this.infiniteCoord(sector_x, this.sector_max_x);

        return sector_x;
    }

    safeY(sector_y) {
        var sector_y = this.infiniteCoord(sector_y, this.sector_max_y);

        return sector_y;
    }

    // find a sector [x, y] based on a vector position
    getSectorFromCoords(x, z, safe) {
        // the skybox is currently set to be one tile size
        var tile_size = this.sector_size;

        // which sector is the player on
        var sector_x = (x / tile_size);
        var sector_y = (z / tile_size);

        // % to next sector
        var sector_x_loc = (((x % tile_size) / sector_x) / 100).toFixed(2); // % to next sector (decimal)
        var sector_y_loc = (((z % tile_size) / sector_y) / 100).toFixed(2); // % to next sector (decimal)

        // floor it
        sector_x = Math.floor(sector_x);
        sector_y = Math.floor(sector_y);

        if(safe) {
            sector_x = this.safeX(sector_x);
            sector_y = this.safeY(sector_y);
        }

        return {x: sector_x, y: sector_y};
    }

    // find a sector [x, y] based on a vector position
    getSectorFromPosition(x, z) {
        var sec = this.getSectorIDFromPosition(x, z);
        var sector = this.getSector(sec.x, sec.y);

        return sector;
    }

    // find a sector [x, y] based on a vector position
    getSectorIDFromPosition(x, z, safe) {
        // the skybox is currently set to be one tile size
        var tile_size = this.sector_size;

        // which sector is the player on
        var sector_x = (x / tile_size);
        var sector_y = (z / tile_size);

        // % to next sector
        var sector_x_loc = (((x % tile_size) / sector_x) / 100).toFixed(2); // % to next sector (decimal)
        var sector_y_loc = (((z % tile_size) / sector_y) / 100).toFixed(2); // % to next sector (decimal)

        // floor it
        sector_x = Math.floor(sector_x);
        sector_y = Math.floor(sector_y);

        if(safe) {
            sector_x = this.safeX(sector_x);
            sector_y = this.safeY(sector_y);
        }

        return {x: sector_x, y: sector_y};
    }

    // find a vector2 coord of the top left (0,0) of the tile
    getSectorCoords(sector_x, sector_y) {

    }

    getSector(sector_x, sector_y, spoofing_x, spoofing_y, dont_create) {

        var x = sector_x;
        var y = sector_y;

        var safe_x = this.safeX(x);
        var safe_y = this.safeY(y);

        // detect if we are beyond the grid limits
        if(x !== safe_x || y !== safe_y) {
            // get the real sector we need, spoof as this one
            return this.getSector(safe_x, safe_y, sector_x, sector_y, dont_create);
        }

        var sector = this.getSectorListItem(x, y, spoofing_x, spoofing_y, dont_create);

        return sector;
    }

    old_getSector(sector_x, sector_y, spoofing) {

        var x = sector_x;
        var y = sector_y;


        var info = {
            x: sector_x,
            y: sector_y
        }

        if(spoofing) {
            x = spoofing.x;
            y = spoofing.y;

            info.spoofing_x = x;
            info.spoofing_y = y;
        }

        if(sector_x < 0 || sector_x > this.sector_max_x || sector_y < 0 || sector_y > this.sector_max_y) {
            return this.getSafeSector(sector_x, sector_y, spoofing);
        }

        var sector = this.getSectorListItem(x, y, info);

        return sector;
    }

    getSafeSector(sector_x, sector_y, spoofing) {
        sector_x = this.safeX(sector_x);
        sector_y = this.safeY(sector_y);

        return this.getSector(sector_x, sector_y, spoofing);
    }

    getSectorListItem(x, y, spoofing_x, spoofing_y, dont_create) {

        // detect if we are beyond the grid limits
        if(x < 0 || x > this.sector_max_x || y < 0 || y > this.sector_max_y) {
            mcec.log("ERROR: " + x + ", " + y + " - sector doesn't exist! Should be called through getSector() first");
            return false;
        }

        for(var i=0; i<this.sectors.length; i++) {
            var sector = this.sectors[i];

            if(sector.x == x && sector.y == y) {
                return sector;
            }
        }

        if(dont_create) return false;

        var sector = new terrain_tile(this.scene, x, y, spoofing_x, spoofing_y);
        this.sectors.push(sector);

        return sector;
    }

    getSector_old(sector_x, sector_y, spoofing) {
        // create row if it doesnt exist
        if(typeof this.sectors[ sector_y ] == "undefined") {
            this.sectors[ sector_y ] = [];
        }

        // create col if it doesnt exist, and load tile into it
        if(typeof this.sectors[ sector_y ][ sector_x ] == "undefined") {
            this.terrain_ready = false;
            this.sectors[ sector_y ][ sector_x ] = new terrain_tile(this.scene, sector_x, sector_y, spoofing);
        } else {
            // check if sector has been loaded before, but the mesh was removed due to player movement
            if(this.sectors[ sector_y ][ sector_x ].needs_refresh) {
                this.sectors[ sector_y ][ sector_x ].load();
            }
        }

        var sector = this.sectors[ sector_y ][ sector_x ];
        return sector;
    }

    // load necessary terrain tiles, based on location
    // add to group, return group with callback
    load(callback) {
        // send back the group
        callback(this.group);
    }
    
    getCurrentGridCoords() {
        var player = this.scene.getMyPlayer();
        var x = player.position.x;
        var z = player.position.z;
        
        return this.getGridCoordsAt(player.position.x, player.position.z);
    }

    // which sectors does active player need?
    sectorsForPlayer() {
        var player = this.scene.getMyPlayer();
        var x = player.position.x;
        var z = player.position.z;

        var sectors_needed = this.determineSectorsNeeded(x, z);

        return sectors_needed;
    }

    // which sector is active player on?
    getCurrentSector() {
        var player = this.scene.getMyPlayer();
        var x = player.position.x;
        var z = player.position.z;

        var coords = this.getSectorFromCoords(x, z, true);
        var sector = this.getSector(coords.x, coords.y);

        return sector;
    }

    // returns grid location (like from 200x200 for example) from actual world position
    // note: doesnt return which sector this lands on though
    getGridCoordsAt(x, z) {
        // normalize position
        x = x % this.sector_size;
        z = z % this.sector_size;

        // 0-1 value, a percentage, of where the grid was clicked projected onto the image
        var x_mult = x / this.sector_size;
        var y_mult = z / this.sector_size;

        // calculate xy coords on the image, and round because theres no 1.5 pixel wide anything
        var _x = Math.floor((this.data_size[0]-1) * x_mult);
        var _y = Math.floor((this.data_size[1]-1) * y_mult);

        // invert negative numbers because its coming from the other direction
        if(_x < 0) {
            _x += this.data_size[0];
        }
        if(_y < 0) {
            _y += this.data_size[1];
        }
        return {x: _x, y: _y};
    }

    // returns grid location (like from 200x200 for example) from actual world position
    // note: doesnt return which sector this lands on though
    // note: precision = this may return, say, 5.5x6.7 for 5x6 to indicate where on the grid this location lands!
    getPrecisionGridCoordsAt(x, z) {
        // normalize position
        x = x % this.sector_size;
        z = z % this.sector_size;

        // 0-1 value, a percentage, of where the grid was clicked projected onto the image
        var x_mult = x / this.sector_size;
        var y_mult = z / this.sector_size;

        // calculate xy coords on the image, and round because theres no 1.5 pixel wide anything
        var _x = ((this.data_size[0]-1) * x_mult);
        var _y = ((this.data_size[1]-1) * y_mult);

        // invert negative numbers because its coming from the other direction
        if(_x < 0) {
            _x += this.data_size[0];
        }
        if(_y < 0) {
            _y += this.data_size[1];
        }
        return {x: _x, y: _y};
    }

    // example: 150 x 150 turns into 1500x1500 on a 200x200 grid thats 2000x2000 size
    getRelativePositionFromGridCoords2(x, y) {

        return this.getGridCoordsAt(x, y);
        // // var _x = x % this.sector_size;
        // // var _z = y % this.sector_size;
        //
        // var _x = x / this.data_size[0];
        // var _z = y / this.data_size[0];
        //
        // _x = _x * this.sector_size;
        // _z = _z * this.sector_size;
        //
        // return {x: _x, z: _z};
    }

    // will return real world position (realtive to that sector) from grid coords
    getRelativePositionFromGridCoords(x, y) {
        // this will return generic converted coords for us
        var pos = this.getGridCoordsAt(x, y);

        pos.x += this.mesh.position.x - (this.sector_size / 2);
        pos.z += this.mesh.position.z - (this.sector_size / 2);

        return {x: pos.x, z: pos.z};
    }

    getFaceFromPosition(x, z, just_geom) {
        var sector = this.getSectorFromPosition(x, z);
        var pos = this.getPrecisionGridCoordsAt(x, z);
        var face = sector.getFaceFromGridPoint(pos.x, pos.y, just_geom);

        return face;
        //console.log(pos);
    }

    // this is to be passed raw real word coords
    getY3(x, z, filter_passes) {

        if(!filter_passes) filter_passes = false;

        // determine which sector that lands on..
        var coords = this.getSectorFromCoords(x, z, true);
        var sector = this.getSector(coords.x, coords.y);

        // do math to figure out which x,z on that sector we need
        //mcec.log("Terrain -> getY(" + x + ", " +  z + ")");

        // our x,y (i like y) coords of where on the tile we need to find
        var _x = x % this.sector_size;
        var _z = z % this.sector_size;

        // ask that sector for its heightmap value at x,z
        // distribute the work to give the illusion of ease
        var y = sector.getHeightMapValueAt(_x, _z, filter_passes);

        return y;
    }

    getY (x, z, ref_y) {
        var sector = this.getSectorFromPosition(x, z, true);

        // console.log("XZ WAS IN SECTOR:", x, z, sector.id());
        return sector.getY(x, z, ref_y);






        return false;

        var height = 50;
        var raycaster = sector.raycaster;

        raycaster.ray.direction.set( 0, -1, 0 );
        raycaster.ray.origin.set(x, 500, z);

        // var mouse = new THREE.Vector2(x, z);
        // var intersect = this.gpuPicker.pick(mouse, raycaster);

        //return intersect;

        //this.scene.getRenderer().render(sector.picking_scene, this.scene.getCamera());
        sector.picking_scene.updateMatrixWorld(true);

        //
        var hits = raycaster.intersectObjects( sector.picking_scene.children, true );
        var hits_filtered = [];
        
        //if(hits.length > 0) console.log(hits);

        if( ( hits.length > 0 ) ) {
            for(var i=0; i<hits.length; i++) {
                //if(hits[i].object.name == this.name) {
                //console.log(hits[i]);
                var offset = height - hits[i].distance;
                //console.log(offset);
                //return offset + hits[i].face.normal.y;
                return (hits[i].point.y);//distance);
                //}
            }

        }

        return false;
    }

    GetGridSquarePositionAt(x, z, center) {
        var coords = this.getGridCoordsAt(x, z);
        console.log("Grid coords of click: ", coords);

        var sec = this.getSectorIDFromPosition(x, z);

        if(center) {
            var pos = this.getGridSquareCenter(sec.x, sec.y, coords.x, coords.y);
        } else {
            var pos = this.getGridSquarePosition(sec.x, sec.y, coords.x, coords.y);
        }

        console.log("Position of those coords: ", sec, pos);

        return pos;
    }

    // this is to be passed raw real word coords
    getYTest(x, z, filter_passes) {

        // determine which sector that lands on..
        var coords = this.getSectorFromCoords(x, z, true);
        var sector = this.getSector(coords.x, coords.y);

        // do math to figure out which x,z on that sector we need
        //mcec.log("Terrain -> getY(" + x + ", " +  z + ")");

        // our x,y (i like y) coords of where on the tile we need to find
        var _x = x % this.sector_size;
        var _z = z % this.sector_size;

        // ask that sector for its heightmap value at x,z
        // distribute the work to give the illusion of ease
        var y = sector.getHeightMapValueAt(_x, _z, filter_passes);

        return y;
    }

    // returns the CENTER of the grid square
    getGridSquarePosition(sector_x, sector_y, x, y) {

        // sectors real world position.. 0,0 = 500,500 (1000 / 2 = 500 to get it at 0)
        var pos = this.getSectorPositionTopLeft(sector_x, sector_y);

        // grid square size is square_x and y
        var _x = this.square_x * x;
        var _z = this.square_y * y;

        console.log("Sector position: ", pos);

        // add the position of our sector
        _x += pos.x;
        _z += pos.z;

        // _x -= (this.sector_size / 2);
        // _z -= (this.sector_size / 2);
        //
        // _x += ((this.sector_size / this.data_size[0]) / 2);
        // _z += ((this.sector_size / this.data_size[1]) / 2);

        return {x: _x, z: _z};
    }

    getGridSquareCenter(sector_x, sector_y, x, y) {
        var pos = this.getGridSquarePosition(sector_x, sector_y, x, y);

        pos.x += this.square_x / 2;
        pos.z += this.square_y / 2;

        return {x: pos.x, z: pos.z};
    }

    getVerticeLocation(sector_x, sector_y, x, y) {
        var pos = this.getGridSquarePosition(sector_x, sector_y, x, y);

        pos.x -= this.square_x / 2;
        pos.z -= this.square_y / 2;

        return {x: pos.x, z: pos.z};
    }

    // check which sectors are needed and load them
    // unload sectors which arent necessary anymore
    // this should be called on update()
    checkNeededSectors() {
        var player = this.scene.getMyPlayer();
        var x = player.position.x;
        var z = player.position.z;

        for (var n = 0; n < this.sectors.length; n++) {
            var sector = this.sectors[ n ];

            if(sector.is_needed) {
                sector.is_needed = false;
            }
        }

        for (var i = 0; i < this.sectors_needed.length; i++) {
            var needed = this.sectors_needed[i];
            var sector = this.getSector(needed.x, needed.y);

            sector.is_needed = true;
            if(sector.is_loaded) sector.setSpoofing(needed.x, needed.y);
        }
    }

    // will return array of which sectors are needed
    // this is actual sectors, this will never return a negative
    determineSectorsNeeded(x, z) {
        // grab sector from our vec2
        var coords = this.getSectorFromCoords(x, z);

        // populate this shit with the sectors we need to load
        var sectors_needed = [];

        // what type of grid are we making around the player
        var radius = 3;

        // figure shit out
        for(var i=0; i<radius; i++) {

            var _x = i + coords.x - Math.floor(radius / 2);

            for(var j=0; j<radius; j++) {

                var _y = j + coords.y - Math.floor(radius / 2);
                var actual = {x: _x, y: _y};
                //var needed = this.safeSectors(_x, _y);

                //console.log("SECTOR NEEDED: ", actual);

                //needed.actual = actual;
                sectors_needed.push(actual);
            }
        }

        return sectors_needed;
    }

    loadSector(sector_x, sector_y) {

        var sector = this.getSector(sector_x, sector_y);

        return sector;

    }

    unloadSector(sector) {
        var id = sector.id();

        for(var i=0; i<this.group.children.length; i++) {

            var child = this.group.children[i];
            if(child == sector.mesh) {
                this.group.remove(child);

                //delete this.sectors[ sector.sector_y ][ sector.sector_x ];
                sector.mesh = null;
                sector.has_init = false;
                sector.is_loaded = false;
                sector.is_loading = false;

                mcec.log("Completely unloaded mesh for sector " + id);
            }

        }
    }

    loopLoadedSectors(callback) {

        for(var y in this.sectors) {

            if(typeof this.sectors[ y ] == "undefined") continue;

            var sector = this.sectors[ y ];

            callback(sector.raw_x, sector.raw_y);

            // for(var x in this.sectors[ y ]) {
            //
            //     //var sector = this.getSector(x, y);
            //
            //     if(typeof this.sectors[ y ][ x ] !== "undefined") {
            //         //var sector = this.sectors[ y ][ x ];
            //
            //         callback(x, y);
            //     }
            // }
        }
    }

    loopNeededSectors(callback) {

        if(typeof this.sectors_needed == "undefined") return;

        for(var y in this.sectors_needed) {

            var sector = this.sectors_needed[ y ];

            callback(sector.x, sector.y);

            // for(var x in this.sectors[ y ]) {
            //
            //     //var sector = this.getSector(x, y);
            //
            //     if(typeof this.sectors[ y ][ x ] !== "undefined") {
            //         //var sector = this.sectors[ y ][ x ];
            //
            //         callback(x, y);
            //     }
            // }
        }
    }

    // this is all local math, so make sure to pass the sector you want the
    // position for (spoofed), and not the actual sector ..
    getSectorPosition(sector_x, sector_y) {
        // position the mesh
        var size = this.sector_size;
        var offset = (size / 2);

        var pos_x = size * sector_x;
        var pos_z = size * sector_y;

        pos_x += offset;
        pos_z += offset;

        return {x: pos_x, z: pos_z};
    }

    // this is all local math, so make sure to pass the sector you want the
    // position for (spoofed), and not the actual sector ..
    getSectorPositionTopLeft(sector_x, sector_y) {
        // position the mesh
        var size = this.sector_size;
        //var offset = (size / 2);

        var pos_x = size * sector_x;
        var pos_z = size * sector_y;

        //pos_x += offset;
        //pos_z += offset;

        return {x: pos_x, z: pos_z};
    }

    initSector(sector) {

        mcec.log("INIT SECTOR " + sector.id());

        sector.init();
        sector.has_init = true;

        // position the mesh
        var x = sector.raw_x;
        var y = sector.raw_y;

        var pos = this.getSectorPosition(x, y);
        sector.setPosition(pos.x, pos.z);
    }

    updateSector(sector_x, sector_y) {
        //var sector = this.getSector(sector_x, sector_y);

        if(!sector.has_init) {
            if(sector.is_loaded) {
                // mcec.log("Sector " + sector.id() + " has init, adding to group!");
                //
                // this.initSector(sector);
            } else {
                //mcec.log("Sector stil hasnt loaded " + sector.id());
            }
        }

        return sector.has_init;
    }

    // check if a real sector is loaded, should be passes safe values
    isSectorLoaded(x, y) {
        this.loopLoadedSectors((x, y) => {
            var sector = this.getSector(x, y, false, false, true);

            if(sector.raw_x == x && sector.raw_y == y) {
                return true;
            }
        });

        return false;
    }

    update(delta) {
        if(typeof this.scene.getMyPlayer() == "undefined") return;
        // player position
        var x = this.scene.getMyPlayer().position.x;
        var z = this.scene.getMyPlayer().position.z;

        // determine which sectors we need and store
        this.sectors_needed = this.determineSectorsNeeded(x, z);

        // make sure all necessary sectors are loaded
        this.loopNeededSectors((x, y) => {
            var sector = this.getSector(x, y);
        });

        // loop all loaded sectors and give them an update call
        this.loopLoadedSectors((x, y) => {
            var sector = this.getSector(x, y);

            sector.update();
        });


        //this.checkNeededSectors();
        //
        // if(!this.terrain_ready && this.sectors_needed.length > 0) {
        //     var waiting = 0;
        //     this.loopLoadedSectors((x, y) => {
        //         var init = this.getSector(x, y).has_init;
        //
        //         if(!init) waiting++;
        //     });
        //
        //     if(waiting == 0) {
        //         this.terrain_ready = true;
        //         // this just happens when first loading
        //         mcec.log("Terrain is ready to go!");
        //     }
        // }
        //
        // if(this.sectors.length > 0) {
        //     this.loopLoadedSectors((x, y) => {
        //         var sector = this.getSector(x, y);
        //
        //         sector.update();
        //     });
        // }
    }

    // currently unused sample code .. may speed things up
    combine_meshes__() {
        // List of all the materials used in the meshes you want to combine
        var materials = [material1, material2, material3];

        // List of the meshes you want to combine, for each one you have to store the index of the material within the materials array
        var meshes = [{mesh: mesh1, materialIndex:0}, {mesh: mesh2, materialIndex:1}, {mesh: mesh3, materialIndex:2}];

        // Geometry of the combined mesh
        var totalGeometry = new THREE.Geometry();
        for(var i = 0; i < meshes.length; i++)
        {
            meshes[i].mesh.updateMatrix();
            totalGeometry.merge(meshes[i].mesh.geometry, meshes[i].mesh.matrix, meshes[i].materialIndex);
        }

        // Create the combined mesh
        var combinedMesh = new THREE.Mesh(totalGeometry, new THREE.MeshFaceMaterial(materials));
        scene.add(combinedMesh);
    }

    sameSide(p1,p2,a,b) {
        var ab = b.clone().sub(a)
        var ap1 = p1.clone().sub(a)
        var ap2 = p2.clone().sub(a)
        var cp1 = new THREE.Vector3().crossVectors(ab, ap1)
        var cp2 = new THREE.Vector3().crossVectors(ab, ap2)
        return cp1.dot(cp2) >= 0
    }

    pointInTriangle(p, a, b, c) {
        return this.sameSide(p,a,b,c) && this.sameSide(p,b,a,c) && this.sameSide(p,c,a,b)
    }

    closestToSegment(p, a, b) {
        var ab = b.clone().sub(a)
        var nab = ab.clone().normalize()
        var n = nab.dot(p.clone().sub(a))
        if (n < 0) return a
        if (n > ab.length()) return b
        return a.clone().add(nab.multiplyScalar(n))
    }

    closestToSides(p, sides) {
        var minDist = 1e9
        var ret
        var self = this;
        sides.forEach(function (side) {
            var ct = self.closestToSegment(p, side[0], side[1])
            var dist = ct.distanceTo(p)
            if (dist < minDist) {
                minDist = dist
                ret = ct
            }
        })
        return ret
    }

    closestPointToTriangle(p, a, b, c) {
        // if the point is inside the triangle then it's the closest point
        if (this.pointInTriangle(p,a,b,c)) return p
        // otherwise it's the closest point to one of the sides
        return this.closestToSides(p, [[a, b], [b, c], [a, c]])
    }
}

module.exports = terrain;