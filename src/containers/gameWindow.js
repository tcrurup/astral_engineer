import * as THREE from '../../node_modules/three/src/Three.js';
import Dog from '../models/dog.js'

class GameWindow{
    
    constructor(parentComponent, width, height){
        console.log('making game window')
        this.parentComponent = parentComponent
        this.width = width;
        this.height = height;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000);
        this.renderer = this.initializeRenderer()
        this.camera.position.setZ(30)
        console.log('starting dog creation')
        //new Dog(this.scene)
        this.torus()
        this.render()
    }

    initializeRenderer(){
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector("canvas#game-window") 
        });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( this.width, this.height)
        return renderer;
    }

    animate(){
        requestAnimationFrame( animate );
        this.renderer.render( this.scene, this.camera )
    }

    torus(){
        //NOT USED JUST HERE FOR REFERENCE
        const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
        const material = new THREE.MeshBasicMaterial( {wireframe: true} );
        this.scene.add( new THREE.Mesh( geometry, material ) );
        this.render() 
    }
    render(){
        this.renderer.render( this.scene, this.camera )
    }
}

export default GameWindow