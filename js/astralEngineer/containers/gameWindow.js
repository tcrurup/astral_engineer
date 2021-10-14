import AEComponent from "../components/aeComponent.js"

export default class GameWindow extends AEComponent{
    super
    constructor(width = 800, height = 600){
        this.width = width;
        this.height = height
    }
}