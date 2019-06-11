import Welcome from './Welcome'
import {Test1, Test2} from './Welcome'

class Messanger {

    constructor() {
        let w = new Welcome("PSP");
        console.log(w.hello());
    }
}