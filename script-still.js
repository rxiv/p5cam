const density = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`\'.               ";
const density2 = "         .:░▒▓█";
let gloria;

function preload() {
  gloria = loadImage("main-smol.jpg");
}

function setup() {
    noCanvas();

  background(0);
  // image(gloria, 0,0, width, height);

  let w = width / gloria.width;
  let h = height / gloria.height;
  gloria.loadPixels();

  for (let j = 0; j < gloria.height; j++){
    let row = '';
    for (let i=0; i < gloria.width; i++){

      const pixelIndex = (i + j * gloria.width) * 4;
      const r = gloria.pixels[pixelIndex + 0];
      const g = gloria.pixels[pixelIndex + 1];
      const b = gloria.pixels[pixelIndex + 2];
      const avg = (r+g+b) /3;

      const len = density.length;
      const charIndex = floor(map(avg, 0,255,len,0));
      const c = density.charAt(charIndex);
      
      if(c == ' ') row += '&nbsp;'
      else if (c == '&') row += '&amp;'
      else if (c == '<') row += '&lt;'
      else if (c == '>') row += '&gt;'
      else row += c;
      
    }
    createDiv(row);
  }

}