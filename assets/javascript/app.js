

// User Object for data collected from user in initial form
var userData = {
    userName: "",
    email: "",
    postalCode: 0,
    interest: "",
}
console.log(userData)

// has user picked their options?
var pixabaySelected = false;
var etsySelected = false;
var eventbriteSelected = false;

// what option the user picked
var pixabayPicked = {
    src: "",
};

var etsyPicked = {
    dataImg: "",
    dataUrl: "",
    dataPrice: "",
    dataTitle: "",
};


var eventbritePicked = {
    dataImg: "",
    dataName: "",
    dataSummary: "",
    dataUrl: "",
};


$(".pixabayToPick").on("click", function(){
  pixabaySelected = true;
  alert("Selection was made")
});

// button click at end of form
$(document).on("click", "#TBDforButton", collectUserData)

// function to collect the data that is added by the user and feeds into the object
function collectUserData() {
    event.preventDefault()
    userData.userName = $("#userName-input").val().trim()
    userData.email = $("#email-input").val().trim()
    userData.postalCode = $("#postalCode-input").val().trim()
    userData.interest = $("#interest-input").val().trim()
    console.log(userData)
    getDataPixabay(userData)
    $("#showMorePixabay").removeClass("d-none")
    $("#user-input").addClass("d-none")
}

// START PIXABAY ==================================================================

// Array for Pixabay
var newImagesArr = [];

// runs the ajax request to get images from PIXABAY
function getDataPixabay() {
    var interest = userData.interest; // do we need to concatenate this if multiple words?
    var APIImages = "12697501-1309c320d0a4f2a4386273ea4";
    var queryURLImages = "https://pixabay.com/api/?key=" + APIImages + "&q=" + interest + "&image_type=photo" + "&page=1"; 

    $.ajax({
        url: queryURLImages,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        var newImagesArr = response.hits
        // console.log(newImagesArr.length)
        displayPixabay(newImagesArr);
    })
}

// click on the Load More button
$("#showMorePixabay").on("click", function (event) {
    displayPixabay(newImagesArr);
})

// 
function displayPixabay(arr) {
    $("#showMorePixabay").removeClass("d-none")
    $("#make-selection-Pixabay").removeClass("d-none")
    var numOfImages = 4
    imageRow = $("<div class='row'>")

    for (var i = 0; i < numOfImages; i++) {
        var imageCol = $("<div class='col-sm'>")
        var pixabayDiv = $("<div class='card pixabayToPick'>")
        var image = arr[i].webformatURL;

        var displayImage = $("<img class='card-image-top img-card-pixabay'>");
        displayImage.attr("src", image)
            displayImage.attr("data-img", image);
        pixabayDiv.append(displayImage)
        imageCol.append(pixabayDiv)
        imageRow.append(imageCol)
        $("#TBDforWhere").append(imageRow);  
    }
    arr.splice(0, 4);
    
    if (arr.length < 4) {
        var btn = document.getElementById("showMorePixabay"); 
        btn.disabled = true;
    }
    newImagesArr = arr;
}

// eventbrite API
// clear out container div and append button
function resetPage() {
    $("form").empty();
    $("#TBDforWhere").empty()
    $("#showMorePixabay").addClass("d-none")
    $("#show-more-event").addClass("d-none")
    $("#showMoreEtsy").addClass("d-none")
    $("#make-selection-Pixabay").addClass("d-none")
    // $("#make-selection-Etsy").addClass("d-none")
    // $("#make-selection-Eventbrite").addClass("d-none")
    // $("#TBDforWhere").append("<div id='events'></div>");
    // $("#TBDforWhere").append("<button id='show-more-event'>Show More</button>");
}
// END PIXABAY ==================================================================


 
// START EVENTBRITE ==================================================================

// user clicks Next to trigger Eventbrite
$("#nextPageToEventbrite").on("click", getDataEventbrite)

// set variables for EVENTBRITE ajax query

