function setup() {
    //createCanvas(innerWidth, innerHeight);

    let b = document.getElementById("canvas");
    let w = b.clientWidth;
    let h = b.clientHeight;
    console.log(w, h);

    var myCanvas = createCanvas(w, w * 2 /3);
    myCanvas.parent("canvas");
  }

function draw() {
    background(0);
    strokeWeight(100);
    
        var x = 0;
        var y = 0;
        for (var y = 0; y <= width/50; y += 1) {
          for (var x = 0; x <= width/50; x += 1) {
            if (x % 2 == 0){
              fill(255,0,255);
              stroke(255,0,255,100);
              strokeWeight(100);
            } else{
            fill(0,0,255);
            stroke(0,0,255,100);
            strokeWeight(100);
          }
          ellipse(x*50,y*50,25,25); 
          }  
        }


      background(255,255,255,1);
      strokeWeight(4);
      stroke(255);
    
      for (var x = 0; x <= mouseX; x += 50) {
        for (var y = 0; y <= width; y += 50) {
          fill(random(255), 0, random(255));
          ellipse(x, y, 25, 25);
        }
      }

for (let i = 0; i < 100; i++) {
  let r = random(-1000, 1000);
  line(50, i, 50 + r, i);
}


    }
  
  //fill(0,255,0,100)
//noStroke();
//rect(255,150,100,100)