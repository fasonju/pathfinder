import { Component } from '@angular/core';
import { NodeStateMachine } from 'src/app/Helpers/NodeHelpers/NodeStateMachine';
import { PathfinderService } from 'src/app/Services/pathfinder.service';
import { BFS } from 'src/app/Helpers/AlgorithmHelpers/BFS';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
})
export class GridComponent {
    currentAlgorithm: string = 'bloomPattern';
    //this is a representation of the grid that stores all state machines for each node
    grid: NodeStateMachine[][] = this.pathfinderService.grid;
    GRID_WIDTH: number = this.pathfinderService.GRID_WIDTH;
    GRID_HEIGHT: number = this.pathfinderService.GRID_HEIGHT;
    constructor(private pathfinderService: PathfinderService) {}

    /**
     * delete this function later
     */
    reset(): void {
        for (let row of this.grid) {
            for (let node of row) {
                node.reset();
            }
        }
    }

    //temp
    algorithm = new BFS(); //? make this an input field later
    generateFrames(): void {
        this.pathfinderService.animate(this.algorithm);
    }
}
