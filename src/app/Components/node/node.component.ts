import { Component } from '@angular/core';
import { NodeStateMachine } from '../../NodeHelpers/NodeStateMachine';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  nodeStateMachine : NodeStateMachine = new NodeStateMachine(this)


  getColor() : string {
      return this.nodeStateMachine.getColor()
  }

  transitionType() : void {
      this.nodeStateMachine.transitionType()
  }

  reset() : void {
      this.nodeStateMachine.reset()
  }

  click() : void {
      this.nodeStateMachine.click()
  }
}
