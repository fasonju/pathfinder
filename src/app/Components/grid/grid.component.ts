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
  GRID_WIDTH : number = 25;
  GRID_HEIGHT : number = 25;
  constructor() { }
  

  ngOnInit(): void {
    this.createGrid()
  }

  /**
   * creates a grid of nodes, we store their statemMachine which is connected to it's component in html and links it to it's neighbors
   */
  createGrid() : void {
    for (let row = 0; row < this.GRID_HEIGHT; row++) {
      this.grid.push([])
      for (let column = 0; column < this.GRID_WIDTH; column++) {
        this.grid[row].push(new NodeStateMachine())  //thse state machines are not yet linked to their components

        // sets left node for all nodes exepct first node
        if (column !=0 ) { 
          this.grid[row][column].leftNode = this.grid[row][column-1] 
          this.grid[row][column-1].rightNode = this.grid[row][column]
        }  

        // connects outer left node to the outer right node
        if (column == this.GRID_WIDTH - 1) { 

          this.grid[row][column].rightNode = this.grid[row][0] 
          this.grid[row][0].leftNode = this.grid[row][column]
        } 

        // connects this row to previous row
        if (row !=0 ) { 
          this.grid[row][column].upNode = this.grid[row-1][column] 
          this.grid[row-1][column].downNode = this.grid[row][column]
        } 

      }
    }
    //finally connect first row to last row vertically
    for (let column = 0; column < this.GRID_WIDTH; column++) {
      this.grid[0][column].upNode = this.grid[this.GRID_HEIGHT - 1][column]
      this.grid[this.GRID_HEIGHT - 1][column].downNode = this.grid[0][column]
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
