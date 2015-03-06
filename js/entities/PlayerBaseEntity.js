//this is the information that we use for our player.
game.PlayerBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //on the lines below is the description of the tower that we are going to use for our player.
                image: "tower",
                width: 100,
                height: 100,
                spritewidth: "100",
                spriteheight: "100",
                getShape: function() {
                    return (new me.Rect(0, 0, 100, 70)).toPolygon();
                }
            }]);
        //this broken will say that the tower is not broken and is still up.
        this.broken = false;
        // this will be the health of the tower.
        this.health = game.data.playerBaseHealth;
        //if the screen move and we can't see the tower it is always goingn to check if has been destroyed or not.
        this.alwaysUpdate = true;
        //if the player runs into the tower he will collide with it and be able to destroy it
        this.body.onCollision = this.onCollision.bind(this);
        //this is for other collisions and objects that will be for character.
        
        this.type = "PlayerBase";

        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");

    },
    update: function(delta) {
        if (this.health <= 0) {
            this.broken = true;
            game.data.win = false;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    loseHealth: function(damage){
       this.health = this.health - damage;
    },
    
    onCollision: function() {

    }

});