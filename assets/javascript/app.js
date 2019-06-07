

// User Object for data collected from user in initial form
var userData = {
    userName: "",
    email: "",
    postalCode: 0,
    interest: "",
}
console.log(userData)

var pixArrIndex = 0

// button click at end of form
$("#TBDforButton").on("click", collectUserData)

// function to collect the data that is added by the user and feeds into the object
function collectUserData() {
    event.preventDefault()
    userData.userName = $("#userName-input").val().trim()
    userData.email = $("#email-input").val().trim()
    userData.postalCode = $("#postalCode-input").val().trim()
    userData.interest = $("#interest-input").val().trim()
    console.log(userData)
    // getDataPixabay(userData)
}



// var newImagesArr = [];

// // $("#TBDforButton").on("click", getDataPixabay)

// $("#loadMorePix").on("click", displayPixabay)

// function displayPixabay(arr) {
//     // event.preventDefault()

//     var numOfImages = 4
//     for (var i = 0; i < numOfImages; i++) {
//         var pixabayDiv = $("<div>")
//         var image = hits[i].webformatURL;

//         var disaplyImage = $("<img>");
//         disaplyImage.attr("src", image)
//         pixabayDiv.append(disaplyImage)
//         $("#TBDforWhere").append(pixabayDiv);
//     }
//     arr.splice(0, 4);
//     newImagesArr = arr;
//     console.log(newImagesArr);
// }
    
// var interest = userData.interest; // do we need to concatenate this if multiple words?
// var APIImages = "12697501-1309c320d0a4f2a4386273ea4";
// var queryURLImages = "https://pixabay.com/api/?key=" + APIImages + "&q=" + interest + "&image_type=photo" + "&editors_choice=true" + "&page=1";
    
// function getDataPixabay() {
//     event.preventDefault()
//     $.ajax({
//         url: queryURLImages,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         var newImagesArr = response.hits
//         displayPixabay(newImagesArr);
//     })
// }
