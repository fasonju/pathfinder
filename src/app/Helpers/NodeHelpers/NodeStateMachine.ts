import { NodeComponent } from '../../Components/node/node.component';
import { WeightHelper } from './WeightHelper';
import { PathHelper } from './PathHelper';
import { NodeHelper } from './NodeHelper';
import { WallHelper } from './Wallhelper';

export class NodeStateMachine {
    nodeComponent!: NodeComponent;

    //! keep in mind that if these
    //! are ever to be null because of a change in grid component where they are set typescritp will not detect it
    upNode!: NodeStateMachine;
    downNode!: NodeStateMachine;
    leftNode!: NodeStateMachine;
    rightNode!: NodeStateMachine;

    /**
     * should be called the moment the component is created
     * @param node  the component linked to this node state machine
     */
    setNodeComponent(nodeComponent: NodeComponent): void {
        this.nodeComponent = nodeComponent;
    }

    // the three different states of each node
    wallHelper: WallHelper = new WallHelper(this);
    weightHelper: WeightHelper = new WeightHelper(this);
    pathHelper: PathHelper = new PathHelper(this);

    // initial state
    state: NodeHelper = this.pathHelper;

    stateWall(): Boolean {
        return this.state instanceof WallHelper;
    }

    stateWeight(): Boolean {
        return this.state instanceof WeightHelper;
    }

    statePath(): Boolean {
        return this.state instanceof PathHelper;
    }

    stateVisited(): Boolean {
        return this.state.stateVisited()
    }

    stateStaged(): Boolean {
        return this.state.stateStaged()
    }

    toWall(): void {
        this.state = this.wallHelper;
    }

    toWeight(): void {
        this.state = this.weightHelper;
    }

    toPath(): void {
        this.state = this.pathHelper;
    }

    getColor(): string {
        return this.state.color;
    }

    /**
     * @description transition order = path -> wall -> weight -> path
     */
    transitionType(): void {
        this.state.transitionType();
    }

    reset(): void {
        this.wallHelper.reset();
        this.weightHelper.reset();
        this.pathHelper.reset();
        this.state = this.pathHelper;
    }

    click(): void {
        this.state.click();
    }

    animate(type: string): void {
        this.state.animate(type);
    }
}
