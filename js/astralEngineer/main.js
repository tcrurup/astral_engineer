import GameWindow from "./containers/gameWindow.js";
import { config } from "./config.js"


document.addEventListener("DOMContentLoaded", () => {
    console.log("Content Loaded")
    config.debug ? console.log("Debug mode enabled") : null
    new Game(config);
})

class Game{

    constructor(config){
        this.config = config
        this.element = document.querySelector("body")
        this.gameWindow = new GameWindow(this, config.width, config.height)
        config.debug ? console.log(`Creating window component with width:${gameWindow.width}, height:${gameWindow.height}`) : null
    }
}