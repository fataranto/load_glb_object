
import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './Moto.glb';

export default class Moto extends Group {
  constructor() {
    const loader = new GLTFLoader();
    
    super();

    this.name = 'moto';

    loader.load(MODEL, (gltf)=>{
      this.add(gltf.scene);
    });
    this.scale.set(3,3,3);

  }
}
