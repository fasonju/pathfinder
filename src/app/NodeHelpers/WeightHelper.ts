import { NodeHelper } from "./NodeHelper"

export class WeightHelper extends NodeHelper {
    color : string = "green"

    transitionType() : void {
        this.toPath()
    }

    click() : void {
        this.transitionType()
    }

    reset() : void {
        console.log("resetting weight")
    }
}
