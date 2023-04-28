const preload = {
  circle: `<svg width="322" height="322" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M119.088 185.106 82.568 106.6H72.47v97.943h12.452v-66.055l30.294 66.055h7.743l30.371-66.055v66.055h12.452V106.6h-10.098l-36.596 78.506Zm83.973 8.58v-34.243h45.859v-10.857h-45.859v-31.129h49.731V106.6h-62.183v97.943h63.777v-10.857h-51.325Z" fill="#010101"/><path d="M161.037 305.207c79.663 0 144.243-64.58 144.243-144.244C305.28 81.3 240.7 16.72 161.037 16.72c-79.664 0-144.244 64.58-144.244 144.243 0 79.664 64.58 144.244 144.244 144.244Z" stroke="url(#a)" stroke-width="33"/><defs><linearGradient id="a" x1="161.037" y1="16.72" x2="161.037" y2="305.207" gradientUnits="userSpaceOnUse"><stop stop-color="#FAD126" stop-opacity=".996"/><stop offset="1" stop-color="#FF544F"/></linearGradient></defs></svg>`,
  overlay: document.createElement('div'),

  show() {
    this.overlay.classList.add('overlay');
    this.overlay.innerHTML = this.circle;
    document.body.append(this.overlay);
  },
  remove() {
    this.overlay.remove();
  },
};

export default preload;
