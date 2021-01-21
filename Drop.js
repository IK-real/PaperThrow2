class Drop{


    constructor(x,y,width,height){
       
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width/1.25,height/1.25,options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        
    }

    display(){
       var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x , pos.y, this.width , this.height)
       
      }
}