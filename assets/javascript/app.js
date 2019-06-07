

// User Object for data collected from user in initial form
var userData = {
    userName: "",
    email: "",
    postalCode: 0,
    interest: "",
}
console.log(userData)

// var pixArrIndex = 0

// button clikc at end of form
$("#TBDforButton").on("click", collectUserData)

// function to collect the data that is added by the user and feeds into the object
function collectUserData() {
    userData.userName = $("#userName-input").val().trim()
    userData.email = $("#email-input").val().trim()
    userData.postalCode = $("#postalCode-input").val().trim()
    userData.interest = $("#interest-input").val().trim()
    console.log(userData)
    getImagesPixabay(userData)
}


    
// $("#TBDforButton").on("click", getImagesPixabay)

function getImagesPixabay(userData) {
    event.preventDefault()
    var interest = userData.interest; // do we need to concatenate this if multiple words?
    console.log("this is the user's Interest " + userData.interest)
    var API = "12697501-1309c320d0a4f2a4386273ea4";
    var queryURL = "https://pixabay.com/api/?key=" + API + "&q=" + interest + "&image_type=photo" + "&editors_choice=true" + "&page=1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var numOfImages = 4

        for (var i = 0; i < numOfImages; i++) {
            var pixabayDiv = $("<div>")
            var image = response.hits[i].webformatURL;
            console.log("this is the image variable " + image)

            var disaplyImage = $("<img>");
            disaplyImage.attr("src", image)
            pixabayDiv.append(disaplyImage)
            $("#TBDforWhere").append(pixabayDiv);
        }
        // pixArrIndex += 4;
    })
}

// $("#loadMorePix").on("click", loadMorePixabay)

// function loadMorePixabay(userData) {
//     event.preventDefault()
//     var interest = userData.interest; // do we need to concatenate this if multiple words?
//     var API = "12697501-1309c320d0a4f2a4386273ea4";
//     var queryURL = "https://pixabay.com/api/?key=" + API + "&q=" + interest + "&image_type=photo" + "&editors_choice=true" + "&page=1";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         // $("#TBDforWhere").empty()
//         console.log(response);

//         var numOfImages = 4

//         for (var i = pixArrIndex; i < numOfImages; i++) {
//             var pixabayDiv = $("<div>")
//             var image = response.hits[i].webformatURL;
//             console.log(image)

//             var disaplyImage = $("<img>");
//             disaplyImage.attr("src", image)
//             pixabayDiv.append(disaplyImage)
//             $("#TBDforWhere").append(pixabayDiv);
//         }
//         pixArrIndex + 4;
//     })
// }
