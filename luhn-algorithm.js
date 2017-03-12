function check (number) {

  if (isNaN(Number(number))) { return "Your input is not a number"; }
  else if ((Number(number) < 0) || (Number(number) === -0)) { return "Enter a set of numbers with positive digits"; }
  else if (number.length <= 1) { return "Enter a set of numbers with more than 1 digit"; }


  var stringArray = number.split("");
  var numberArray = [];
  var numberArraySumValue = 0;

  stringArray.forEach(function (element) {
    element = Number(element);
    numberArray.push(element);
  });

  for (var i = numberArray.length-2; i >- 1; i = i-2) {
    if ((numberArray[i] * 2) > 9) {
      numberArray[i] = (numberArray[i] * 2) - 9;
    } else {
      numberArray[i] = numberArray[i] * 2;
    }
  }

  for (var i = 0; i < numberArray.length - 1; i++) {
    numberArraySumValue += numberArray[i];
  }

  if ((10-(numberArraySumValue%10)) === numberArray[numberArray.length-1]) {
    return "This set of numbers PASSES the luhn algorithm test.";
  } else {
    return "This set of numbers DOES NOT PASS the luhn alogirthm test.";
  }

}

check(process.argv[2]);

module.exports = check;