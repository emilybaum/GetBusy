

// User Object for data collected from user in initial form
var userData = {
    userName: "",
    email: "",
    postalCode: 0,
    interest: "",
}

// button clikc at end of form
$("#TBDforButton").on("click", collectUserData)

// function to collect the data that is added by the user and feeds into the object
function collectUserData() {
    userData.userName = $("#userName-input").val().trim()
    userData.email = $("#email-input").val().trim()
    userData.postalCode = $("#postalCode-input").val().trim()
    userData.interest = $("#interest-input").val().trim()
    console.log(userData)
}


// capture interest from form submission and feed into global variables
    
$("#TBDforButton").on("click", getImagesPixabay)

function getImagesPixabay(userData) {
    event.preventDefault()
    var interest = userData.interest; // do we need to concatenate this if multiple words?
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
        var numOfImages = 20;
        $("#TBDforWhere").empty()

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


}