$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var nameFirst = $("#fname");
    var nameLast = $("#lname");
  
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#form1", handleForm1Submit);
    $(document).on("click", ".delete-author", handleDeleteButtonPress);
  
    // Getting the initial list of User
    getUser();
  
    // A function to handle what happens when the form is submitted to create a new User
    function handleForm1Submit(event) {
      event.preventDefault(); 
      const IRA401 = $('input[name="IRA401"]:checked', '#form1').val();
      const currentDebt = $('input[name="currentDebt"]:checked', '#question2').val();
      const financeGoal = $('input[name="financeGoal"]:checked', '#question0').val();
      const creditScore = $('input[name="creditScore"]:checked', '#question1').val();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameFirst.val().trim()) {
        return;
      }
      // Calling the upsertUser function and passing in the value of the name input
      upsertUser({
        name: nameFirst.val().trim(),
       retirement: IRA401, 
       debt: currentDebt,
       goal: financeGoal,
       score: creditScore,
        //last name too
      });
    }
  

    // A function for creating an user. Calls getUser upon completion
    function upsertUser(userData) {
      $.post("/api/user", userData)
        .then(getUser);
    }
  /*
    // Function for creating a new list row for authors
    function createAuthorRow(authorData) {
      var newTr = $("<tr>");
      newTr.data("author", authorData);
      newTr.append("<td>" + authorData.name + "</td>");
      if (authorData.Posts) {
        newTr.append("<td> " + authorData.Posts.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }
      newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
      newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getAuthors() {
      $.get("/api/authors", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createAuthorRow(data[i]));
        }
        renderAuthorList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderAuthorList(rows) {
      authorList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        authorList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no authors
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an Author before you can create a Post.");
      authorContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("author");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/authors/" + id
      })
        .then(getAuthors);
    } */

    
  });
  