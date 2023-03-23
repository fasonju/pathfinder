import { NodeHelper } from "./NodeHelper"

export class WallHelper extends NodeHelper {
    color : string = "black"

    transitionType() : void {
        this.toWeight()
    }
}