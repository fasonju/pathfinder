import { NodeHelper } from './NodeHelper';

export class PathHelper extends NodeHelper {

  color: string = 'white';

  transitionType(): void {
    this.toWall();
  }

  click(): void {
    this.transitionType();
  }

  reset(): void {
    this.color = 'white';
    console.log('resetting path');
  }

  animate(type: string): void {
    switch (type) {
      case 'staged':
        this.color = 'gray';
        break;
      case 'visited':
        this.color = 'black';
        break;
      default:
        alert('Invalid animation type');
        break;
    }
  }
}
