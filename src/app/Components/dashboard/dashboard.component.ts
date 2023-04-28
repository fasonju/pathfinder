import { Component } from '@angular/core';
import { BFS } from 'src/app/Helpers/AlgorithmHelpers/BFS';
import { Algorithm } from 'src/app/Helpers/AlgorithmHelpers/Algorithm';
import { PathfinderService } from 'src/app/Services/pathfinder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  algorithms : Algorithm[] = [new BFS(), new BFS()] //list of all algorithms
  currentAlgorithm : Algorithm = this.algorithms[0]; //the current algorithm being used
  animationSpeed : number = 0; //the speed of the animation in ms
  constructor(private pathfinderService : PathfinderService) { }

  setAlgorithm(algorithm: Algorithm): void {
    this.pathfinderService.setAlgorithm(algorithm);
  }

  setAnimationSpeed(speed: number): void {
    this.pathfinderService.setAnimationSpeed(speed);
  }

  animateAlgorithm(): void {
    this.pathfinderService.animate();
  }

}
