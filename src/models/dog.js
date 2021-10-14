import ObjectModel from "./ObjectModel.js";

export default class Dog extends ObjectModel{
    constructor(scene){
        super(scene)
        this.path = 'assets/model_dog.glb'
        this.loadObject()
    }

}