import { Config } from "./Config";


const SVGNS = "http://www.w3.org/2000/svg";

export class FunnyCircle {

  svg: SVGElement;
  config: Config;

  constructor(svg: SVGElement) {
    this.svg = svg;
    this.config = {
      numPoint: 50,
      factor: 5,
      showPoint: true,
    };
  }

  configure(options: Config) {
    // Object.assign(this.config, options); // ES5
    this.config = { ...this.config, ...options }; //ES6
  }

  draw() {

    this.clean();

    this.setViewBox();
    this.drawCircle();

    if (this.config.showPoint) {
      this.showPoint();
    }

    const step = 360 / this.config.numPoint;
    for (let i = 0; i < this.config.numPoint; i++) {
      const angle1 = step * i * Math.PI / 180;
      const angle2 = step * i * this.config.factor * Math.PI / 180;
      const x1 = 500 + 400 * Math.cos(angle1);
      const y1 = 500 + 400 * Math.sin(angle1);
      const x2 = 500 + 400 * Math.cos(angle2);
      const y2 = 500 + 400 * Math.sin(angle2);
      const line = document.createElementNS(SVGNS, 'line');
      line.setAttribute('x1', x1 + '');
      line.setAttribute('y1', y1 + '');
      line.setAttribute('x2', x2 + '');
      line.setAttribute('y2', y2 + '');
      this.svg.appendChild(line);
    }
  }

  showPoint() {
    const total = this.config.numPoint;
    const step = 360 / total;
    for (let i = 0; i < total; i++) {
      const angle = step * i * Math.PI / 180;
      const cx = 500 + 400 * Math.cos(angle);
      const cy = 500 + 400 * Math.sin(angle);
      const circle = document.createElementNS(SVGNS, 'circle');
      circle.setAttribute('cx', cx + '');
      circle.setAttribute('cy', cy + '');
      circle.setAttribute('r', '10');
      circle.setAttribute('class', 'tick');
      this.svg.appendChild(circle);
    }
  }

  drawCircle() {
    const circle = document.createElementNS(SVGNS, 'circle');
    circle.setAttribute('cx', '500');
    circle.setAttribute('cy', '500');
    circle.setAttribute('r', '400');
    circle.setAttribute('class', 'main');
    this.svg.appendChild(circle);
  }

  setViewBox() {
    this.svg.setAttribute('viewBox', '0 0 1000 1000');
  }

  clean() {
    while (this.svg.lastChild) {
      this.svg.removeChild(this.svg.lastChild);
    }
  }

}
