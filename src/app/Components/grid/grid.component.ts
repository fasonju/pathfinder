import { Component } from '@angular/core';
import { NodeStateMachine } from 'src/app/NodeHelpers/NodeStateMachine';
import { PathfinderService } from 'src/app/Services/pathfinder.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  currentAlgorithm : string = "bloomPattern"
  //this is a representation of the grid that stores all state machines for each node
  grid : NodeStateMachine[][] = this.pathfinderService.grid;
  GRID_WIDTH : number = this.pathfinderService.GRID_WIDTH;
  GRID_HEIGHT : number = this.pathfinderService.GRID_HEIGHT;
  
  constructor(private pathfinderService : PathfinderService) { }
  

  /**
   * creates a grid of nodes, we store their statemMachine which is connected to it's component in html and links it to it's neighbors
   */
  

  /**
   * delete this function later
   */
  setPath() : void {
    for (let row  of this.grid) {
      for (let node  of row) {
        node.transitionType()
      }
    }
  }
  
}
