import { Injectable } from '@angular/core';
import { NodeStateMachine } from '../Helpers/NodeHelpers/NodeStateMachine';
import { AnimationService } from './animation.service';
import { Algorithm } from '../Helpers/AlgorithmHelpers/Algorithm';
import { AnimationFrame } from '../Helpers/AnimationFrame';

@Injectable({
    providedIn: 'root',
})
export class PathfinderService {
    grid: NodeStateMachine[][] = [];
    //? the number of nodes in the grid is dependent on screen size
    GRID_WIDTH: number = Math.floor(window.innerWidth / 30);
    GRID_HEIGHT: number = Math.floor(window.innerHeight / 40);
    timeBetweenFrames: number = 100;

    constructor(private animationService: AnimationService) {
        this.createGrid();
    }

    createGrid(): void {
        for (let row = 0; row < this.GRID_HEIGHT; row++) {
            this.grid.push([]);
            for (let column = 0; column < this.GRID_WIDTH; column++) {
                this.grid[row].push(new NodeStateMachine()); //thse state machines are not yet linked to their components

                // sets left node for all nodes exepct first node
                if (column != 0) {
                    this.grid[row][column].leftNode = this.grid[row][column - 1];
                    this.grid[row][column - 1].rightNode = this.grid[row][column];
                }

                // connects outer left node to the outer right node
                if (column == this.GRID_WIDTH - 1) {
                    this.grid[row][column].rightNode = this.grid[row][0];
                    this.grid[row][0].leftNode = this.grid[row][column];
                }

                // connects this row to previous row
                if (row != 0) {
                    this.grid[row][column].upNode = this.grid[row - 1][column];
                    this.grid[row - 1][column].downNode = this.grid[row][column];
                }
            }
        }
        //finally connect first row to last row vertically
        for (let column = 0; column < this.GRID_WIDTH; column++) {
            this.grid[0][column].upNode = this.grid[this.GRID_HEIGHT - 1][column];
            this.grid[this.GRID_HEIGHT - 1][column].downNode = this.grid[0][column];
        }
    }

    animate(algorithm: Algorithm): void {
        const startNode: NodeStateMachine = this.grid[15][12];
        const endNode: NodeStateMachine = this.grid[2][3];
        const frames: AnimationFrame[] = algorithm.generateFrames(startNode, endNode);
        this.animationService.animate(frames, this.timeBetweenFrames);
    }
}
