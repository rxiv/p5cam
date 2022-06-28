const density = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`\'.          ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(200,200);
  asciiDiv = createDiv();
}

function draw() {

  video.loadPixels();
  let asciiImage = '';
  for (let j = 0; j < video.height; j++){
    for (let i=0; i < video.width; i++){

      const pixelIndex = (i + j * video.width) * 4;

      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      
      const cx = color(r, g,b);
      const bt = brightness(cx);

      const len = density.length;
      const charIndex = floor(map(bt, 0,255,len,0));
      const c = density.charAt(charIndex);
      
      if(c == ' ') asciiImage += '&nbsp;'
      else if (c == '&') asciiImage += '&amp;'
      else if (c == '<') asciiImage += '&lt;'
      else if (c == '>') asciiImage += '&gt;'
      else asciiImage += c;
      
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);

}