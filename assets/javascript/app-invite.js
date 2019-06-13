var userData;
var inviteObject;

function renderInvite() {
    userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    inviteObject = JSON.parse(localStorage.getItem("inviteObject"));
    console.log(inviteObject);

    // user name
    var userNameInvite = userData.userName 
    $("#invite-line").text(userNameInvite)

    // pixabay
    var pixabayInviteImg = ("<img class='invite-img' src=" + inviteObject.pixabay.dataImg + ">")
    $("#pixabay-display").prepend(pixabayInviteImg)
    var userInterestInvite = userData.interest
    $("#userInterest-invite").text(userInterestInvite)

    // etsy
    var etsyInviteImg = ("<img class='invite-img' src=" + inviteObject.etsy.dataImg + ">")
    $("#etsy-display").append(etsyInviteImg)
    etsyInviteDetails1 = ("<h5 class='invite-card-text'>" + inviteObject.etsy.dataTitle + "</h5>")
    $("#etsy-display").append(etsyInviteDetails1)
    // add link to item
    // add cost of item

    // eventbrite
    var eventbriteInviteImg = ("<img class='invite-img' src=" + inviteObject.eventbrite.dataImg + ">")
    $("#eventbrite-display").append(eventbriteInviteImg)
    eventbriteInviteDetails1 = ("<h5 class='invite-card-text'>" + inviteObject.eventbrite.dataName + "</h5>")
    $("#eventbrite-display").append(eventbriteInviteDetails1)
    // add link to event
    // add time of event
    // add location of event
    // 
};

renderInvite();