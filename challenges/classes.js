// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakers { // had to rename it from CuboidMaker to CuboidMakers since "Identifier 'CuboidMaker' has already been declared"
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

let cuboids = new CuboidMakers({ // had to rename it from cuboid to cuboids since "Identifier 'cuboid' has already been declared"
    length: 4,
    width: 5,
    height: 5
});
//Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakers {
    constructor(attributes) {
        super(attributes);
        this.side = attributes.side;
    }
    // technically we did not need to define the new attribute side
    // we could have set all three of w l h to the same thing for a cube
    // or we could have only used one of them to calculate the formulas
    // we also did not need to redefine the volume and surface area formulas
    // this stretch does not make sense to me, but I am guessing you wanted to see us use extend
    volume() {
        return Math.pow(this.side, 3);
    }
    surfaceArea() {
        return 6 * Math.pow(this.side, 2);
    }

}
CubeMaker.prototype = Object.create(CuboidMakers.prototype);
let cube = new CubeMaker({
    side: 4
});
console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96