
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCqFHPz0p0NMGs3Co6N72bArnUDbkUvUPM",
  authDomain: "train-schedule-3e182.firebaseapp.com",
  databaseURL: "https://train-schedule-3e182.firebaseio.com",
  projectId: "train-schedule-3e182",
  storageBucket: "train-schedule-3e182.appspot.com",
  messagingSenderId: "293129915254"
};
firebase.initializeApp(config);
// Train data
var trainData = firebase.database();
var frequency = 0;
var time = 0;
var destination = "";
var train = "";
// Train-button
$("#add-train").on("click", function(event) {
  event.preventDefault();

  train = $("#train-input").val().trim();
  destination = $("#destination-input").val().trim();
  time = $("#time-input").val().trim();
  frequency = $("#frequency-input").val().trim();

  alert ("Your train has been added!")

  trainData.ref().push({

    train: train,
    destination: destination,
    time: time,
    frequency: frequency

    });



    trainData.ref().on("value", function(snapshot) {

      console.log(snapshot.val());
      console.log(snapshot.val().train);
      console.log(snapshot.val().time);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().frequency);


      $("#train-display").html(snapshot.val().train);
      $("#destination-display").html(snapshot.val().destination);
      $("#time-display").html(snapshot.val().time);
      $("#frequency-display").html(snapshot.val().frequency);
      //for errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
});


  });
