import { Component } from '@angular/core';
import { BFS } from 'src/app/Helpers/AlgorithmHelpers/BFS';
import { PathfinderService } from 'src/app/Services/pathfinder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  algorithms : Algorithm[] = [new BFS()] //list of all algorithms
  constructor(private pathfinderService : PathfinderService) { }

  setAlgorithm(algorithm: any): void {
    this.pathfinderService.setAlgorithm(algorithm);
  }

}
