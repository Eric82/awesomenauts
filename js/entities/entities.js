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
   },
  
   update: function (){
          
   }
});