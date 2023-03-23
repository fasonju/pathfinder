import { Component } from '@angular/core';
import { NodeHelper } from 'src/app/NodeHelpers/NodeHelper';
import { WallHelper } from '../../NodeHelpers/Wallhelper';
import { WeightHelper } from '../../NodeHelpers/WeightHelper';
import { PathHelper } from '../../NodeHelpers/PathHelper';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  constructor(
    public wallHelper : WallHelper, 
    public weightHelper : WeightHelper, 
    public pathHelper : PathHelper) { 
    wallHelper = new WallHelper(this)
    weightHelper = new WeightHelper(this)
    pathHelper = new PathHelper(this)
  }
  state : NodeHelper = this.wallHelper

  getColor() : string {
      return this.state.color
  }
}
