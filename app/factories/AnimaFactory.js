"use strict";
 
angular.module("BenApp").factory("AnimaFactory", function($window, $document, $route, $interval) {


    let window = $window;
$window.requestAnimationFrame = $window.requestAnimationFrame || $window.mozRequestAnimationFrame ||                $window.webkitRequestAnimationFrame || $window.msRequestAnimationFrame;
let cancelAnimationFrame = $window.cancelAnimationFrame || $window.mozCancelAnimationFrame;

    let onload =()=> {
        console.log("test");
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
                // c.save();
                c.beginPath();
                // c.translate (1+this.x,1+this.y+1);
                c.lineTo(this.x,this.y);
                // c.rotate((10 * Math.PI)/ 180);
                c.lineTo(this.x+this.y1+5,this.y+this.y1);
                c.closePath();
                // c.rotate((4 * Math.PI)/ 180);
                c.lineTo(this.x1+5,this.y1);
                c.lineTo(this.x1-this.y1,this.y1-this.y);
                c.closePath();
                
                // c.arc(this.x, this.y, this.radians, 0, Math.PI * 2, false);
                c.lineTo(this.radians+this.x1,this.velocity+this.y);
                // c.restore();
                c.shadowColor = "rgba(255,0,154.0.5)";
                c.strokeStyle="rgb(255,0,154)";
                c.shadowBlur = 25;
                
                // c.font="40px Futura";
                
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
                if (this.x  > 520|| this.x  < 0) {
                    this.dx = -this.dx;
                }   
                if (this.y > 240|| this.y < 0) {
                    this.dy = -this.dy;
                }
                if (this.x1  > 520 || this.x1  < 0) {
                    this.dx1 = -this.dx1;
                }   
                if (this.y1 > 240 || this.y1 < 0) {
                    this.dy1 = -this.dy1;
                }
                this.draw();
            };
        }
    
            let homeArray;
            let implement = ()=>{
                homeArray = [];
                for(let i=0; i<3;i++){
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
                c.translate(c.Width/2,c.Height/2);
                c.clearRect(0,0,540,540);
                c.fillRect(0,0,540,540);
                c.translate(c.Width/2,c.Height/2);
                c.fillStyle="rgba(0,0,0,0.05)";
                // c.translate (-1,0);
                    for (let i=0;i<homeArray.length; i++){
                        homeArray[i].update();
                    }
                }
           
    
    
        implement();    
        drawObj();
        // c.scale(4/5,4/5);
        c.translate(c.Width/3,c.Height/2);
        
    
        
    
     };

     return {onload}
});