
import { NodeStateMachine } from "./NodeStateMachine";

export abstract class NodeHelper {
    //all states have their own color
    abstract color : string
    node : NodeStateMachine

    constructor(node : NodeStateMachine) {
        this.node = node
    }   

    toWall() : void {
        this.node.state = this.node.wallHelper
        this.node.stateIdentifier = "wall"
    }

    toPath() : void {
        this.node.state = this.node.pathHelper
        this.node.stateIdentifier = "path"
    }

    toWeight() : void {
        this.node.state = this.node.weightHelper
        this.node.stateIdentifier = "weight"
    }

    abstract reset() : void

    abstract click() : void
    //temp
    abstract transitionType() : void 
    
    abstract animate() : void
}