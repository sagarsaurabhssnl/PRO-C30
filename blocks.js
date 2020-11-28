class Block{
    constructor(x,y){
         var options={
           restitution: 0.3
         }
         this.body=Matter.Bodies.rectangle(x,y,25,35, options);
         Matter.World.add(world, this.body);
         this.Visibility = 255
    }

    display(){
      if(this.body.speed < 8){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0,0, 25,35);
        pop();
      }else {
        Matter.World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility)
        // rect(this.body.position.x,this.body.position.y, 25,35);
        pop();
      }
    }
}