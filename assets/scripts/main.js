import "style1.css";
import "style2.css";
import * as d from "data.json"
console.log(d)
import { testFunc } from "test";
testFunc();

function component() {
    const button = document.createElement("button");
    button.innerHTML = "Click me and look at the console!";
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    });
    return button
}
document.body.appendChild(component())