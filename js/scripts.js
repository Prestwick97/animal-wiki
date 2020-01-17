$(document).ready(function() {
  $("form#celebrity").submit(function(event) {

    var beverage = $("#beverage").val();
    console.log(beverage);
  var food = $("#food").val();
  console.log(food);

  if (beverage === "1" && food === "a") {
    $("#jd").show();
    // var js = "#jd"
  }

  event.preventDefault();
  });
});
