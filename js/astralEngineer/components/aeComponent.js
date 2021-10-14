export default class AEComponent{

    constructor(parentComponent){
        this.parentComponent = parentComponent;
        this.state = {};
    }

    get elementID(){
        return this.constructor.name.split(/(?<=[a-z])(?=[A-Z])/g).join("-").toLowerCase();
    }

    setState(newState){
        for(const key in newState){
            this.state[key] = newState[key]
        }
    }

    logState(){
        let output = [];
        let st = this.state
        for(const key in st){
            output.push(`\n${key}: ${st[key]}`)
        }
        console.log(output.join())
    }
}