import { NodeHelper } from "./NodeHelper"


export class PathHelper extends NodeHelper {
    visited : boolean = false
    color : string = "white"

    transitionType() : void {
        this.toWall()
    }

    click() : void {
        this.transitionType()
    }

    reset() : void {
        this.visited = false
        console.log("resetting path")
    }

    visit() : void {
        this.visited = true
    }

    animate() {
        this.color = "blue"
    }



}