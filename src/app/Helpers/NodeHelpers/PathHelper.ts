import { NodeHelper } from './NodeHelper';

export class PathHelper extends NodeHelper {
    defaultColor = 'white';
    color: string = this.defaultColor;
    visited: boolean = false;
    staged: boolean = false;

    transitionType(): void {
        this.toWall();
    }

    click(): void {
        this.transitionType();
    }

    reset(): void {
        this.color = this.defaultColor;
        this.staged = false;
        this.visited = false;
        console.log('resetting path');
    }

    animate(type: string): void {
        switch (type) {
            case 'staged':
                this.staged = true;
                this.color = 'rgb(254, 249, 195)'; //? these values are from tailwind yellow-100
                break;
            case 'visited':
                this.visited = true;
                this.color = 'orange'; //! replace too similar to wall
                break;
            default:
                alert('Invalid animation type');
                break;
        }
    }

    stateStaged(): boolean {
        return this.staged;
    }

    stateVisited(): boolean {
        return this.visited;
    }
}
