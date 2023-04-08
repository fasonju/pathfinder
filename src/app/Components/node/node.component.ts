import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeStateMachine } from '../../NodeHelpers/NodeStateMachine';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  @Input() nodeStateMachine! : NodeStateMachine;

  ngOnInit(): void {
    this.nodeStateMachine.setNodeComponent(this)
  }

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
