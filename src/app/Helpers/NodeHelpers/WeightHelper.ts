import { NodeHelper } from './NodeHelper';

export class WeightHelper extends NodeHelper {
    defaultColor: string = 'green';
    color: string = this.defaultColor;
    staged : boolean = false

    transitionType(): void {
        this.toPath();
    }

    click(): void {
        this.transitionType();
    }

    reset(): void {
        this.color = this.defaultColor;
        console.log('resetting weight');
    }

    animate(type: string): void {
        switch (type) {
            case 'staged':
                this.staged = true;
                console.log('staged weight effect');
                break;
            case 'reduce':
                console.log('reduce weight effect');
                break;
            default:
                alert('Invalid animation type');
                break;
        }
    }

    stateStaged(): boolean {
        return this.staged
    }

    /**
     * @description weights cannot be visited until turned into path
     * @returns false 
     */
    stateVisited(): boolean {
        return false
    }
}
