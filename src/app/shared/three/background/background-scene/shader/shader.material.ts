import * as THREE from 'three';

import { fragmentShader } from './fragment.glsl';
import { uniforms } from './uniform';
import { vertexShader } from './vertex.glsl';

export class BackgroundShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms,
      vertexShader,
      fragmentShader,
    });
  }
}
