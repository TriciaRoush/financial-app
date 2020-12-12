$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var nameFirst = $("#fname");
    var nameLast = $("#lname");
  
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#form1", handleForm1Submit);
    //$(document).on("click", ".delete-author", handleDeleteButtonPress);
  
    // Getting the initial list of User
    
  
    // A function to handle what happens when the form is submitted to create a new User
    function handleForm1Submit(event) {
      event.preventDefault(); 
      const IRA401 = $('input[name="IRA401"]:checked', '#form1').val();
      const currentDebt = $('input[name="currentDebt"]:checked', '#question2').val();
      const financeGoal = $('input[name="financeGoal"]:checked', '#question0').val();
      const creditScore = $('input[name="creditScore"]:checked', '#question1').val();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameFirst.val().trim(!nameLast.val().trim)) {
        return;
      }
      // Calling the upsertUser function and passing in the value of the name input
      upsertUser({
        fname: nameFirst.val().trim(),
        lname: nameLast.val().trim(),
       retirement: IRA401, 
       currentDebt: currentDebt,
       financeGoal: financeGoal,
       creditScore: creditScore,
        
      });
    }
  

    // A function for creating an user. Calls getUser upon completion
    function upsertUser(userData) {
      $.post("/api/user", userData).then((user)=>{
        console.log(user)
        window.location.replace("results.html?userid="+user.id)
      });
    }
})
    
  
  
