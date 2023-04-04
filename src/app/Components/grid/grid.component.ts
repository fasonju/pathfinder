import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  grid : Node[][][] = [];
  GRID_WIDTH : number = 20;
  GRID_HEIGHT : number = 20;
  constructor() { }
  

  ngOnInit(): void {
    
  }

  
}
