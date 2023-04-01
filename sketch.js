var colors = "FECD7F".split("-").map(a=>"#"+a)
var colors2 = "9CFFFA".split("-").map(a=>"#"+a)

let points0 = [[-0.1, 0.1], [0.1, 0.1], [0.1, -0.1], [-0.1, -0.1], [-0.1, 0.1]]
let points1 = [[0, 0], [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6]];
let points2 = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]];
let points3 = [[0, 0], [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6]];
let points4 = [[0, 0], [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6]];
let points5 = [[-1, 1], [1, 1], [1, -1], [-1, -1], [-1, 1]];
let points6 = [[-2, 2], [2, 2], [2, -2], [-2, -2], [-2, 2]];
let points7 = [[-3, 3], [3, 3], [3, -3], [-3, -3], [-3, 3]];
let points8 = [[-4, 4], [4, 4], [4, -4], [-4, -4], [-4, 4]];
let points9 = [[-5, 5], [5, 5], [5, -5], [-5, -5], [-5, 5]];
let points10 = [[-6, 6], [6, 6], [6, -6], [-6, -6], [-6, 6]];



let colorIndex = 0; 
function setup() {   
  createCanvas(windowWidth, windowHeight); 
  strokeWeight(5);
	
	multiplyPoints(points0);
	multiplyPoints(points1);
	multiplyPoints(points2);
	multiplyPoints(points3);
	multiplyPoints(points4);
	multiplyPoints(points5);
	multiplyPoints(points6);
	multiplyPoints(points7);
	multiplyPoints(points8);
	multiplyPoints(points9);
	multiplyPoints(points10);
}

function multiplyPoints(points) {
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 15;
    }
  }
}

function draw() {
  background(255);
  strokeWeight(5); 
  translate(width/2, height/2);
	scale(map(mouseX, 0, width, 0.2, 2));
  fill("#FECD7F");
  text('411730269', -120, -120);
  textSize(50)
  //scale(1, -1);
  

function drawGradientLine(points, colors1, colors2) {
  let colorIndex = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let color1 = color(colors1[colorIndex % colors1.length]);
    let color2 = color(colors1[(colorIndex + 1) % colors1.length]);
    let ratio = map(i, 0, points.length - 1, 0, 1);
    let lineColor = lerpColor(color1, color2, ratio);
    gradientLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], lineColor, color(colors2[colorIndex % colors2.length]));
    colorIndex++;
  }
  let color1 = color(colors1[colors1.length - 1]);
  let color2 = color(colors1[0]);
  let ratio = map(points.length - 1, 0, points.length - 1, 0, 1);
  let lineColor = lerpColor(color1, color2, ratio);
  gradientLine(points[points.length - 1][0], points[points.length - 1][1], points[0][0], points[0][1], lineColor, color(colors2[colors2.length - 1]));
}

// 繪製 points0 的 Gradient Line
drawGradientLine(points0, colors, colors);	
	
// 繪製 points1 的 Gradient Line
drawGradientLine(points1, colors, colors2);
	
// 繪製 points2 的 Gradient Line
drawGradientLine(points2, colors, colors2);
	
// 繪製 points3 的 Gradient Line
drawGradientLine(points3, colors, colors2);
	
// 繪製 points4 的 Gradient Line
drawGradientLine(points4, colors, colors2);	
	
// 繪製 points5 的 Gradient Line
drawGradientLine(points5, colors2, colors);

// 繪製 points6 的 Gradient Line
drawGradientLine(points6, colors2, colors);

// 繪製 points7 的 Gradient Line
drawGradientLine(points7, colors2, colors);

// 繪製 points8 的 Gradient Line
drawGradientLine(points8, colors2, colors);

// 繪製 points9 的 Gradient Line
drawGradientLine(points9, colors2, colors.slice(2).concat(colors.slice(0, 2)));
	
// 繪製 points10 的 Gradient Line
drawGradientLine(points10, colors2, colors);
	

}

	// 定義 gradientLine 函數
function gradientLine(x1, y1, x2, y2, c1, c2) {
let gradient = drawingContext.createLinearGradient(x1, y1, x2, y2);
gradient.addColorStop(0, c1.toString());
gradient.addColorStop(1, c2.toString());
drawingContext.strokeStyle = gradient;
drawingContext.beginPath();
drawingContext.moveTo(x1, y1);
drawingContext.lineTo(x2, y2);
drawingContext.stroke();
}