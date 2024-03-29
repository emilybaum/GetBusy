// shows the text in the sub title on html
new TypeIt('#getbusy-subtext', {
    speed: 50,
    startDelay: 900
  })
  .type('Stop scrolling in search of your Boo')
  .pause(300)
  .delete(8)
  .pause(250)
  .type('a Soulmate')
  .pause(750)
  .options({speed: 100, deleteSpeed: 75})
  .delete(10)
  .pause(750)
  .type('The One')
  .pause(600)
  .options({speed: 100, deleteSpeed: 75})
  // .delete(7)
  .pause(750)
  .type('... and give yourself what you really want')
  .go();
  
  
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
  var inviteObject = {
      date: "",
      pixabay: "",
      etsy: "",
      eventbrite: "",
  }
  
  var pixabayPicked = {
      dataImg: "",
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
  
  // displays a border on the most recent user selection
  function addSelectionBorder(clicked) {
     clicked.addClass("selection-border")
  }
  
  // USER SELECTION FOR PIXABAY
  $(document).on("click", ".pixabayPicked", function() {
      pixabaySelected = true;
  
      dataImg = $(this).attr("data-img")
          pixabayPicked.dataImg = dataImg
  
      $(".pixabayPicked").removeClass("selection-border")
      
      // trigger the border to be added for last selection
      addSelectionBorder($(this))
  });
  
  // USER SELECTION for Etsy
  $(document).on("click", ".etsyPicked", function() {
      etsySelected = true;
  
      dataImg = $(this).attr("data-img");
          etsyPicked.dataImg = dataImg
      dataUrl = $(this).attr("data-url");
          etsyPicked.dataUrl = dataUrl
      dataPrice = $(this).attr("data-price");
          etsyPicked.dataPrice = dataPrice
      dataTitle = $(this).attr("data-title");
          etsyPicked.dataTitle = dataTitle
      
      $(".etsyPicked").removeClass("selection-border")
      
      // trigger the border to be added for last selection
      addSelectionBorder($(this))
  })
  
  
  // USER SELECTION for Eventbrite
  $(document).on("click", ".eventbritePicked", function() {
      eventbriteSelected = true;
  
      dataImg = $(this).attr("data-img");
          eventbritePicked.dataImg = dataImg
      dataName = $(this).attr("data-name");
          eventbritePicked.dataName = dataName
      dataSummary = $(this).attr("data-summary");
          eventbritePicked.dataSummary = dataSummary
      dataUrl = $(this).attr("data-url");
          eventbritePicked.dataUrl = dataUrl
  
      $(".eventbritePicked").removeClass("selection-border")
      
      // trigger the border to be added for last selection
      addSelectionBorder($(this))
  })
  
  
  
  // Submit button click at end of form
  $(document).on("click", "#TBDforButton", validateForm)
  
  // validate that the user is entering contnet and that there are no blank fields
  function validateForm() {
      
      var userNameField = document.forms["interestForm"]["userNameInput"].value;
      var emailField = document.forms["interestForm"]["emailInput"].value.indexOf("@");
      var postalCodeField = document.forms["interestForm"]["postalCodeInput"].value;
      var interestField = document.forms["interestForm"]["interestInput"].value;
  
      if (userNameField === "") {
          $("#invalid-input-name").removeAttr("hidden")
          return false;
      }
      if (userNameField !== "") {
          $("#invalid-input-name").attr("hidden")
      }
  
      if (emailField === -1) {
          $("#invalid-input-email").removeAttr("hidden")
          return false;
      }
  
      if (postalCodeField.length !== 5) {
          $("#invalid-input-postalCode").removeAttr("hidden")
          return false;
      }
      if (postalCodeField.length === 5) {
          $("#invalid-input-postalCode").removeAttr("hidden")
      }
  
      if (interestField === "") {
          $("#invalid-input-interest").removeAttr("hidden")
          return false;
      }
      
      else {
          collectUserData()
      }
  }
  
  
  // function to collect the data that is added by the user and feeds into the object
  function collectUserData() {
      event.preventDefault()
      userData.userName = $("#userName-input").val().trim()
      userData.email = $("#email-input").val().trim()
      userData.postalCode = $("#postalCode-input").val().trim()
      userData.interest = $("#interest-input").val().trim()
      console.log(userData)
      getDataPixabay(userData)
      $("#big-header").addClass("d-none")
      $("#small-header").removeClass("d-none")
      $("#showMorePixabay").removeClass("d-none")
      $("#user-input").addClass("d-none")
  }
  
  
  // START PIXABAY ==================================================================
  
  // Array for Pixabay
  var newImagesArr = [];
  
  // runs the ajax request to get images from PIXABAY
  function getDataPixabay() {
      // display title for Pixabay
      $("#make-selection-Pixabay").removeClass("d-none")
  
      // display next button -- Etsy
      $("#nextPageToEtsy").removeClass("d-none")
  
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
  
  // show Pixabay images on the screen
  function displayPixabay(arr) {
      // display show more button for Pixabay
      $("#showMorePixabay").removeClass("d-none")
  
      var numOfImages = 4
      imageRow = $("<div class='row'>")
  
      for (var i = 0; i < numOfImages; i++) {
          var imageCol = $("<div class='col-sm mb-3'>")
          var pixabayDiv = $("<div class='card pixabayPicked'>")
          var image = arr[i].webformatURL;
  
          // adding the image data to the card so that is can be accessiable in the object for each user selection
          pixabayDiv.attr("data-img", image);
  
          var displayImage = $("<img class='card-image-top img-card-pixabay'>");
          displayImage.attr("src", image)
          pixabayDiv.append(displayImage)
          imageCol.append(pixabayDiv)
          imageRow.append(imageCol)
          $("#TBDforWhere").append(imageRow);  
      }
      arr.splice(0, 4);
      
      if (arr.length < 1) {
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
      $("#showMoreEventbrite").addClass("d-none")
      $("#showMoreEtsy").addClass("d-none")
      $("#make-selection-Pixabay").addClass("d-none")
      $("#make-selection-Etsy").addClass("d-none")
      $("#make-selection-Eventbrite").addClass("d-none")
      // $("#TBDforWhere").append("<div id='events'></div>");
      // $("#TBDforWhere").append("<button id='showMoreEventbrite'>Show More</button>");
  }
  // END PIXABAY ==================================================================
  
  
  
  
   
  // START EVENTBRITE ==================================================================
  // user clicks Next to trigger Eventbrite
  // validation for picking interest and click handler
  $(document).on("click", "#nextPageToEventbrite", validateEtsy)
  
  function validateEtsy() {
      if (etsySelected === false) {
          $(".invalid-selection").text("You must make a selection first");
          return false;
      }
      else {
          $(".invalid-selection").empty();
          getDataEventbrite();
      }
  }
  
  $("#showMoreEventbrite").on("click", function (event) {
      displayEvents(newEventArr);
  })
  
  function getNiceDate(string) {
      var year = string.slice(0, 4);
      var month = string.slice(5, 7);
      var day = string.slice(8, 10);
      var timeHour = string.slice(11, 13)
      var timeMin = string.slice(14, 16);
      var time;
      if (timeHour > 12) {
          time = (timeHour - 12) + ":" + timeMin + "pm";
      } else {
          time = timeHour + ":" + timeMin + "am";
      };
      return (month + "/" + day + "/" + year + " at " + time);
  }
  
  // function parse JSON object and append to page
  var newEventArr = [];
  function displayEvents(arr) {
  
      // display the show more events button
      $("#showMoreEventbrite").removeClass("d-none")
      $("#showMoreEtsy").addClass("d-none")
  
      // showing the next page button and removing the currnet page button
      $("#nextPageToInvite").removeClass("d-none");
      $("#nextPageToEventbrite").addClass("d-none");
      
  
      eventContainer = $("#TBDforWhere");
          eventRow = $("<div class='row'>");
      if (arr.length > 3) {
        for (i = 0; i < 4; i++) {
            eventCol = $("<div class='col-md mb-3'>");
            eventCard = $("<div>");
                eventCard.addClass("card-img-top eventbritePicked image-card-eventbrite");
                console.log(arr)
                // console.log(arr[i].logo.original.url)
                eventCard.attr("data-img", arr[i].logo.original.url);
                eventCard.attr("data-name", arr[i].name.html);
                eventCard.attr("data-summary", arr[i].summary);
                eventCard.attr("data-url", arr[i].url);
                eventCard.append("<img class ='image-img-eventbrite' src=" + arr[i].logo.original.url + "</img>");
            eventCardBody = $("<div>")
                eventCardBody.addClass("card-body")
                    eventCardLink = $("<a target='_blank'>");
                        eventCardLink.attr("href", arr[i].url);
                            eventCardTitle = $("<h5>" + arr[i].name.html + "</h5>");
                        eventCardLink.append(eventCardTitle);
                    eventCardBody.append(eventCardLink);
                eventCardBody.append("<p>" + arr[i].summary + "</p>");
                eventCardBody.append("<h6 class='date-card-eventbrite'>When: " + getNiceDate(arr[i].start.local));
            eventCard.append(eventCardBody);
            eventCol.append(eventCard)
            eventRow.append(eventCol);
        };
        eventContainer.append(eventRow);
        arr.splice(0,4);

        newEventArr = arr;
        console.log(newEventArr);
      } else if (arr.length < 4 && arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            eventCol = $("<div class='col-md mb-3'>");
            eventCard = $("<div>");
                eventCard.addClass("card-img-top eventbritePicked image-card-eventbrite");
                console.log(arr)
                // console.log(arr[i].logo.original.url)
                eventCard.attr("data-img", arr[i].logo.original.url);
                eventCard.attr("data-name", arr[i].name.html);
                eventCard.attr("data-summary", arr[i].summary);
                eventCard.attr("data-url", arr[i].url);
                eventCard.append("<img class ='image-img-eventbrite' src=" + arr[i].logo.original.url + "</img>");
            eventCardBody = $("<div>")
                eventCardBody.addClass("card-body")
                    eventCardLink = $("<a target='_blank'>");
                        eventCardLink.attr("href", arr[i].url);
                            eventCardTitle = $("<h5>" + arr[i].name.html + "</h5>");
                        eventCardLink.append(eventCardTitle);
                    eventCardBody.append(eventCardLink);
                eventCardBody.append("<p>" + arr[i].summary + "</p>");
                eventCardBody.append("<h6 class='date-card-eventbrite'>When: " + getNiceDate(arr[i].start.local));
            eventCard.append(eventCardBody);
            eventCol.append(eventCard)
            eventRow.append(eventCol);
        };
        eventContainer.append(eventRow);
        arr.splice(0,4);

        newEventArr = arr;
        console.log(newEventArr);
      } else {
        var btn = document.getElementById("showMoreEventbrite"); 
        btn.disabled = true;
      }
  };
  
  function displayMakeEvent () {
    // display the show more events button
    $("#showMoreEventbrite").removeClass("d-none")
    $("#showMoreEtsy").addClass("d-none")

    // showing the next page button and removing the currnet page button
    $("#nextPageToInvite").removeClass("d-none");
    $("#nextPageToEventbrite").addClass("d-none");

    eventContainer = $("#TBDforWhere");
        eventRow = $("<div class='row'>");
    eventCol = $("<div class='col-md mb-3'>");
    eventCard = $("<div>");
        eventCard.addClass("card-img-top eventbritePicked image-card-eventbrite");
        // console.log(arr[i].logo.original.url)
        eventCard.attr("data-img", 'assets/Images/sunset.jpg');
        eventCard.attr("data-name", 'Plan your own event!');
        eventCard.attr("data-summary", 'No events found in your area. Search again, or select this card and plan your own outing!');
        eventCard.attr("data-url", '#');
        eventCard.append("<img class ='image-img-eventbrite' src='assets/Images/sunset.jpg'</img>");
    eventCardBody = $("<div>")
        eventCardBody.addClass("card-body")
            eventCardLink = $("<a target='_blank'>");
                eventCardLink.attr("href", '#');
                    eventCardTitle = $("<h5>" + 'Plan your own event!' + "</h5>");
                eventCardLink.append(eventCardTitle);
            eventCardBody.append(eventCardLink);
        eventCardBody.append("<p>" + 'No events found in your area. Search again, or select this card and plan your own outing!'+ "</p>");
        // eventCardBody.append("<h6 class='date-card-eventbrite'>When: " + getNiceDate(arr[i].start.local));
    eventCard.append(eventCardBody);
    eventCol.append(eventCard)
    eventRow.append(eventCol);
    eventContainer.append(eventRow);
};

  // ajax function for EVENTBRITE
  function getDataEventbrite(){
      // empty the contents of the container
      $("#TBDforWhere").empty();
      
      // display title on the page
      $("#make-selection-Eventbrite").removeClass("d-none")
      $("#make-selection-Etsy").addClass("d-none")
  
      var privateAPIKey = "Q2VRCE5ZUCJTZ5IFWVHG";
      var searchTerm = userData.interest;
      var sort = "date"
      var address = userData.postalCode;
      console.log(userData.postalCode);
      var distance = 20 + "mi"
      var eventBriteURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + searchTerm + "&sort_by=" + sort + "&location.address="+ address + "&location.within=" + distance + "&token=Q2VRCE5ZUCJTZ5IFWVHG"
  
      $.ajax({
          url: eventBriteURL,
          method: "GET",
      }).then(function(response){
          console.log(response);
          newEventArr = response.events;
          console.log(newEventArr);
          if (newEventArr.length === 0) {
              displayMakeEvent()
          } else {
          displayEvents(newEventArr);
          }
      });
  }
  // END EVENTBRITE ==================================================================
  
  
  // START ETSY ==================================================================
  // trigger when the next button has been clicked on the previous page
  // validation for picking interest and click handler
  $(document).on("click", "#nextPageToEtsy", validatePixabay)
  
  function validatePixabay() {
      if (pixabaySelected === false) {
          $(".invalid-selection").text("You must make a selection first");
          return false;
      }
      else {
          $(".invalid-selection").empty();
          getDataEtsy();
      }
  }
  
  
  // click handler for showMoreEtsy button to load more ETSY
  $("#showMoreEtsy").on("click", function (event) {
      displayEtsy(newEtsyArr);
  })
  
  // store Etsy array
  var newEtsyArr = [];
  
  // put Etsy items on the page
  function displayEtsy(arr) {
      // display the correct show more buttons
      $("#showMoreEtsy").removeClass("d-none")
      $("#showMorePixabay").addClass("d-none")
      
      // showing the next page button and removing the currnet page button
      $("#nextPageToEventbrite").removeClass("d-none");
      $("#nextPageToEtsy").addClass("d-none");
      
      if (arr.length > 3) {
      // creating the holder for Etsy content
      imageContainer = $("#TBDforWhere");
      imageRow = $("<div class='row'>");
      for (i = 0; i < 4; i++) {
          imageCol = $("<div class='col-md mb-3'>");
          imageCard = $("<div>")
              imageCard.addClass("card-img-top image-card-etsy etsyPicked");
              imageCard.attr("data-img", JSON.stringify(arr[i].Images[0].url_fullxfull));
              imageCard.attr("data-url", arr[i].url);
              imageCard.attr("data-price", arr[i].price);
              imageCard.attr("data-title", arr[i].title);
              imageCard.append("<img class ='image-img-etsy' src=" + JSON.stringify(arr[i].Images[0].url_fullxfull) + ">");
          imageCardBody = $("<div class='body-card-etsy'>");
              imageCardBody.addClass("card-body");
                  imageCardLink = $("<a target='_blank'>");
                      imageCardLink.attr("href", arr[i].url);
                          imageCardTitle = $("<h5 class='title-card-etsy'>" + arr[i].title + "</h5>")
                      imageCardLink.append(imageCardTitle);
              imageCardBody.append(imageCardLink);
              imageCardBody.append("<h6 class='price-card-etsy'>" + "$" + arr[i].price + "</h6>");
          imageCard.append(imageCardBody);
          imageCol.append(imageCard); 
          imageRow.append(imageCol);
      }
      imageContainer.append(imageRow);
      arr.splice(0,4);
      
      newEtsyArr = arr;
    } else if (arr.length < 4 && arr.length > 0) {
        imageContainer = $("#TBDforWhere");
      imageRow = $("<div class='row'>");
      for (i = 0; i < 4; i++) {
          imageCol = $("<div class='col-md mb-3'>");
          imageCard = $("<div>")
              imageCard.addClass("card-img-top image-card-etsy etsyPicked");
              imageCard.attr("data-img", JSON.stringify(arr[i].Images[0].url_fullxfull));
              imageCard.attr("data-url", arr[i].url);
              imageCard.attr("data-price", arr[i].price);
              imageCard.attr("data-title", arr[i].title);
              imageCard.append("<img class ='image-img-etsy' src=" + JSON.stringify(arr[i].Images[0].url_fullxfull) + ">");
          imageCardBody = $("<div class='body-card-etsy'>");
              imageCardBody.addClass("card-body");
                  imageCardLink = $("<a target='_blank'>");
                      imageCardLink.attr("href", arr[i].url);
                          imageCardTitle = $("<h5 class='title-card-etsy'>" + arr[i].title + "</h5>")
                      imageCardLink.append(imageCardTitle);
              imageCardBody.append(imageCardLink);
              imageCardBody.append("<h6 class='price-card-etsy'>" + "$" + arr[i].price + "</h6>");
          imageCard.append(imageCardBody);
          imageCol.append(imageCard); 
          imageRow.append(imageCol);
      }
      imageContainer.append(imageRow);
      arr.splice(0,arr.length);
      
      newEtsyArr = arr;
    } else {
        var btn = document.getElementById("showMoreEtsy"); 
          btn.disabled = true;
    }
      // console.log(newEtsyArr);
  }
  
  // run API for Etsy data
  function getDataEtsy() {
      // empty the contents of the container
      $("#TBDforWhere").empty();
      
      // display the title for Etsy
      $("#make-selection-Etsy").removeClass("d-none")
      $("#make-selection-Pixabay").addClass("d-none")
  
      // set variables for ETSY ajax query
      var api_key_Etsy = "7u4gcw7pr0m2knv9opn4f5h6";
      var interestEtsy = userData.interest;
  
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
  
  // FIREBASE ==================================================================
  var firebaseConfig = {
  apiKey: "AIzaSyCl_zK8X9G3zwJpQoH2v5WtBm_8qNnBsuY",
  authDomain: "thissociety-38389.firebaseapp.com",
  databaseURL: "https://thissociety-38389.firebaseio.com",
  projectId: "thissociety-38389",
  storageBucket: "thissociety-38389.appspot.com",
  messagingSenderId: "684771717578",
  appId: "1:684771717578:web:938d3aa5c1ed7d53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  // INVITE PAGE ==================================================================
  // validation for picking interest and click handler
  $(document).on("click", "#nextPageToInvite", validateEventbrite)
  
  function validateEventbrite() {
      if (eventbriteSelected === false) {
          $(".invalid-selection").text("You must make a selection first");
          return false;
      }
      else {
          $(".invalid-selection").empty();
          generateInvite();
      }
  }
  
  // $("#nextPageToInvite").on("click", function(){
      
function generateInvite() {
}
function storeData() {
    inviteObject.date = Date();
    inviteObject.pixabay = pixabayPicked;
    inviteObject.etsy = etsyPicked;
    inviteObject.eventbrite = eventbritePicked,
    console.log(inviteObject);
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("inviteObject", JSON.stringify(inviteObject));
    database.ref().push({
        date: Date(),
        email: userData.email,
        name: userData.userName,
        code: userData.postalCode,
        interest: userData.interest,
        pixabay: pixabayPicked,
        etsy: etsyPicked,
        eventbrite: eventbritePicked,
    })
}

// Define interest search variables
var interestSearch;
var returnedObjects;
var returnedChildren;

// Create click handler for interest search button
$("#SearchButton").on("click", function(event) {
    event.preventDefault();
    interestSearch = $("#interest-search").val().trim();
    console.log(interestSearch);
    $("#search-section").hide();
    $("#search-table").show();
    getChild();
    // displaySearchResults();
});

// Search Database
var interestSearch
function getChild() {
    database.ref().orderByChild("interest").equalTo(interestSearch).on('value', function (snapshot) {
        // Snapshot returns nodes that that match interest
        // Loop through each item found and print out the children
        snapshot.forEach(function(childSnapshot) {
            var uName = childSnapshot.val().name;
            var uEmail = childSnapshot.val().email;
            var uDate = childSnapshot.val().date;
            var uZip = childSnapshot.val().code;
            var uInvite = childSnapshot.val();

            // Append search results into table form
            var newRow = $("<tr>").append(
                $("<td>").text(uName),
                $("<td>").text(uEmail),
                $("<td>").text(uDate),
                $("<td>").text(uZip),
                $("<td>").append(
                    $("<a/>", {
                        "id": "invite-link",
                        "data-object": JSON.stringify(uInvite),
                        "href": "render-invite.html",
                        "target": "_blank",
                        "text": "see invite"
                    })
                )
            );
            $("#full-search-results").append(newRow);
        });
        // Display search term
        $("#search-results-h6").text("Results for: " + interestSearch);
    });
}
// Hide the table on page load
$("#search-table").hide();

// Click handler for search again buttong
$("#search-again").on("click", function(){
    $("#full-search-results").text("");
    $("#interest-search").val("");
    $("#search-section").show();
    $("#search-table").hide();
})

// render search invites
$(document).on("click", "#invite-link", function(){
    var clickedInviteObject = $(this).attr("data-object")
    console.log(clickedInviteObject);
    localStorage.removeItem("userDataGet");
    console.log(localStorage.getItem("userDataGet"));
    localStorage.setItem("userDataGet", clickedInviteObject);
    console.log(JSON.stringify(clickedInviteObject));
})

// INVITE PAGE ==================================================================
$("#nextPageToInvite").on("click", function(){
    storeData();
});

//   function previewFile(){
//       var preview = document.querySelector('img'); //selects the query named img
//       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
//       var reader  = new FileReader();
  
//       reader.onloadend = function () {
//           preview.src = reader.result;
//       }
  
//       if (file) {
//           reader.readAsDataURL(file); //reads the data as a URL
//       } else {
//           preview.src = "";
//       }
//   }
  
//   previewFile();  //calls the function named previewFile()