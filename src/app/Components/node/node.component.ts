import { Component } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  state : string = "path"
  colors : Record<string, string> = {
    "path" : "white",
    "wall" : "black",
  }

  toWall() : void {
    this.state = "wall"
  }

  toPath() : void {
    this.state = "path"
  }

  getColor() : string {
      return this.colors[this.state]
  }
}
