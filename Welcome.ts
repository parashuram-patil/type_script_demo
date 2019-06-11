class Welcome {
    private a:String = "10";
    private b:Number = 10;
    private c:Boolean = true;
    d:String = "public var d"

    constructor(public name: String) {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }

    /*constructor(public name: String) {
    }*/

    hello(): String{
        return "HelloWorld";
    }

    // Default shoud always after non defaults
    anotherHello(a:String, b:Number, c:Boolean, d:any, e:Number=0) {
        console.log("From anotherHello() ---> " + typeof(d));
        console.log(a, b, c, d, e);
    }
}

let w = new Welcome("PSP");
console.log(w.name);
console.log(w.d);
w.hello();
w.anotherHello("PSP", 11, true, "Patil");
w.anotherHello("PSP", 11, true, 1, 2);

let w1 = new Welcome("XYZ");
console.log(w1.name);

class Test1{}
class Test2{}
class Test3{}
class Test4{}

export default Welcome
export {Test1, Test2, Test3}