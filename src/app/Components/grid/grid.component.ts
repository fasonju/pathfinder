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
        // sets left node for all nodes exepct first node
        if (j !=0 ) { this.grid[i][j].leftNode = this.grid[i][j-1] }  

        // connects left node to right node
        if (j == this.GRID_WIDTH - 1) { 
          
          this.grid[i][j].rightNode = this.grid[i][0] 
          this.grid[i][0].leftNode = this.grid[i][j]
        } 

        // connects this row to previous row
        if (i !=0 ) { 
          this.grid[i][j].upNode = this.grid[i-1][j] 
          this.grid[i-1][j].downNode = this.grid[i][j]
        } 
      }
    }
    //finally connect first row to last row
    for (let j = 0; j < this.GRID_WIDTH; j++) {
      this.grid[0][j].upNode = this.grid[this.GRID_HEIGHT - 1][j]
      this.grid[this.GRID_HEIGHT - 1][j].downNode = this.grid[0][j]
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
