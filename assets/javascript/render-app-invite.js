function renderInvite() {
    userDataGet = JSON.parse(localStorage.getItem("userDataGet"));
    console.log(userDataGet);

    // pixabay
    var pixabayInviteImgGet = ("<img class='invite-img' src=" + userDataGet.pixabay.dataImg + ">")
    $("#pixabay-display").prepend(pixabayInviteImgGet)
    var userInterestInviteGet = userDataGet.interest
    $("#userInterest-invite").text(userInterestInviteGet)

    // etsy
    var etsyInviteImgGet = ("<img class='invite-img' src=" + userDataGet.etsy.dataImg + ">")
    var etsyInviteDetails1Get = ("<h5 class='invite-title invite-card-text'>" + userDataGet.etsy.dataTitle + "</h5>") 
    var etstInvitePriceGet = ("<h5 class='price-card-etsy'>" + "$" + userDataGet.etsy.dataPrice + "</h5>")
    var etsyFullUrlGet = ("<h5 class='external-url'>Buy it <a target='_blank' href=" + userDataGet.etsy.dataUrl + "> here </a></h5>")
    $("#etsy-display").append(etsyInviteImgGet)
    $("#etsy-display").append(etsyInviteDetails1Get)
    $("#etsy-display").append(etstInvitePriceGet)
    $("#etsy-display").append(etsyFullUrlGet)


    // eventbrite
    var eventbriteInviteImgGet = ("<img class='invite-img' src=" + userDataGet.eventbrite.dataImg + ">")
    var eventbriteInviteDetails1Get = ("<h5 class='invite-title invite-card-text'>" + userDataGet.eventbrite.dataName + "</h5>")
    var eventbriteFullUrlGet = ("<h5 class='external-url'>More details <a target='_blank' href=" + userDataGet.eventbrite.dataUrl + "> here </a></h5>")
    
    
    $("#eventbrite-display").append(eventbriteInviteImgGet)
    eventbriteInviteDetails1Get = ("<h5 class='invite-card-text'>" + userDataGet.eventbrite.dataName + "</h5>")
    $("#eventbrite-display").append(eventbriteInviteDetails1Get)
    $("#eventbrite-display").append(eventbriteFullUrlGet)

    // add link to event
    // add time of event
    // add date of event
    // add location of event
    // 
};

renderInvite();