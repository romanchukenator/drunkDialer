$(".new-entry-btn").on("click", function(){
  var submissionArray = $("#new-entry-form");

  $('#new-entry-form input').each(function() {
    var $this = $(this);
    var value = $this.val();
    
    submissionArray.push(value);
    console.log(submissionArray);
  });

  entryCreator(submissionArray);
});

function entryCreator(submissionArray) {   
  var data = { 
    first_name: submissionArray[1], 
    last_name: submissionArray[2],
    city: submissionArray[5],
    state: submissionArray[6],
    postal_code: submissionArray[7],
    email_address: submissionArray[3],
    phone_number: submissionArray[4],
    date_of_birth: "1982-12-11",
    image_url: "https://farm4.staticflickr.com/3706/9374579029_dbaf1cea6d.jpg"
  };
  
  $.ajax({
    url: "index-card.handlebars",
    type: "GET",
    cache: true,
    success:function (source2) {
      var template = Handlebars.compile(source2); 
      $("#contact-list").append(template(data));
    },
    error: function (err) {
      console.log(err);
      alert("ERROR grabbing the template, foo'.")
    }
  });

  $("#contact-list").append(template(data)); 
};

$("#contact-list").on("mouseenter", ".index-card", function() {
  $(this).transition({ scale: 1.05, rotate: '2deg'}, 300, "out");
});

$("#contact-list").on("mouseleave", ".index-card", function() {
  $(this).transition({ scale: 1, rotate: '0deg'}, 220, "out");
});


// $.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=998875@N22&lang=en-us&format=json&jsoncallback=?", displayImages);

// Instagram API Key: 9895fb67e43b4f35aa0d62b0e67f2031
// Instagram API Secret: 34c8bee57f9f406985e3da596939fdf3

// Flickr API Key: 324142b7e8ad6a7d8c49f512baff1df8
// Flickr Secret: 5d7d6297658ab76d

// &callback=?

var instagram_url = "https://api.instagram.com/v1/media/popular?client_id=9895fb67e43b4f35aa0d62b0e67f2031&callback=?"


// var flickr_url = "http://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&gallery_id=72157622280002143&api_key=324142b7e8ad6a7d8c49f512baff1df8&format=json&jsoncallback=?"


$.ajax({
  // url: flickr_url, 
  // url: instagram_url,
  url: "https://api.instagram.com/v1/media/popular?client_id=9895fb67e43b4f35aa0d62b0e67f2031&callback=mycallback",
  // type: "GET",
  // format: "json",
  // jsonp: "callback=?",
  // cache: true,
  datatype: "jsonp",
  success: function (data) {
    alert("Everything went according to plan");
    console.log(data);
  },
  error: function () {
    alert("Something went wrong, buddy.");
  }
});

mycallback = function(data){
  alert(data);
};


// http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=your_api_key&user_id=user_id_x

// http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=your_api_key&user_id=user_id_x&format=json

// http://api.flickr.com/services/rest/?method=ourmethod&api_key=apikey&api_sig=hashedvalue










