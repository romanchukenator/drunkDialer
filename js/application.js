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

// http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=your_api_key&user_id=user_id_x

// http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=your_api_key&user_id=user_id_x&format=json

// http://api.flickr.com/services/rest/?method=ourmethod&api_key=apikey&api_sig=hashedvalue








// Instagram API Key: 9895fb67e43b4f35aa0d62b0e67f2031
// Instagram API Secret: 34c8bee57f9f406985e3da596939fdf3

// Flickr API Key: 324142b7e8ad6a7d8c49f512baff1df8
// Flickr Secret: 5d7d6297658ab76d

// Twitter API Key: anFG1PQkqzOzen9NloKVCJrun

// 500px API Key: 2C58OcvQJOH9Y4gLVxF3vC7JH3rmwoWBP4jNDhd5

var instagram_url = "https://api.instagram.com/v1/media/popular?client_id=9895fb67e43b4f35aa0d62b0e67f2031&callback=?"

var instagram_url2 = "https://api.instagram.com/v1/tags/search?q=snowy&client_id=9895fb67e43b4f35aa0d62b0e67f2031&callback=?"

var flickr_url = "http://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&gallery_id=72157622280002143&api_key=324142b7e8ad6a7d8c49f512baff1df8&format=json&jsoncallback=?"

var twitter_url = "https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4"

var fiveHundredPX = "https://api.500px.com/v1/photos?feature=editors&consumer_key=2C58OcvQJOH9Y4gLVxF3vC7JH3rmwoWBP4jNDhd5&callback=?"



$.ajax({
  url: instagram_url,
  dataType: "jsonp",
  success: function (data) {
    // console.log("This is the junk from the Instagram ajax request: ", data);
    instagrammer_nazi(data.data);
  },
  error: function (err) {
    // console.log("This is the ERROR from the bad Instagram ajax request: ", err);
    alert("Something went wrong, buddy.");
  }
});

$.ajax({
  url: twitter_url,
  dataType: "jsonp",
  success: function (data) {
    console.log("This is the junk from the Twitter ajax request: ", data);
  },
  error: function (err) {
    console.log("This is the ERROR from the bad Twitter ajax request: ", err);
    alert("Something went wrong, buddy.");
  }
});





function instagrammer_nazi(data){
  var instagramArray = []
  var randomImages = "http://who-is-awesome.com/who-is-awesome.jpg"

  for(i=0; i < data.length; i++){
    instagramArray.push(data[i].images.standard_resolution.url);
    // $(".random-images").append("<img src='"+data[i].images.standard_resolution.url+"' />")
  }

  $("body").backstretch(instagramArray, {duration: 3000, fade: 750});
};

function twitter_twisp(data){
  var twitterArray = []

};



