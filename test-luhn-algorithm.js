var assert = require("chai").assert;
var check = require("./luhn-algorithm.js");

describe("Check", function() {

  it("should return a message -Your input is not a number- if user input is not a set of numbers", function() {
    var word = "vinay";
    var result = check(word);
    assert.equal(result, "Your input is not a number");
  });

  it("should return a message -Enter a set of positive digits- if user input is a negative number", function() {
    var input = "-1";
    var result = check(input);
    assert.equal(result, "Enter a set of numbers with positive digits");
  });

  it("should return a message -Enter a set of numbers with more than 1 digit- if user input is just one number", function() {
    var input = "1";
    var result = check(input);
    assert.equal(result, "Enter a set of numbers with more than 1 digit");
  });

  it("should return a message - passes algorithm - if user input is 12", function() {
    var input = "12";
    var result = check(input);
    assert.equal(result, "This set of numbers DOES NOT PASS the luhn alogirthm test.");
  });

  it("should return a message - passes algorithm - if user input is 79927398713", function() {
    var input = "79927398713";
    var result = check(input);
    assert.equal(result, "This set of numbers PASSES the luhn algorithm test.");
  });

  it("should return a message - does not pass algorithm - if user input is 79927398710", function() {
    var input = "79927398710";
    var result = check(input);
    assert.equal(result, "This set of numbers DOES NOT PASS the luhn alogirthm test.");
  });

});

