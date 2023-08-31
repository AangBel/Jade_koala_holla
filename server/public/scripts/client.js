console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaNameInput = $('#nameIn').val();
    let koalaAgeInput = $('#ageIn').val();
    let koalaGenderInput= $('#genderIn').val();
    let koalaReady = $('#readyForTransferIn').val();
    let koalaNotes = $('#notesIn').val();

    let koalaToSend = {
      name: koalaNameInput,
      age: koalaAgeInput,
      gender: koalaGenderInput,
      readyForTransfer: koalaReady,
      notes: koalaNotes,
    };
    // call saveKoala with the new object
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}
