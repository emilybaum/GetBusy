

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

        var disaplyImage = $("<img class='card-image-top eb-card-pixabay'>");
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

// eventBrite API
    // clear out container div and append button
    function resetPage() {
    $("form").text("")
    $("#TBDforWhere").text("")
    $("#showMoreImage").text("");
    $("#TBDforWhere").append("<div id='events'></div>")
    $("#TBDforWhere").append("<button id='show-more-event'>Show More</button>")
    getData();
    }

    // set variables for ajax query
    var privateAPIKey = "Q2VRCE5ZUCJTZ5IFWVHG";
    var searchTerm = userData.interest;
    var sort = "date"
    var address = "10011"
    var distance = 5 + "mi"
    var eventBriteURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + searchTerm + "&sort_by=" + sort + "&location.address="+ address + "&location.within=" + distance + "&token=Q2VRCE5ZUCJTZ5IFWVHG"
    
    // function parse JSON object and append to page
    var newEventArr = [];
    function displayEvents(arr) {
        eventContainer = $("#events");
            eventRow = $("<div class='row'>");

        for (i = 0; i < 4; i++) {
            eventCol = $("<div class='col-sm'>");
            eventCard = $("<div style='width: 18rem;'>");
                eventCard.addClass("card");
                eventCard.append("<img class='card-img-top' src=" + arr[i].logo.original.url + " style='width:200px'</img>");
            eventCardBody = $("<div>")
                eventCardBody.addClass("card-body")
                eventCardBody.append("<h5>" + arr[i].name.html + "</h5>");
                eventCardBody.append("<p>" + arr[i].summary + "</p>");
            eventCard.append(eventCardBody);
            eventCol.append(eventCard)
            eventRow.append(eventCol);
        };
        eventContainer.append(eventRow);
        arr.splice(0,4);
        
        if (arr.length < 4) {
            var btn = document.getElementById("showMoreImages"); 
            btn.disabled = true;
        }

        newEventArr = arr;
        console.log(newEventArr);
    };

    // ajax function
    function getData(){
        $.ajax({
            url: eventBriteURL,
            method: "GET",
        }).then(function(response){
            console.log(response);
            newEventArr = response.events;
            console.log(newEventArr);
            displayEvents(newEventArr);
        });
    }

    // click handler for show-more-event button to load more event
    $("#show-more-event").on("click", function(event) {
        event.preventDefault();
        displayEvents(newEventArr);
    });
    
