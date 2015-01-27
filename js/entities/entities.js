game.PlayerEntity = me.Entity.exend({
   init: function(x, y, settings){
       //this is telling us the information about the character that we are trying to use
       this._super(me.Entity, 'init' [x, y, {
               image: "player",
               width: 64,
               height: 64,
               sprutewidth: "64",
               spriteheight: "64",
       }]);
   },
   
   update: function (){
          
   }
});