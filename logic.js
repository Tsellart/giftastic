$(document).ready(function() {
  var topics = ["Venture Bros","Eating Beans", "Always Sunny", "Memes"]
  console.log(topics);
  for (var i = 0; i < topics.length; i++){
    $("#topicButtons").html("<button class='topicCall'>" + topics[i] + "</button>")

  }
  $("#searcher").on("click", function(event){
    event.preventDefault();
    $("#topicButtons").append("<button class = 'createdGif'>")











    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + thing +"&api_key=KgZq5GJk3R93RxTjxZQrUMCzl19yCa0U";

    $.ajax({
      url: queryUrl,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var thingImage = $("<img>");
            thingImage.attr("src", results[i].images.fixed_height.url);

          }
        }
      })
  })
});
