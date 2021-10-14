import GameWindow from "./containers/gameWindow.js";
import { config } from "./config.js"


document.addEventListener("DOMContentLoaded", () => {
    console.log("Content Loaded")
    config.debug ? console.log("Debug mode enabled") : null
})

class Game{
    constructor(){
        this.gameWindow = new GameWindow()
    }

    //Append items to the DOM here
}