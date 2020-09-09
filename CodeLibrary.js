function isTouching(ojb1,ojb2){
    if(ojb1.x-ojb2.x<(ojb1.width+ojb2.width)/2 &&  
  ojb2.x-ojb1.x<(ojb1.width+ojb2.width)/2 && 
  ojb1.y-ojb2.y<(ojb1.height+ojb2.height)/2 &&
  ojb2.y-ojb1.y<(ojb1.height+ojb2.height)/2){
    return true
  }
  else{
   return false
  }
  }
  
  function bounceOff(ojb1,ojb2){
    if(ojb1.x-ojb2.x<(ojb1.width+ojb2.width)/2 &&  
  ojb1.x-ojb2.x<(ojb1.width+ojb2.width)/2){
   ojb1.velocityX=ojb2.velocityX*(-1);
   ojb1.velocityX=ojb2.velocityX*(-1);
  }
  if (ojb1.y-ojb2.y<(ojb1.height+ojb2.height)/2 &&
  ojb1.y-ojb2.y<(ojb1.height+ojb2.height)/2){
    ojb1.velocityY=ojb2.velocityY*(-1);
    ojb1.velocityY=ojb2.velocityY*(-1);
  }
  }
  function collide(ojb1,ojb2){
    if(isTouching(ojb1,ojb2)){
      ojb1.velocityX=0
      ojb2.velocityX=0
      ojb1.velocityY=0
      ojb2.velocityY=0;
    }
  

  }