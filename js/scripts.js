//busines logic//
 //Constructor with Contact Object with first and last as it's arguments.
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

 //fullName() is a prototype method meant to be called on a Contact object to return the full name of a Contact in Address Book.
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//user-interface logic//
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

// Create a new Contact object by calling the Contact constructor and passing it the inputted data. The variable newContact now refers to that newly created contact object, which knows its own firstName and lastName.
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>"); //to get output in the form of list//
    $(".contact").last().click(function() { //last() shows the most recent added contacts//
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val(""); // make inputtedFirstName textbox value empty//
    $("input#new-last-name").val(""); // make inputtedLastName textbox value empty//
  });
});
