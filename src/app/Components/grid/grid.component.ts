import { Component } from '@angular/core';
import { NodeStateMachine } from 'src/app/NodeHelpers/NodeStateMachine';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  //this is a representation of the grid that stores all state machines for each node
  grid : NodeStateMachine[][] = [];
  GRID_WIDTH : number = 20;
  GRID_HEIGHT : number = 20;
  constructor() { }
  

  ngOnInit(): void {
    this.createGrid()
  }

  createGrid() : void {
    for (let i = 0; i < this.GRID_HEIGHT; i++) {
      this.grid.push([])
      for (let j = 0; j < this.GRID_WIDTH; j++) {
        this.grid[i].push(new NodeStateMachine())  //thse state machines are not yet linked to their components
      }
    }
  }

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
