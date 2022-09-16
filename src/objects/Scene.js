import { Group } from 'three';
import Moto from './Moto/Moto.js';
import BasicLights from './Lights.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    
    const moto = new Moto();
    const lights = new BasicLights();

    this.add(moto, lights);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}