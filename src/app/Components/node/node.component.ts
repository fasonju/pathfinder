import { Component } from '@angular/core';
import { NodeHelper } from '../../NodeHelpers/NodeHelper';
import { WallHelper } from '../../NodeHelpers/Wallhelper';
import { WeightHelper } from '../../NodeHelpers/WeightHelper';
import { PathHelper } from '../../NodeHelpers/PathHelper';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  wallHelper : WallHelper = new WallHelper(this)
  weightHelper : WallHelper = new WeightHelper(this)
  pathHelper : WallHelper= new PathHelper(this)

  state : NodeHelper = this.wallHelper

  getColor() : string {
      return this.state.color
  }

  transitionType() : void {
      this.state.transitionType()
  }

  reset() : void {
      this.wallHelper.reset()
      this.weightHelper.reset()
      this.pathHelper.reset()
      this.state = this.wallHelper
  }

  click() : void {
      this.state.click()
  }
}
