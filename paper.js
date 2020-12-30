class Paper{
    constructor(x,y,r){
        var options=
        {
            isStatic:false,
            restitution:0.9 ,
            friction:0.5,
            density:0.9,
        }

        this.body=Bodies.circle(x, y, r, options);
                
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
                
        push()
        translate (pos.x,pos.y);
        rectMode (CENTER); 
        fill ("white");
        ellipse(0,0, this.r, this.r);
        pop ();

    }
}