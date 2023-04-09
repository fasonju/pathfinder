import { NodeStateMachine } from './NodeHelpers/NodeStateMachine';
/**
 * @description defines each step of animation
 */
export class AnimationFrame {
    type : string
    node : NodeStateMachine

    /**
     * 
     * @param node the node to be animated
     * @param type pathVisit || weightVisit
     */
    constructor(node : NodeStateMachine, type : string) {
        this.node = node
        this.type = type
    }

    execute() : void {
        this.node.animate()
    }


}
