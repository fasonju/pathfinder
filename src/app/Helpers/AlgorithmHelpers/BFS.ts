import { NodeStateMachine } from '../NodeHelpers/NodeStateMachine';
import { AnimationFrame } from '../AnimationFrame';
import { Algorithm } from './Algorithm';

/**
 * generates animation frames for BFS
 */
export class BFS implements Algorithm {
    /**
     * @description generates a list of frames to be animated for BFS
     *! @important this function is not yet complete bad coding practices and weights not ipmlemented
     * @param startNode
     * @param endNode
     * @returns list of frames to be animated
     */
    generateFrames(startNode: NodeStateMachine, endNode: NodeStateMachine): AnimationFrame[] {
        const staged: Set<NodeStateMachine> = new Set();
        //const visited: Set<NodeStateMachine> = new Set();
        const queue: NodeStateMachine[] = [];
        const frames: AnimationFrame[] = [];

        // maps nodes to their previous node for backtracking
        let currentNode: NodeStateMachine = startNode;

        this.stageNode(startNode, frames, queue, staged);
        while (currentNode != endNode && queue.length != 0) {
            currentNode = queue.shift()!;
            if (currentNode.statePath()) {
                frames.push(new AnimationFrame(currentNode, 'visited'));
            } else {
                //current node is weight
                //reduceweight(currentNode)
                continue;
            }

            if (currentNode == endNode) {
                break;
            }

            // stages all neighbors of current node for visits
            if (!staged.has(currentNode.leftNode) && !currentNode.leftNode.stateWall()) {
                this.stageNode(currentNode.leftNode, frames, queue, staged);
            }
            if (!staged.has(currentNode.upNode) && !currentNode.upNode.stateWall()) {
                this.stageNode(currentNode.upNode, frames, queue, staged);
            }
            if (!staged.has(currentNode.rightNode) && !currentNode.rightNode.stateWall()) {
                this.stageNode(currentNode.rightNode, frames, queue, staged);
            }
            if (!staged.has(currentNode.downNode) && !currentNode.downNode.stateWall()) {
                this.stageNode(currentNode.downNode, frames, queue, staged);
            }
        }
        return frames;
    }

    /**
     * @description queues a node to be visited and adds it to the staged set
     * @param node  node to be staged
     * @param frames
     * @param queue
     * @param staged
     */
    stageNode(node: NodeStateMachine, frames: AnimationFrame[], queue: NodeStateMachine[], staged: Set<NodeStateMachine>): void {
        queue.push(node);
        staged.add(node);
        frames.push(new AnimationFrame(node, 'staged'));
    }
}
