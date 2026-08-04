import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three/dom';
import { BackgroundScene } from './background-scene/background.scene';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [NgtCanvas, BackgroundScene],
  templateUrl: './background.html',
  styleUrls: ['./background.scss'],
})
export class Background {
  // Mirrors the original OrthographicCamera(-1, 1, 1, -1, 0, 1):
  // a clip-space camera so the 2x2 plane fills the viewport exactly,
  // with aspect-correction handled inside the fragment shader instead.
  protected readonly cameraOptions = {
    left: -1,
    right: 1,
    top: 1,
    bottom: -1,
    near: 0.1,
    far: 10,
    position: [0, 0, 2],
  } as const;
  protected readonly BackgroundScene = BackgroundScene;
}
