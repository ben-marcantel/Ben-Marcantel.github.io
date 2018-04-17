"use strict";
 
angular.module("BenApp").factory("AnimaFactory", function($window, $document, $route, $interval) {


    let window = $window;
    $window.requestAnimationFrame = $window.requestAnimationFrame || $window.mozRequestAnimationFrame ||                $window.webkitRequestAnimationFrame || $window.msRequestAnimationFrame;
    let cancelAnimationFrame = $window.cancelAnimationFrame || $window.mozCancelAnimationFrame;

    let onload =()=> {
        let  c = $document[0].getElementById("landing").getContext('2d');
        let x;
        let y;
        let x1;
        let y1;
        let dx;
        let dy;
        let dx1;
        let dy1;
        let pos =[];
        let radians;
        let velocity;
      
    
        function HomeObj(x,y,x1,y1,dx,dy,dx1,dy1,pos,radians,velocity){
            this.x= x;
            this.y= y;
            this.x1= x1;
            this.y1= y1;
            this.dx= dx;
            this.dy= dy;
            this.dx1= dx1;
            this.dy1= dy1;
            this.pos= pos;
            this.radians= radians;
            this.velocity= velocity;
    
            this.draw = function(){
                c.beginPath();
                c.lineTo(this.x,this.y);
                c.lineTo(this.x+this.y1+5,this.y+this.y1);
                c.lineTo(this.x1+5,this.y1);
                c.lineTo(this.x1-this.y1,this.y1-this.y);                
                c.lineTo(this.radians+this.x1,this.velocity+this.y);
                c.closePath();                
                c.shadowColor = "rgba(255,0,154.0.5)";
                c.strokeStyle="rgb(255,0,154)";
                c.shadowBlur = 25;            
                c.stroke();
            };
    
            this.update = function(){
                pos.push(this.x);
                pos.push(this.y);
                this.x = x + (Math.cos(2*this.radians)*150);
                this.y += this.dy; 
                this.x1 = x + x1 + (Math.sin(this.radians)*150);
                this.y1 += this.dy1;
                this.radians += this.velocity;
                if (this.x  > 300|| this.x  < 0) {
                    this.dx = -this.dx;
                }   
                if (this.y > 150|| this.y < 0) {
                    this.dy = -this.dy;
                }
                if (this.x1  > 300 || this.x1  < 0) {
                    this.dx1 = -this.dx1;
                }   
                if (this.y1 > 150|| this.y1 < 0) {
                    this.dy1 = -this.dy1;
                }
                this.draw();
            };
        }
    
            let homeArray;
            let implement = ()=>{
                homeArray = [];
                for(let i=0; i<1;i++){
                    let x =  10;
                    let y =  10;
                    let x1 = 5;
                    let y1 =  5;
                    let dx = 1;
                    let dy = 1;
                    let dx1 = 1/2;
                    let dy1 = 1/2 + Math.cos((x/10));
                    let pos = [];
                    let radians = Math.random()*Math.PI*2;
                    let velocity = 0.002;
                    homeArray.push(new HomeObj(x,y,x1,y1,dx,dy,dx1,dy1,pos,radians,velocity));
                }   
            };
    
            function drawObj(){
                window.requestAnimationFrame(drawObj);
                c.fillRect(-100,-100,1080,1080);
                c.fillStyle="rgba(0,0,0,0.05)";
                c.translate(c.Width/2,c.Height/2);
                    for (let i=0;i<homeArray.length; i++){
                        homeArray[i].update();
                    }
                }
        implement();    
        drawObj();
        c.translate(100,100);
     };
    return {onload};
});