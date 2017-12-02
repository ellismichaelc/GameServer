import baseModel from '../src/basemodel';
import CSS3DObject from '../js/renderers/CSS3DRenderer.js';

class webview extends baseModel {
    constructor(scene, url, overrides) {

        var options = {
            scale: 1,
            url: url,
            // skinning: true,
            // morph_targets: true,
            // morph_normals: true,
            // enhance: true,
            // shininess: 0,
            //skinning: true,
            //offset: {y: -145},
            // mass: 1,
            // position: {x: 705, y: 15.15, z: 321},
        };

        super(scene, "webview", Object.assign(options, overrides));

        this.scene = scene;

    }

    load(callback) {
        var width = this.options.width || 500;
        var height = this.options.height || 500;

        // create the div to hold our iframe
        var div = document.createElement( 'div' );
        div.style.width = width + 'px';
        div.style.height = height + 'px';
        div.style.backgroundColor = '#000';

        // create the iframe to hold our webpage
        var iframe = document.createElement( 'iframe' );
        iframe.style.width = width + 'px';
        iframe.style.height = height + 'px';
        iframe.style.border = '0px';
        iframe.src = this.options.url;

        // add the iframe to the div
        div.appendChild( iframe );

        var div2 = document.createElement('div');
        div2.innerHTML = 'Plain text inside a div.';
        div2.className = 'animated bounceInDown' ;
        div2.style.background = "#0094ff";
        div2.style.fontSize = "2em";
        div2.style.color = "white";
        div2.style.padding = "2em";

        // add the div to a new CSS 3D Object
        var object = new THREE.CSS3DObject( div );

        // create renderer
        this.renderer = new THREE.CSS3DRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = 0;

        // add it to page
        document.body.appendChild( this.renderer.domElement );

        // create scene
        this.render_scene = new THREE.Scene();

        // add our object to our render scene
        this.scene.css_scene.add(object);

        callback();
    }

    update() {
        //this.renderer.render(this.render_scene, this.scene.getCamera());
    }
}

module.exports = webview;