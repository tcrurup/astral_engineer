import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'

export default class ObjectModel{

    constructor(scene){
        this.path = null;
        this.scene = scene;
    }

    loadObject(){
        const loader = new GLTFLoader()

        loader.load(
            this.path, 
            gltf => this.scene.add( gltf.scene ),
            undefined,
            error => console.error(error) 
        )
    }
}