function validInput(og, temp){
  return areNumbers(og, temp) && tempRight(temp) && ogRight(og);
}

function areNumbers(og, temp){
  return parseFloat(og) && parseFloat(temp);
}

function tempRight(temp){
  temp = parseInt(temp);
  return temp >= 50 && temp <= 105;
}

function ogRight(og){
  og = parseFloat(og);
  return og >= 1.000 && og <= 2.000;
}

function sgCorrection(og, temp){
    switch (true){
      case temp >= 50 && temp < 60:
        return (og -= 0.0005).toFixed(4);
        break;
      case temp >= 60 && temp < 70:
        break;
      case temp >= 70 && temp < 77:
        og += 0.001;
        break;
      case temp >= 77 && temp <84:
        og += 0.002;
        break;
      case temp >= 84 && temp <95:
        og += 0.003
        break;
      case temp >= 95 && temp < 105:
        og += 0.005;
        break;
      case temp === 105:
        og += 0.007;
        break;
      // default:
        // return "Temperature must be in the range between 50ºF and 105ºF";
    }
    round = Math.round(og * 1000) / 1000;
  return round.toFixed(3);
}


function isInt(n) {
 parsed = parseFloat(n)
 return typeof parsed === 'number' && parsed > 0;
}

$(document).ready(function(){
  var result = $(".result");
  var error  = $(".error");
  result.hide();
  $("form").submit(function(event){
    event.preventDefault();
    // console.log("READY!");
    result.hide();
    error.hide();

    var og = $('[name="og"]').val();
    var temp = $('[name="temp"]').val();

    og = parseFloat(og);
    temp = parseFloat(temp);

    if(validInput(og, temp)){
      console.log("In TRUE");
      result.text("Adjusted Specific Gravity: " + sgCorrection(og, temp));
      result.show();
    }else{
      console.log("In FALSE");
      error.text("Your specific gravity and temp should be valid numbers.");
      error.show();
    }
  });
});