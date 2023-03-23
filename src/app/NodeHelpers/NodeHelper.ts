
import { NodeComponent } from "../Components/node/node.component"

export abstract class NodeHelper {
    abstract readonly color : string
    node : NodeComponent

    constructor(node : NodeComponent) {
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

    abstract transitionType() : void
    
}