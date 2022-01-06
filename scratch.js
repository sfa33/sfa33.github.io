function setup() {
    //createCanvas(innerWidth, innerHeight);

    let b = document.getElementById("canvas");
    let w = b.clientWidth;
    let h = b.clientHeight;
    console.log(w, h);

    var myCanvas = createCanvas(w, w * 2 /3);
    myCanvas.parent("canvas");
  }

  function movingLines(strw) {
    for (var y = 0; y <= height; y++) {
      if (y % (strw * 2) == 0) {
        strokeWeight(strw);
        stroke(255);
        line(0, y, mouseX, y);
      }
    }
    return 0;
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

movingLines(30);




        // var words = ["rainbow", "heart","purple", "friendship", "love"];

        // var index = 0;

        strokeWeight(0);
        textSize(40);
        text(words[index], width / 2, height / 2);
        
      
      // function mousePressed() {
      //   index = index + 1;
        
      //   if (index == words.length) {
      //     index = 0;


        }

      
        
    
        var words = ["rainbow", "heart","purple", "friendship", "love"];

        var index = 0;

        // strokeWeight(0);
        // textSize(40);
        // text(words[index], width / 2, height / 2);
    
    function mousePressed() {
      index = index + 1;
      
      if (index == words.length) {
       index = 0;

      console.log ("hey i pressed the fuck u")

      }

    }


// for (let i = 0; i < 500; i++) {
//   let r = random(-1000, 1000);

//   if (i % 10 == 0) {
//     line(width / 2, i, height + r, i);
//   }

//   }


    


      
