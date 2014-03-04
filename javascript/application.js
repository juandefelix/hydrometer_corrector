function sgCorrection(og, temp){
    switch (true){
      case temp >= 50 && temp < 60:
        return og -= 0.0005;
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
      default:
        return "Temperature must be in the range between 50ºF and 105ºF";
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
  result.hide();
  $("form").submit(function(event){
    event.preventDefault();
    // console.log("READY!");
    result.hide();

    og = $('[name="og"]').val();
    temp = $('[name="temp"]').val();

    og = parseFloat(og);
    temp = parseFloat(temp);

    if(isInt(og) && isInt(temp)){
      console.log("In TRUE");
      result.text("Adjusted Specific Gravity: " + sgCorrection(og, temp));
      result.show();
    }else{
      console.log("In FALSE");
      result.text("Your specific gravity and temp should be valid numbers");
      result.show();
    }
  });
});




// valid input(sg, temp)
//   if both fields are numbers
//   if temp in between 50 and I don't remember
//   if s.g in between 1.000 and 2.000
//     end methos