/********************* Task 1 ****************/

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get rad() {
        return this.radius;
    }

    set rad(newValue) {
        this.radius = newValue;
    }

    get diam() {
        return this.radius + this.radius;
    }

    static squareCircle(circle) {
        return Math.PI * Math.pow(circle.radius, 2);
    }

    static lengthCircle(circle) {
        return 2 * Math.PI * circle.radius;
    }
};

let circle = new Circle(3.2);
alert(circle.rad);
alert(circle.diam);
circle.radius = 8;
alert(circle.radius);
alert(circle.diam);
alert(Circle.squareCircle(circle));
alert(Circle.lengthCircle(circle));

/**************** Task 3 ***************************/

class CssClass {
    constructor(styleArray) {
        this.styleArray = styleArray;
    }

     instalationStyla (style){

     }
     deleteStyle(style){

     }

};