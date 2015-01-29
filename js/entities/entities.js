//this code is a class and has function in it so melon js will work.
game.PlayerEntity = me.Entity.extend({
   init: function(x, y, settings){
       //this is telling us the information about the character that we are trying to use
       this._super(me.Entity, 'init', [x, y, {
               image: "player",
               width: 64,
               height: 64,
               spritewidth: "64",
               spriteheight: "64",
               getShape: function(){
                   return(new me.Rect(0, 0, 64, 64)).toPolygon();
               }
       }]);
       //this line is the speed of my player
       this.body.setVelocity(5, 20);
   
   },
  //in update function it will check if I pressed the key so that it moves when I press it.
   update: function (delta){
          if(me.input.isKeyPressed("right")){
          //adds to the position of my x by the velocity defined above in 
          //setVelocity() and multiplying it by me.timer.tick.
          //me.timer.tick makes the movement look smooth
           this.body.vel.x += this.body.accel.x * me.timer.tick;   
          }else{
              this.body.vel.x = 0;
          }
          
          this.body.update(delta);
          return true;
   }
});