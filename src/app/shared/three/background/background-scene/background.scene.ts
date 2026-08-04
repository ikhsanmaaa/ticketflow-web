import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, injectBeforeRender, NgtArgs } from 'angular-three';
import * as THREE from 'three';

import { BackgroundShaderMaterial } from './shader/shader.material';
import { uniforms } from './shader/uniform';

extend({
  Group: THREE.Group,
  Mesh: THREE.Mesh,
  PlaneGeometry: THREE.PlaneGeometry,
  MeshBasicMaterial: THREE.MeshBasicMaterial,
  BackgroundShaderMaterial,
});

@Component({
  selector: 'app-background-scene',
  standalone: true,
  imports: [NgtArgs],
  templateUrl: './background.scene.html',
  styleUrl: './background.scene.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackgroundScene {
  constructor() {
    injectBeforeRender(({ delta, size }) => {
      uniforms['aspect'].value = size.width / size.height;
      uniforms['t'].value += delta * 0.48; // matches the ~0.008/frame drift at 60fps
    });
  }
}
