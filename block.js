class block{
    constructor(x,y,width,height){
var options ={
    isStatic: false,
    restitution: 0.8,
    friction: 1.0,
    density: 1.0
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = this.width;
this.height = height;
World.add(world,this.body);
    }
    display(){
        var a = this.body.position;
        rectMode(CENTER);
        push();
        fill("orange");
        rect(a.x,a.y,this.width,this.height);
        pop();
    }
}