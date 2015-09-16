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
}

var LogGoodResult = function(functionName, stringToDisplay) {
    console.log("Success in function " + functionName + ": " + stringToDisplay);
}

var LogBadResult = function(functionName, stringToDisplay) {
    console.log("ERROR in function " + functionName + ": " + stringToDisplay);
}

var calc = new Calculator(10);
//calc.enableTraces();
LogResult(calc.getValue() == 10, "getValue", "Test getValue()");
LogResult(calc.add(12) == 22, "add", "Test add(12)");
LogResult(calc.substract(12) == 10, "substract", "Test substract(12)");
LogResult(calc.multiply(2) == 20, "multiply", "Test multiply(2)");
LogResult(calc.divide(2) == 10, "divide", "Test divide(2)");
LogResult(calc.sin() == Math.sin(calc.getValue()), "sin", "Test sin(" + calc.getValue() + ")");
LogResult(calc.cos() == Math.cos(calc.getValue()), "cos", "Test cos(" + calc.getValue() + ")");
LogResult(calc.tan() == Math.tan(calc.getValue()), "tan", "Test tan(" + calc.getValue() + ")");
LogResult(calc.factorial() ==  3628800, "factorial", "Test factorial(" + calc.getValue() + ")");