console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $("#addButton").on("click", function () {
    console.log("in addButton on click");
    // get user input and put in an object
    // using a test object
    let koalaNameInput = $("#nameIn").val();
    // console.log(koalaNameInput);
    let koalaAgeInput = $("#ageIn").val();
    // console.log(koalaAgeInput);
    let koalaGenderInput = $("#genderIn").val();
    // console.log(koalaGenderInput);
    let koalaReady = $("#readyForTransferIn").val();
    // console.log(koalaReady);
    let koalaNotes = $("#notesIn").val();
    // console.log(koalaNotes);

    let koalaToSend = {
      name: koalaNameInput,
      age: koalaAgeInput,
      gender: koalaGenderInput,
      readyForTransfer: koalaReady,
      notes: koalaNotes,
    };
    // console.log(koalaToSend);

    $.ajax({
      method: "POST",
      url: "/koalas",
      data: koalaToSend,
    })
      .then(function (response) {
        console.log(response);
        getKoalas;
      })
      .catch(function (error) {
        console.log("error in setup click listeners ajax post", error);
        alert("Error. Please try again later.");
      });
    getKoalas();
  });
}

function getKoalas() {
  console.log("in getKoalas");
  $("#viewKoalas").empty();
  // ajax call to server to get koalas
  $.ajax({
    method: "GET",
    url: "/koalas",
  })
    .then(function (response) {
      const koalaToReceive = response;

      for (let koala of koalaToReceive) {
        $("#viewKoalas").append(`
                <tr>
                    <td>${koalaToReceive.name}</td>
                    <td>${koalaToReceive.age}</td>
                    <td>${koalaToReceive.gender}</td>
                    <td>${koalaToReceive.ready}</td>
                    <td>${koalaToReceive.notes}</td>
                </tr>
                `);
      }
    })
    .catch(function (error) {
      console.log("error in koala get", error);
    });
} // end getKoalas

// function saveKoala( newKoala ){
//   console.log( 'in saveKoala', newKoala );
//   // ajax call to server to get koalas

// }
