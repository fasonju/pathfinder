import { Component } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  state : string = "wall"
  colors : Record<string, string> = {
    "path" : "white",
    "wall" : "black",
    "weight" : "yellow",
  }

  toWall() : void {
    this.state = "wall"
  }

  toPath() : void {
    this.state = "path"
  }

  toWeight() : void {
    this.state = "weight"
  }

  getColor() : string {
      return this.colors[this.state]
  }
}
