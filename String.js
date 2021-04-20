class String{
    constructor(BA,BB){
        var options = {
            BA: BA,
            BB: BB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){
        var PA = this.chain.BA.position;
        var PB = this.chain.BB.position;
        strokeWeight(4);
        line(PA.x,PA.y,PB.x,PB.y)
    }
}