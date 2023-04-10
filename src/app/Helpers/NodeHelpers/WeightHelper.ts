import { NodeHelper } from './NodeHelper';

export class WeightHelper extends NodeHelper {
    defaultColor: string = 'green';
    color: string = this.defaultColor;

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
            case 'reduce':
                console.log('reduce weight effect');
                break;
            default:
                alert('Invalid animation type');
                break;
        }
    }
}
