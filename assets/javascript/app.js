// javascript

var userInterest = "flowers"

// getImagesPixabay(userInterest)

$("#TBDforButton").on("click", function() {
    var interest = $(this).attr("interest"); // do we need to concatenate this if multiple words?
    var API = "12697501-1309c320d0a4f2a4386273ea4";
    var queryURL = "https://pixabay.com/api/?key=" + API + "&q=" + interest + "&image_type=photo" + "&editors_choice=true" + "&page=1";
    // possibilities of other restrictions to add
    // editors_choice
    // orientation (if we need horizontal vs vertical)
    // min_width

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var numOfImages = 4;

        for (var i = 0; i < numOfImages; i++) {
            var pixabayDiv = $("<div>")
            var image = response.hits[i].webformatURL;
            console.log(image)
            var disaplyImage = $("<img>");
            disaplyImage.attr("src", image)
            pixabayDiv.append(disaplyImage)
            $("#TBDforWhere").append(pixabayDiv);
        }
        
    })


})