import { AnimationFrame } from '../AnimationFrame';
import { NodeStateMachine } from '../NodeHelpers/NodeStateMachine';

export interface Algorithm {
    generateFrames(startNode: NodeStateMachine, endNode: NodeStateMachine): AnimationFrame[];
}
