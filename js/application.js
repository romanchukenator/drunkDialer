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
  var $spaceDiv = $("<div class='large-2 medium-2 columns'></div>");
  var $column8 = $("<div class='large-8 medium-8 columns'></div>");
  var $index_card = $("<div class='index-card'></div>");
  var $heading = $("<div class='row headings red-stripe'>");
  var $column1 = $("<div class='large-1 medium-1 columns text-center'>");
  var $column2   = $("<div class='large-1 medium-1 columns text-center'>");
  var $column3 = $("<div class='large-2 medium-2 columns text-center'>");
  var $row = $("<div class='row name'>");

  $("#contact-list").append($index_card);
  $index_card.append($heading);

  $heading.append($column8);
  $column8.append("<p>Name</p>");

  $heading.append($column1);
  $column1.append("<p>Reg No.</p>");  
  
  $heading.append($column2);
  $column2.append("<p>Cor No.</p>");

  $heading.append($column3);
  $column3.append("<p>Bk No.</p>");

  $index_card.append($row);
  $row.append($column8);
  $column8.append("<p>Romanchuk, James</p>")


  // $row.append($spaceDiv);
  
  // $row.append($content);
  // $content.append("<p>"+submissionArray[2]+", "+submissionArray[1]+"</p>");
  // $content.append("<p>"+submissionArray[3]+"</p>");

  // $row.append($spaceDiv);
};

$("#contact-list").on("mouseenter", ".index-card", function() {
  $(this).transition({ scale: 1.05, rotate: '2deg'}, 300, "out");
});

$("#contact-list").on("mouseleave", ".index-card", function() {
  $(this).transition({ scale: 1, rotate: '0deg'}, 120, "out");
});




