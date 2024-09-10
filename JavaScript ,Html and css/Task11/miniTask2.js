class Shape{
width 
height
constructor(width ,height){
this.width=width
this.height=height
}
Area()
{

}
Premiter()
{

}

}

class Rectangle extends Shape{

Area(){
return this.width*this.height
}
Premiter(){
return 2*(this.height+this.width)
}

}

class Circle extends Shape{
    radius
    constructor(radius){
        // Pass diameter for both width and height to the parent class
    super(radius, radius);
        this.radius=radius
    }
Area(){
    return Math.pow(this.radius,2)*Math.PI
}
Premiter(){
    return 2*this.radius*Math.PI
}
}

class Square extends  Rectangle{
    side
    constructor(side){
        // Pass diameter for both width and height to the parent class
    super(side, side);
        this.side=side
    }

}



////testing 
//rectangle
var rec=new Rectangle(12,10)
console.log(`the rectangle area ${rec.Area()}`)
console.log(`the rectangle Premiter ${rec.Premiter()}`)
//square 
var sq=new Square(4)
console.log(`the square area ${sq.Area()}`)
console.log(`the square Premiter ${sq.Premiter()}`)
//circle
var cir=new Circle(5)
console.log(`the circle area ${cir.Area()}`)
console.log(`the circle Premiter ${cir.Premiter()}`)

