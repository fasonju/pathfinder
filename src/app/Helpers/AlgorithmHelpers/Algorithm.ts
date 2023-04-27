import { AnimationFrame } from '../AnimationFrame';
import { NodeStateMachine } from '../NodeHelpers/NodeStateMachine';

export abstract class Algorithm {
    abstract name: string;
    abstract generateFrames(startNode: NodeStateMachine, endNode: NodeStateMachine): AnimationFrame[];
}
