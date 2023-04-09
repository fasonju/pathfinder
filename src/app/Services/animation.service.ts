import { Injectable } from '@angular/core';
import {AnimationFrame} from "../Components/Helpers/AnimationFrame"


@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  /**
   * Temporary representation of breadth firstsearch
   * 
   * @param grid grid from pathfinderService
   * @param startNode 
   * @param endNode 
   * @returns 
   */
  public animatePath(frames : AnimationFrame[] ) {  

    for (let frame of frames) {
      frame.execute()
    }
  }
}
