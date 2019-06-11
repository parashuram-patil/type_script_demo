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

        return 10/2;
    }
}

let b = new B();
b.test();
b.div();