import { NodeHelper } from "./NodeHelper"


export class PathHelper extends NodeHelper {
    color : string = "white"

    transitionType() : void {
        this.toWall()
    }
}