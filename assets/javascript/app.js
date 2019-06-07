

// User Object for data collected from user in initial form
var userData = {
    userName: "",
    email: "",
    postalCode: 0,
    interest: "",
}
console.log(userData)

var newImagesArr = [];

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
    getDataPixabay(userData)
}


// runs the ajax request to get images from Pixabay
function getDataPixabay() {
    var interest = userData.interest; // do we need to concatenate this if multiple words?
    var APIImages = "12697501-1309c320d0a4f2a4386273ea4";
    var queryURLImages = "https://pixabay.com/api/?key=" + APIImages + "&q=" + interest + "&image_type=photo" + "&editors_choice=true" + "&page=1";

    $.ajax({
        url: queryURLImages,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var newImagesArr = response.hits
        console.log(newImagesArr.length)
        displayPixabay(newImagesArr);
    })
}

// click on the Load More button
$("#showMoreImages").on("click", function (event) {
    displayPixabay(newImagesArr);
})

// 
function displayPixabay(arr) {
    var numOfImages = 4
    imageRow = $("<div class='row'>")

    for (var i = 0; i < numOfImages; i++) {
        var imageCol = $("<div class='col-sm'>")
        var pixabayDiv = $("<div class='card'>")
        var image = arr[i].webformatURL;

        var disaplyImage = $("<img class='card-image-top'>");
        disaplyImage.attr("src", image)
        pixabayDiv.append(disaplyImage)
        imageCol.append(pixabayDiv)
        imageRow.append(imageCol)
        $("#TBDforWhere").append(imageRow);  
    }
    arr.splice(0, 4);
    
    if (arr.length < 4) {
        var btn = document.getElementById("showMoreImages"); 
        btn.disabled = true;
    }
    newImagesArr = arr;
}
    
