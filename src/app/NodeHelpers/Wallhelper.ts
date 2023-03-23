import { NodeComponent } from "../Components/node/node.component"
import { NodeHelper } from "./NodeHelper"
class WallHelper implements NodeHelper {
    color = "black"
    node? : NodeComponent
    toWall(): void {
        throw new Error("Method not implemented.")
    }
    toPath(): void {
        throw new Error("Method not implemented.")
    }
    toWeight(): void {
        throw new Error("Method not implemented.")
    }
    constructor(node: NodeComponent) {
        this.node = node
    }
}