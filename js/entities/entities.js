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
       this.body.setVelocity(4, 20);
       
       this.renderable.addAnimation("idle", [78]);
       //this will animate my character while he walks.
       this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 123, 124, 125] )
       
       this.renderable.setCurrentAnimation("idle");
   },
  //in update function it will check if I pressed the key so that it moves when I press it.
   update: function (delta){
          if(me.input.isKeyPressed("right")){
          //adds to the position of my x by the velocity defined above in 
          //setVelocity() and multiplying it by me.timer.tick.
          //me.timer.tick makes the movement look smooth
           this.body.vel.x += this.body.accel.x * me.timer.tick;
           this.flipX(true);
          }else{
              this.body.vel.x = 0;
          }
          
          if(this.body.vel.x !== 0) {
            if(!this.renderable.isCurrentAnimation("walk")){
                this.renderable.setCurrentAnimation("walk");   
            }
        }else{
            this.renderable.setCurrentAnimation("idle");
        }

            this.body.update(delta);
          
            this._super(me.Entity, "update", [delta])
            return true;
   }
});
//this is the information that we use for our player.
game.PlayerBaseEntitiy = me.Entity.extend({
   init : function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
        //on the lines below is the description of the tower that we are going to use for our player.
           image: "tower",
           width: 100,
           height: 100,
           spritewidth: "100",
           spriteheight: "100",
           getShape: function(){
               return (new me.Rect(0, 0, 100, 100)).toPolygon();
           }
       }]);
   //this broken will say that the tower is not broken and is still up.
       this.broken = false;
       // this will be the health of the tower.
       this.health = 10;
       //if the screen move and we can't see the tower it is always goingn to check if has been destroyed or not.
       this.alwaysUpdate = true;
       //if the player runs into the tower he will coolide with it and be able to destroy it
       this.body.onCollision = this.onCollision.bind(this);
       //this is for other collisions and objects that will be for character.
       this.type = "PlayerBaseEntity";
   },
    
    update:function(){
        if(this.health<=0){
            this.broken = true;
        }
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    onCollison: function (){
        
    } 
    
});
//this is the enemy information
game.EnemyBaseEntitiy = me.Entity.extend({
   init : function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
           image: "tower",
           width: 100,
           height: 100,
           spritewidth: "100",
           spriteheight: "100",
           getShape: function(){
               return (new me.Rect(0, 0, 100, 100)).toPolygon();
           }
       }]);
       this.broken = false;
       this.health = 10;
       this.alwaysUpdate = true;
       this.body.onCollision = this.onCollision.bind(this);
       
       this.type = "EnemyBaseEntity";
   },
    
    update:function(){
        if(this.health<=0){
            this.broken = true;
        }
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    onCollison: function (){
        
    } 
    
});