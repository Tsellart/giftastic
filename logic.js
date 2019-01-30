var topics = ["Venture Bros","Eating Beans", "Always Sunny", "Memes"]

$(document).ready(function() {
  for (var i = 0; i < topics.length; i++) {
      $("#topicButtons").append("<button type='button' data-person=' " + topics[i]  + "'class='btn chicken btn-primary' value=' " + topics[i] + "'> " + topics[i] + " </button>");
  }
});

$("#gifFinder").on("click", function () {
  event.preventDefault();
  var newButton = $("#searcher").val().trim();
  $("#topicButtons").append("<button type='button' data-person='" + newButton  + "'class='btn chicken btn-primary' value=' " + newButton + "'> " + newButton + " </button>");
})


$(document).on("click", ".chicken", function() {

  var thing = $(this).attr('data-person');
  console.log("this is the " + thing);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing +"&api_key=KgZq5GJk3R93RxTjxZQrUMCzl19yCa0U";

  $.ajax({
    url: queryURL,
    method: "GET"

  })

    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var thingImage = $("<img class = 'movImage'>");

         thingImage.attr("src", results[i].images.fixed_height.url);

         thingImage.attr("data-still", results[i].images.fixed_height_still.url);

         thingImage.attr("data-animate", results[i].images.fixed_height.url);

         thingImage.attr("data-state", "still");
         
         gifDiv.append(p);
         gifDiv.append(thingImage);

         $("#gifs-appear-here").prepend(gifDiv);
        }
        $('.movImage').on('click', function() {
          var state = $(this).attr('data-state');
          if (state == 'still') {
              $(this).attr('src', $(this).attr("data-animate"));
              $(this).attr('data-state', 'animate');
          } else {
              $(this).attr('src', $(this).attr("data-still"));
              $(this).attr('data-state', 'still');
          }
        })
        
      }
    })
    
});





