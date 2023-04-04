import { NodeComponent } from "../Components/node/node.component"
import { WeightHelper } from "./WeightHelper"
import { PathHelper } from "./PathHelper"
import { NodeHelper } from "./NodeHelper"
import { WallHelper } from "./Wallhelper"



export class NodeStateMachine {
    node : NodeComponent

    constructor(node : NodeComponent) {
        this.node = node
    }

    wallHelper : WallHelper = new WallHelper(this)
    weightHelper : WallHelper = new WeightHelper(this)
    pathHelper : WallHelper= new PathHelper(this)
    
    state : NodeHelper = this.wallHelper
    
    getColor() : string {
        return this.state.color
    }
    
    transitionType() : void {
        this.state.transitionType()
    }
    
    reset() : void {
        this.wallHelper.reset()
        this.weightHelper.reset()
        this.pathHelper.reset()
        this.state = this.wallHelper
    }
    
    click() : void {
        this.state.click()
    }
}