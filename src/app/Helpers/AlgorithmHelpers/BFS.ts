import { NodeStateMachine } from '../NodeHelpers/NodeStateMachine';
import { AnimationFrame } from '../AnimationFrame';

/**
 * generates animation frames for BFS
 */
export class BFS {
  /**
   *
   * @param startNode
   * @param endNode
   * @returns list of frames to be animated
   */
  generateFrames(
    startNode: NodeStateMachine,
    endNode: NodeStateMachine
  ): AnimationFrame[] {
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
        //reduceweight()
        continue;
      }

      if (currentNode == endNode) {
        break;
      }

      // stages all neighbors of current node for visits
      if (
        !staged.has(currentNode.leftNode) &&
        !currentNode.leftNode.stateWall()
      ) {
        this.stageNode(currentNode.leftNode, frames, queue, staged);
      }
      if (
        !staged.has(currentNode.rightNode) &&
        !currentNode.rightNode.stateWall()
      ) {
        this.stageNode(currentNode.rightNode, frames, queue, staged);
      }
      if (!staged.has(currentNode.upNode) && !currentNode.upNode.stateWall()) {
        this.stageNode(currentNode.upNode, frames, queue, staged);
      }
      if (
        !staged.has(currentNode.downNode) &&
        !currentNode.downNode.stateWall()
      ) {
        this.stageNode(currentNode.downNode, frames, queue, staged);
      }
    }

    this.animate(frames);
    return frames;
  }

  /**
   * @description queues a node to be visited and adds it to the staged set
   * @param node
   * @param frames
   * @param queue
   * @param staged
   */
  stageNode(
    node: NodeStateMachine,
    frames: AnimationFrame[],
    queue: NodeStateMachine[],
    staged: Set<NodeStateMachine>
  ): void {
    queue.push(node);
    staged.add(node);
    frames.push(new AnimationFrame(node, 'staged'));
  }

  /**
   * temporary function to animate frames
   * @param frames
   */
  async animate(frames: AnimationFrame[]): Promise<void> {
    for (let frame of frames) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      frame.execute();
    }
  }
}
