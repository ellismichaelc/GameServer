import game from '../src/game.js';
(function() {
    new game();
})();










// OLD CODE / FOR REFERENCE / WHATEVS
// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	let animal = document.querySelector("input[name='animal']:checked").value;
// 	let name = document.getElementById("name").value;
// 	if(name !== ""){
// 		modal.style.display = "none";
// 		new Playground(name, animal);
// 	} else{
// 		alert("Enter name plz!");
// 	}
// });
// function addPlatform( scene, url) {
//
//     var placeholder = new THREE.Object3D();
    //var texture = new THREE.TextureLoader().load( textureUrl );
    //texture.minFilter = THREE.LinearFilter;
    //texture.anisotropy = textureQuality;

    // var loader = new THREE.JSONLoader();
    // loader.load( url, function( geometry, materials ) {
    //     //geometry.computeFaceNormals();
    //     var platform = new THREE.Mesh( geometry, materials );
    //     platform.name = "platform";
    //     scene.add( platform );
    // });

    // var loader = new THREE.JSONLoader();
    // loader.load(url, function(geometry, materials) {
    //     geometry.computeFaceNormals();
    //     //var bufferGeometry = new THREE.BufferGeometry();
    //     //var newGeo = bufferGeometry.fromGeometry(geometry);
    //
    //     var newMaterials = new THREE.MeshFaceMaterial(materials);
    //     var object = new THREE.Mesh(geometry, newMaterials);
    //
    //     object.name = "platform";
    //
    //     //placeholder.scale.set(size,size,size);
    //     placeholder.add( object );
    //     scene.add(placeholder);
    // });

    // addModel(scene, url, function(object) {
    //     object.name = "platform";
    // });

    // var loader = new THREE.ObjectLoader();
    // loader.load( url, function( obj ) {
    //
    //     scene.add( obj );
    // });

    // var loader = new THREE.OBJLoader();
    //
    // // load a resource
    // loader.load(
    //     // resource URL
    //     'shared/island.obj',
    //     // Function when resource is loaded
    //     function ( object ) {
    //         scene.add( object );
    //     }
    // );

    // instantiate a loader
    // var loader = new THREE.ColladaLoader();
    //
    // loader.load(
    //     // resource URL
    //     'models/collada/stormtrooper/stormtrooper.dae',
    //     // Function when resource is loaded
    //     function ( collada ) {
    //         scene.add( collada.scene );
    //     },
    //     // Function called when download progresses
    //     function ( xhr ) {
    //         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    //     }
    // );
//
//     return true;
// }
