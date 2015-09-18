/**
 * Created by dmercier on 2015-09-15.
 */

var LogResult = function(success, functionName, stringToDisplay) {
    if(success === true) {
        LogGoodResult(functionName, stringToDisplay);
    }
    else {
        LogBadResult(functionName, stringToDisplay);
    }
};

var LogGoodResult = function(functionName, stringToDisplay) {
    console.log("Success in function " + functionName + ": " + stringToDisplay);
};

var LogBadResult = function(functionName, stringToDisplay) {
    console.log("ERROR in function " + functionName + ": " + stringToDisplay);
};

var calcu = new Calculator();
LogResult(calcu.getValue() == 0, "getValue", "Test getValue on default value");

var calc = new Calculator(10);

LogResult(calc.getValue() == 10, "getValue", "Test getValue()");
LogResult(calc.add(12).getValue() == 22, "add", "Test add(12)");
LogResult(calc.substract(12).getValue() == 10, "substract", "Test substract(12)");
LogResult(calc.multiply(2).getValue() == 20, "multiply", "Test multiply(2)");
LogResult(calc.divide(2).getValue() == 10, "divide", "Test divide(2)");
LogResult(calc.reset().getValue() == 0, "reset", "Test reset()");
LogResult(calc.set(10).getValue() == 10, "set", "Test set(10)");
LogResult(calc.sin().getValue() == Math.sin(10), "sin", "Test sin(10)");
calc.set(10);
LogResult(calc.cos().getValue() == Math.cos(10), "cos", "Test cos(10)");
calc.set(10);
LogResult(calc.tan().getValue() == Math.tan(10), "tan", "Test tan(10)");
calc.set(0);
LogResult(calc.factorial().getValue() ==  1, "factorial", "Test factorial(0)");
calc.set(10);
LogResult(calc.factorial().getValue() ==  3628800, "factorial", "Test factorial(10)");
calc.reset();
LogResult(calc.add(10).substract(5).getValue() == 5, "Chained #1", "Test chain #1");
LogResult(calc.add(95).divide(2).multiply(4).getValue() == 200, "Chained #2", "Test chain #2");
calc.reset();
calc.set(1);
LogResult(calc.sin().getValue() == Math.sin(1), "sin", "Test sin(1)");
calc.set(1);
LogResult(calc.cos().getValue() == Math.cos(1), "cos", "Test cos(1)");
calc.set(1);
LogResult(calc.tan().getValue() == Math.tan(1), "tan", "Test tan(1)");
calc.set(0.5);
try {
    calc.factorial();
}
catch(e) {
    console.log("Exception raised : " + e.name + " : " + e.message);
    LogResult(true, "factorial", "Factorial(0.5)");
}