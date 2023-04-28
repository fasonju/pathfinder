import { Injectable } from '@angular/core';
import { NodeStateMachine } from '../Helpers/NodeHelpers/NodeStateMachine';
import { AnimationService } from './animation.service';
import { Algorithm } from '../Helpers/AlgorithmHelpers/Algorithm';
import { AnimationFrame } from '../Helpers/AnimationFrame';
import { BFS } from '../Helpers/AlgorithmHelpers/BFS';

@Injectable({
    providedIn: 'root',
})
export class PathfinderService {
    grid: NodeStateMachine[][] = [];
    currentAlgorithm: Algorithm = new BFS();
    //? the number of nodes in the grid is dependent on screen size
    GRID_WIDTH: number = Math.floor(window.innerWidth / 30);
    GRID_HEIGHT: number = Math.floor(window.innerHeight / 40);
    startNode?: NodeStateMachine
    endNode?: NodeStateMachine

    constructor(private animationService: AnimationService) {
        this.createGrid();
        this.setStartNode(this.grid[0][0]);
        this.setEndNode(this.grid[this.GRID_HEIGHT / 2][this.GRID_WIDTH /2]);
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

    /**
     * @description call from dashboard component to animate the current algorithm
     */
    animate(): void {
        if (this.startNode == undefined || this.endNode == undefined) {
            alert("Please select a start and end node before animating")
            return;
        }
        const frames: AnimationFrame[] = this.currentAlgorithm.generateFrames(this.startNode, this.endNode);
        this.animationService.animate(frames);
    }

    /**
     * @description call from dashboard component to set the speed of the animation
     * @param speed 100ms - speed is the time between frames
     */
    setAnimationSpeed(speed: number): void {
        this.animationService.timeBetweenFrames = 100 - speed;
    }

    /**
     * @description call from dashboard component to set the algorithm to be used
     * @param algorithm the algorithm to be used for any operations in the program
     */
    setAlgorithm(algorithm: Algorithm): void {
        this.currentAlgorithm = algorithm;
    }

    /**
     * @description removes start node from old start node and sets it to the new one.
     * @param newStartNode the new start node to be set
     */
    setStartNode(newStartNode: NodeStateMachine): void {
        if (this.startNode != undefined) {
            this.startNode.removeStartNode();
        }
        if (this.endNode == newStartNode) {
            this.endNode = undefined;
        }
        this.startNode = newStartNode;
        this.startNode.setStartNode();
    }

    /**
     * @description removes end node from old end node and sets it to the new one.
     * @param newEndNode the new end node to be set
     */
    setEndNode(newEndNode: NodeStateMachine): void {
        if (this.endNode != undefined) {
            this.endNode.removeEndNode();
        }
        if (this.startNode == newEndNode) {
            this.startNode = undefined;
        }
        this.endNode = newEndNode;
        this.endNode.setEndNode();
    }
}
