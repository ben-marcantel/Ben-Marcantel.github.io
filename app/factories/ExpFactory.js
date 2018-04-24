"use strict";

angular.module("BenApp").factory("ExpFactory", function( $document, $route, $interval){ 
    
    const workExp = ()=>{
     return `Stuff that makes stuff`  ;
        
    }; 
    const workExp2 = ()=>{
        return    `This concept best describes my goals and pursuits in software development. My descision to learn the craft of development was solidified after using an Ai image generator for an animation project. Neural nets were a familiar subject from my academic studies in philosphy, especially as it relates to the philosophy of the mind. However, it wasn't until reading about Google's deepmind project that I had a grasp of the potential for software development in creative expression. As an electronic musician and digital artist, i had experience in using technology to augment ideas. However, AI and machine learning presents the possibility for technology to be generative. Thus begins my path. In the process of learning the core concepts for my ultimate goal I have found a great interest in the concepts of user interface and the principles of data science. Fullstack development emcompasses both of these concepts. I enjoy the abstract problem solving involved in client side interfacing and in structuring server side data interaction. Javascript is my first language, its fluidity works well with my creative approach to development and business applications.    `   ;
           
       }; 
    return {workExp, workExp2};
});

