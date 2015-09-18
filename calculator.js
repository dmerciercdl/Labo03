/**
 * Created by dmercier on 2015-09-15.
 */

var Calculator = function (number) {
    this.number = number || 0;
    this.tracesActivated = false;

    this.enableTraces = function() {
        this.tracesActivated = true;
        return this;
    };

    this.disableTraces = function() {
        this.tracesActivated = false;
        return this;
    };

    this.log = function(stringToLog) {
        if(this.tracesActivated == true) {
            console.log(stringToLog);
        }
        return this;
    };

    this.reset = function() {
        this.number = 0;
        return this;
    };

    this.set = function(number) {
        this.number = number;
        return this;
    };

    this.getValue = function() {
        this.log("getValue " + this.number);
        return this.number;
    };

    this.add = function(numberToAdd) {
        var tmpNumber = this.number;
        this.number += numberToAdd;
        this.log("add " + tmpNumber + " + " + numberToAdd + " = " + this.number);
        return this;
    };

    this.substract = function(numberToSubstract) {
        var tmpNumber = this.number;
        this.number -= numberToSubstract;
        this.log("substract " + tmpNumber + " - " + numberToSubstract + " = " + this.number);
        return this;
    };

    this.multiply = function(multiplyFactor) {
        var tmpNumber = this.number;
        this.number *= multiplyFactor;
        this.log("multiply " + tmpNumber + " by " + multiplyFactor + " = " + this.number);
        return this;
    };

    this.divide = function(divideFactor) {
        var tmpNumber = this.number;
        this.number /= divideFactor;
        this.log("divide " + tmpNumber + " by " + divideFactor + " = " + this.number);
        return this;
    };

    this.sin = function() {
        this.number = Math.sin(this.number);
        return this;
    };

    this.cos = function() {
        this.number = Math.cos(this.number);
        return this;
    };

    this.tan = function() {
        this.number = Math.tan(this.number);
        return this;
    };

    this.factorial = function() {
        if(isInt(this.number) == false) {
            throw new NotImplementedException("Gamma function not implemented for this class.");
        }
        else if(this.number == 0) {
            this.number = 1;
        }
        else {
            this.number = _factorial(this.number);
        }

        return this;
    };

    // this function is private
    isInt = function(n) {
        return n % 1 === 0;
    };

    // factorial inspired from http://jsfiddle.net/glenn_antoine/fkCyJ/
    // modified to indicate that gamma function is not supported
    // this function is private
    _factorial = function(num) {
        if(num == 0) {
            return 1;
        }
        else {
            return (num * _factorial(num - 1));
        }
    };

    function NotImplementedException(message) {
        this.message = message;
        this.name = "NotImplementedException";
    }
};

