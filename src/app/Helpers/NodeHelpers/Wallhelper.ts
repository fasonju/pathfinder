import { NodeHelper } from './NodeHelper';

export class WallHelper extends NodeHelper {
    defaultColor: string = 'black';
    color: string = this.defaultColor;

    transitionType(): void {
        this.toWeight();
    }

    click(): void {
        this.transitionType();
    }

    reset(): void {
        this.color = this.defaultColor;
        console.log('resetting wall');
    }

    animate(type: string): void {
        alert('animate wall does not exist');
    }

    stateStaged(): boolean {
        return false;
    }

    stateVisited(): boolean {
        return false;
    }
}
