
import { NodeStateMachine } from "./NodeStateMachine";

export abstract class NodeHelper {
    abstract readonly color : string
    node : NodeStateMachine

    constructor(node : NodeStateMachine) {
        this.node = node
    }   

    toWall() : void {
        this.node.state = this.node.wallHelper
    }

    toPath() : void {
        this.node.state = this.node.pathHelper
    }

    toWeight() : void {
        this.node.state = this.node.weightHelper
    }

    abstract reset() : void

    abstract click() : void

    



    //temp
    abstract transitionType() : void 
    
}