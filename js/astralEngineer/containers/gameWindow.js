import AEComponent from "../components/aeComponent.js"


export default class GameWindow extends AEComponent{
    
    constructor(parentComponent, width, height){
        super(parentComponent)
        this.state = {
            width: width,
            height: height,
        }
        this.initialize()
    }

    get width(){ return this.state.width }
    get height(){ return this.state.height }

    initialize(){
        let element = document.createElement("div")
        element.id = this.elementID
        element.setAttribute("style", `width:${this.width}px; height:${this.height}px`)
        this.parentComponent.element.prepend(element)
        this.setState({element})
    }


}