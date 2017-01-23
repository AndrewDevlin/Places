//back end logic
function Place(location, landmark, time, notes) {
  this.local = location;
  this.landmark = landmark;
  this.time = time;
  this.note = notes;
}

//front end logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTime =  $("input#time-of-year").val();
    var inputtedNotes = $("input#notes").val();

    //alert(inputtedLocation);

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTime, inputtedNotes);

    $("ul#location-list").append('<li><span class="item">' + newPlace.local + '</span></li>');

    //alert(newPlace.local);

    $(".item").last().click(function() {
      $("#info").show();
      $(".stuff").append(newPlace.local);
      $(".stuff").append(newPlace.landmark);
      $(".stuff").append(newPlace.time);
      $(".stuff").append(newPlace.note);
    });

    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#time-of-year").val("");
    $("input#notes").val("");
  });
});
