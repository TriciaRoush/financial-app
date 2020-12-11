$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    
  
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#form1", handleForm1Submit);
    
  
    // Getting the initial list of retirement
    
  
    // A function to handle what happens when the form is submitted to create a new retirements
    function handleForm1Submit(event) {
      event.preventDefault();
      const IRA401 = $('input[name="IRA401"]:checked', '#form1').val();
     console.log(IRA401)
      // Don't do anything if the name fields hasn't been filled out
      if (!IRA401.val().trim()) {
        return;
      }
      // Calling the upsertIRA401 function and passing in the value of the radio input
      upsertIRA401({
        name: IRA401.val().trim(),
        
      });
    }
  

    // A function for creating an user. Calls getUser upon completion
    function upsertIRA401k(IRA401) {
      $.post("/api/IRA401", IRA401)
        .then(getIRA401);}
    }
