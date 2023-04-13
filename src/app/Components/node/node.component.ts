import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NodeStateMachine } from '../../Helpers/NodeHelpers/NodeStateMachine';

@Component({
    selector: 'app-node',
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.css'],
})
export class NodeComponent {
    @Input() nodeStateMachine!: NodeStateMachine;
    animationDuration = 0.8 //! needs to be turned into an input later
    size: number = 20; //sets the size of the node
    @ViewChild('animationTarget') animationTarget: any;

    ngOnInit(): void {
        this.nodeStateMachine.setNodeComponent(this);
    }

    getColor(): string {
        return this.nodeStateMachine.getColor();
    }

    transitionType(): void {
        this.nodeStateMachine.transitionType();
    }

    reset(): void {
        this.nodeStateMachine.reset();
    }

    click(): void {
        this.nodeStateMachine.click();
    }
}
