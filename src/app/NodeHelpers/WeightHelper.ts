import { NodeHelper } from "./NodeHelper"

export class WeightHelper extends NodeHelper {
    color : string = "purple"

    transitionType() : void {
        this.toPath()
    }

    click() : void {
        this.transitionType()
    }

    reset() {
        console.log("resetting weight")
    }
}
