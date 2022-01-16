var length= document.querySelectorAll(".layer").length;
var mouseTween;
var circles = document.querySelectorAll(".layer .basicShape");
var endShapes = document.querySelectorAll(".layer .endShape");

TweenMax.staggerTo('.layer', 0, {cycle:{zIndex:function(index, target){
 return (length - index);
}}}, 0)

TweenMax.set(".layer .basicShape", {
        transformOrigin: "center center",
        scale:2.3,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      })

for(var i=0; i < length; i++){
  TweenMax.to(circles[i], getRndInteger(1, 2.2), {morphSVG:endShapes[i], yoyo:true, repeat: -1, ease:Sine.easeInOut});
  TweenMax.to(circles[i], getRndInteger(0.8, 2), {
    transformOrigin: "center center",
    scale: 1.3,
    ease: Power1.easeInOut,
    delay: i * 0.2,
    yoyo: true,
    repeat: -1
  })
}

TweenMax.staggerTo(".layer", 0.1, {cycle:{scale:function(index, target){
          return 1 + 0.1*(length-index);
        }}});


window.addEventListener("mousemove", function(e){    
  TweenMax.set('.layer', {transformOrigin: mousePos(e).x + "px " + mousePos(e).y + "px"});
  mouseTween = TweenMax.to([".layer .basicShape"], 0.5, {
      x: mousePos(e).x,
      y: mousePos(e).y,
      ease: Cubic.easeOut
    })
  })


//**


var mie = (navigator.appName == "Microsoft Internet Explorer") ? true : false; 

function mousePos(e){
    var posx, posy;
        
    if (!mie) {
        posx = e.pageX; 
        posy = e.pageY;
    }
    else {
        posx = event.clientX + document.body.scrollLeft;
        posy = event.clientY + document.body.scrollTop;
    }
  
  return {x:posx, y:posy};
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}