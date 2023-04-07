import { NodeComponent } from "../Components/node/node.component"
import { WeightHelper } from "./WeightHelper"
import { PathHelper } from "./PathHelper"
import { NodeHelper } from "./NodeHelper"
import { WallHelper } from "./Wallhelper"



export class NodeStateMachine {
    nodeComponent? : NodeComponent

    upNode? : NodeStateMachine
    downNode? : NodeStateMachine
    leftNode? : NodeStateMachine
    rightNode? : NodeStateMachine

    currentAlgorithm? : string = this.nodeComponent?.currentAlgorithm


    /**
     * should be called the moment the component is created
     * @param node  the component linked to this node state machine
     */
    setNodeComponent(nodeComponent : NodeComponent) : void {
        this.nodeComponent = nodeComponent
    }

    // the three different states of each node
    wallHelper : WallHelper = new WallHelper(this)
    weightHelper : WallHelper = new WeightHelper(this)
    pathHelper : WallHelper= new PathHelper(this)
    
    // initial state
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