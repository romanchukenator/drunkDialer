$(".new-entry-btn").on("click", function(){
  var submissionArray = $("#new-entry-form");

  $('#new-entry-form input').each(function() {
    var $this = $(this);
    var value = $this.val();
    
    submissionArray.push(value);
  });

  console.log(submissionArray);
  entryCreator(submissionArray);
});

function entryCreator(submissionArray) {
  var $row = $("<div class='row'></div>");
  var $spaceDiv = $("<div class='large-2 medium-2 columns'></div>");
  var $content = $("<div class='large-8 medium-8 columns'></div>");

  $("#contact-list").append($row);
  
  $row.append($spaceDiv);
  
  $row.append($content);
  $content.append("<p>"+submissionArray[2]+", "+submissionArray[1]+"</p>");
  $content.append("<p>"+submissionArray[3]+"</p>");

  $row.append($spaceDiv); 

  /*
  name
  phone number
  age
  reg no.
  correc no.
  case book no.


  */
};