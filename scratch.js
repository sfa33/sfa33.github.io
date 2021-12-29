function setup() {
    createCanvas(innerWidth, innerHeight);
  }

function draw() {
    background(0);
    strokeWeight(100);
    

    
  
        var x = 0;
        var y = 0;
        /*while (x <= width) {
          fill(0,200,255);
          ellipse(x, 100,25,25);
          x = x + 50;
        }*/
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
    }
  
  //fill(0,255,0,100)
//noStroke();
//rect(255,150,100,100)