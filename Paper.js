class Paper{


    constructor(x,y,radius){
       
        var options = {
            restitution: 0.8,
            friction: 0.5,
            density: 1,
            isStatic: false
        }

        this.body = Bodies.circle(x,y,radius/1.5,options);
        World.add(world,this.body);
        this.radius = radius;
        this.image = loadImage("lol.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}