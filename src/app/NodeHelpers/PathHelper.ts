import { NodeHelper } from "./NodeHelper"


export class PathHelper extends NodeHelper {
    color : string = "white"
    visited : boolean = false

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

}