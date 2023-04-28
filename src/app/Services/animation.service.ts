import { Injectable } from '@angular/core';
import { AnimationFrame } from '../Helpers/AnimationFrame';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AnimationService {
    constructor() {}
    timeBetweenFrames: number = 100;
    public async animate(frames: AnimationFrame[]): Promise<void> {
        const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

        const timer = new Observable();
        for (let frame of frames) {
            frame.animate();
            await timeout(this.timeBetweenFrames);
        }
    }
}
