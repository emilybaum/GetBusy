var userDataGet;
// var inviteObject;

function renderInvite() {
    userDataGet = JSON.parse(localStorage.getItem("userDataGet"));
    console.log(userDataGet);
    // inviteObject = JSON.parse(localStorage.getItem("inviteObject"));
    // console.log(inviteObject);

    // pixabay
    var pixabayInviteImg = ("<img class='invite-img' src=" + userDataGet.pixabay.dataImg + ">")
    $("#pixabay-display").prepend(pixabayInviteImg)
    var userInterestInvite = userDataGet.interest
    $("#userInterest-invite").text(userInterestInvite)

    // etsy
    var etsyInviteImg = ("<img class='invite-img' src=" + userDataGet.etsy.dataImg + ">")
    $("#etsy-display").append(etsyInviteImg)
    etsyInviteDetails1 = ("<h5 class='invite-card-text'>" + userDataGet.etsy.dataTitle + "</h5>")
    $("#etsy-display").append(etsyInviteDetails1)
    // add link to item
    // add cost of item

    // eventbrite
    var eventbriteInviteImg = ("<img class='invite-img' src=" + userDataGet.eventbrite.dataImg + ">")
    $("#eventbrite-display").append(eventbriteInviteImg)
    eventbriteInviteDetails1 = ("<h5 class='invite-card-text'>" + userDataGet.eventbrite.dataName + "</h5>")
    $("#eventbrite-display").append(eventbriteInviteDetails1)
};

renderInvite();