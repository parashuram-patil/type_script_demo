import * as Constants from './GoodConstants'

abstract class A {
    add() {
        console.log("Add Method")
    }

    sub() {
        console.log("Sub Method")
    }

    abstract div():Number;
}

class B extends A {
    test() {
        this.add();
        this.sub();
    }

    div(): Number {
        console.log("Div Method");

        return Constants.ConfigConstant.a/Constants.ConfigConstant.c;
    }
}

let b = new B();
b.test();
console.log(b.div());