import { NodeStateMachine } from './NodeStateMachine';

export abstract class NodeHelper {
  //all states have their own color
  abstract color: string;
  node: NodeStateMachine;

  constructor(node: NodeStateMachine) {
    this.node = node;
  }

  toWall(): void {
    this.node.toWall();

  }

  toPath(): void {
    this.node.toPath();

  }

  toWeight(): void {
    this.node.toWeight();
  }

  abstract reset(): void;

  abstract click(): void;
  //temp
  abstract transitionType(): void;

  abstract animate(): void;
}
