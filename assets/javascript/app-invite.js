var userData;
var inviteObject;

function renderInvite() {
    userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    inviteObject = JSON.parse(localStorage.getItem("inviteObject"));
    console.log(inviteObject);

    // user name
    var userNameInvite = userData.userName 

    new TypeIt('#invite-line', {
        speed: 50,
        startDelay: 1000
    })
    .type(userNameInvite)
        .options({speed: 100})
        .pause(1500)
        .type(", will you go out with me?")
        .go();

    // pixabay
    var pixabayInviteImg = ("<img class='invite-img' src=" + inviteObject.pixabay.dataImg + ">")
    $("#pixabay-display").prepend(pixabayInviteImg)
    var userInterestInvite = userData.interest
    $("#userInterest-invite").text(userInterestInvite)

    // etsy
    var etsyInviteImg = ("<img class='invite-img' src=" + inviteObject.etsy.dataImg + ">")
    var etsyInviteDetails1 = ("<h5 class='invite-card-text'>" + inviteObject.etsy.dataTitle + "</h5>") 
    var etstInvitePrice = ("<h5 class='price-card-etsy'>" + "$" + inviteObject.etsy.dataPrice + "</h5>")
    var fullUrl = ("<h5 class='external-url'>Buy it <a href=" + inviteObject.etsy.dataUrl + "> here </a></h5>")
    $("#etsy-display").append(etsyInviteImg)
    $("#etsy-display").append(etsyInviteDetails1)
    $("#etsy-display").append(etstInvitePrice)
    $("#etsy-display").append(fullUrl)


    // eventbrite
    var eventbriteInviteImg = ("<img class='invite-img' src=" + inviteObject.eventbrite.dataImg + ">")
    $("#eventbrite-display").append(eventbriteInviteImg)
    eventbriteInviteDetails1 = ("<h5 class='invite-card-text'>" + inviteObject.eventbrite.dataName + "</h5>")
    $("#eventbrite-display").append(eventbriteInviteDetails1)
    // add link to event
    // add time of event
    // add date of event
    // add location of event
    // 
};

renderInvite();