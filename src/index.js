import Calculator from "./calculator";
import _ from "lodash";

import "./index.scss";

const calculator = new Calculator;

const sum = calculator.add(1, 3);

console.log(_.defaults({ "a": 1 }, { "a": 3, "b": 2 }));

console.log(sum);

console.log(process.env.API);