// function parse JSON object and append to page
var newEventArr = [];
function displayEvents(arr) {
    $("#make-selection-Eventbrite").removeClass("d-none")
    // display the show more events button
    $("#show-more-event").removeClass("d-none")
    eventContainer = $("#TBDforWhere");
        eventRow = $("<div class='row'>");

    for (i = 0; i < 4; i++) {
        eventCol = $("<div class='col-sm'>");
        eventCard = $("<div eventbritePicked>");
            eventCard.addClass("card");
            eventCard.attr("data-img", arr[i].logo.original.url);
            eventCard.attr("data-name", arr[i].name.html);
            eventCard.attr("data-summary", arr[i].summary);
            eventCard.attr("data-url", arr[i].url);
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
        var btn = document.getElementById("showMorePixabay"); 
        btn.disabled = true;
    }

    newEventArr = arr;
    console.log(newEventArr);
};

// ajax function for EVENTBRITE
function getDataEventbrite(){
    var privateAPIKey = "Q2VRCE5ZUCJTZ5IFWVHG";
    var searchTerm = userData.interest;
    var sort = "date"
    var address = "10011"
    var distance = 5 + "mi"
    var eventBriteURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + searchTerm + "&sort_by=" + sort + "&location.address="+ address + "&location.within=" + distance + "&token=Q2VRCE5ZUCJTZ5IFWVHG"

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
// END EVENTBRITE ==================================================================


// START ETSY ==================================================================
// trigger when the next button has been clicked on the previous page
$("#nextPageToEtsy").on("click", getDataEtsy)

// click handler for show-more-event button to load more ETSY
$("#showMoreEtsy").on("click", function (event) {
    displayEtsy(newEtsyArr);
})

// store Etsy array
var newEtsyArr = [];

// put Etsy items on the page
function displayEtsy(arr) {
    // makes the Show More button visable
    $("#showMorePixabay").addClass("d-none")
    $("#showMoreEtsy").removeClass("d-none")

    // creating the holder for Etsy content
    imageContainer = $("#TBDforWhere");
    imageRow = $("<div class='row'>");
    for (i = 0; i < 4; i++) {
        imageCol = $("<div class='col-sm'>");
        imageCard = $("<div class='image-card-etsy'>")
            imageCard.addClass("card etsyPicked");
            imageCard.attr("data-img", JSON.stringify(arr[i].Images[0].url_170x135));
            imageCard.attr("data-url", arr[i].url);
            imageCard.attr("data-price", arr[i].price);
            imageCard.attr("data-title", arr[i].title);
            imageCard.append("<img src=" + JSON.stringify(arr[i].Images[0].url_170x135) + ">");
        imageCardBody = $("<div class='body-card-etsy'>");
            imageCardBody.addClass("card-body");
                imageCardLink = $("<a>");
                    imageCardLink.attr("href", arr[i].url);
                        imageCardTitle = $("<h5 class='title-card-etsy'>" + arr[i].title + "</h5>")
                    imageCardLink.append(imageCardTitle);
            imageCardBody.append(imageCardLink);
            imageCardBody.append("<h6 class='price-card-etsy'>" + arr[i].price + "</h6>");
        imageCard.append(imageCardBody);
        imageCol.append(imageCard); 
        imageRow.append(imageCol);
    }
    imageContainer.append(imageRow);
    arr.splice(0,4);
    newEtsyArr = arr;
    // console.log(newEtsyArr);
}

// run API for Etsy data
function getDataEtsy() {
    // set variables for ETSY ajax query
    var api_key_Etsy = "7u4gcw7pr0m2knv9opn4f5h6";
    var interestEtsy = userData.interest

    var etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" + interestEtsy + "&limit=20&includes=Images:1&api_key=" + api_key_Etsy;


    $.ajax({
        url: etsyURL,
        dataType: 'jsonp',
        success: function(data) {
            console.log(etsyURL)
            console.log(data)
            newEtsyArr = data.results
            console.log(newEtsyArr);
            displayEtsy(newEtsyArr);
        }
    });

    return false;
};
// END ETSY ==================================================================

    
