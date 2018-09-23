$(document).ready(function() {
  function  buildQueryURL() {
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=";
    var queryParams = { "api-key" : "KgZq5GJk3R93RxTjxZQrUMCzl19yCa0U" };
    queryParams.q = $("#gifFinder").val().trim();

    $.ajax({
      url: queryUrl,
      method: "GET"
    })
    .then(function(response) {
      var results = response.data;
      for (var i = 0; i< results.length; i++){
        if(results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div class='item'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    })
  }
})