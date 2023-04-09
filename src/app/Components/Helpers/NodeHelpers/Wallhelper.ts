import { NodeHelper } from "./NodeHelper"

export class WallHelper extends NodeHelper {
    color : string = "brown"

    transitionType() : void {
        this.toWeight()
    }

    click() : void {
        this.transitionType()
    }

    reset() : void {
        console.log("resetting wall")
    }

    animate() : void {
        alert("animate wall does not exist")
    }
}