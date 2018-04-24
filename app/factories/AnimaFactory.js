"use strict";
 
angular.module("BenApp").factory("AnimaFactory", function($window, $document, $route, $interval) {

    let window = $window;
    $window.requestAnimationFrame = $window.requestAnimationFrame || $window.mozRequestAnimationFrame ||                $window.webkitRequestAnimationFrame || $window.msRequestAnimationFrame;
    let cancelAnimationFrame = $window.cancelAnimationFrame || $window.mozCancelAnimationFrame;

    let onload =()=> {
        
        let  c = $document[0].getElementById("landing").getContext('2d');
        // c.Width=512;
        // c.Height=244;
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
                c.lineTo(this.x+this.y1,this.y+this.y1);
                c.lineTo(this.x1,this.y);
                c.lineTo(this.y1,this.x);
                c.bezierCurveTo(this.x+200, this.y+100, this.x, this.y1, this.x1, this.y);
                // c.bezierCurveTo(this.y+100, this.x+150, this.x, this.y, this.x1+10, this.y1);   
                // c.bezierCurveTo(this.x+200, this.y+100, this.x1, this.y, this.y1-10, this.y);            
                c.closePath();                
                c.strokeStyle="rgb(255,0,154)";
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
                if (this.x  > 512-this.radians|| this.x  < 0) {
                    this.dx = -this.dx;
                }   
                if (this.y > 344-this.radians|| this.y < 0) {
                    this.dy = -this.dy;
                }
                if (this.x1  > 512-this.radians || this.x1  < 0) {
                    this.dx1 = -this.dx1;
                }   
                if (this.y1 > 344-this.radians|| this.y1 < 0) {
                    this.dy1 = -this.dy1;
                }
                this.draw();
            };
        }
    
            let homeArray;
            let implement = ()=>{
                homeArray = [];
                for(let i=0; i<2;i++){
                  
                    let x =  1;
                    let y =  1;
                    let x1 = 5;
                    let y1 =  5;
                    let dx = 1;
                    let dy = 1;
                    let dx1 = 1/2;
                    let dy1 = 1/2 ;
                    let pos = [];
                    let radians = 1*Math.PI*2;
                    let velocity = 0.002;
                    homeArray.push(new HomeObj(x,y,x1,y1,dx,dy,dx1,dy1,pos,radians,velocity));
                }   
            };
            function drawObj(){
                window.requestAnimationFrame(drawObj);
                c.fillRect(-400,-400,1080,1080);
                c.fillStyle="rgba(0,0,0,0.05)";
                    for (let i=0;i<homeArray.length; i++){
                        homeArray[i].update();
                    }
                }
        implement();    
        drawObj();
        c.translate(150,0);
     };
    return {onload};
});