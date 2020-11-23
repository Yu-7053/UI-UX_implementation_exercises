function lifeNumber(arr) {
    var combinedNumbers = arr.split("-").join(""),
      totalValue = 0,
      finalValue = 0;
  
    for (i = 0; i < combinedNumbers.length; i++) {
      totalValue += parseInt(combinedNumbers[i]);
       
    }
 
  
    for (i = 0, totalValue += "";  i < totalValue.length; i++) {
      finalValue += parseInt(totalValue[i]);
    }
  
    return finalValue;
  }
  
  var inputBirthday = "13-11-1938",
  finalLifeNumber = lifeNumber(inputBirthday);
  
  console.log(finalLifeNumber);