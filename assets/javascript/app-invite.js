var userData;
var inviteObject;

function renderInvite() {
    userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    inviteObject = JSON.parse(localStorage.getItem("inviteObject"));
    console.log(inviteObject);
    $("#invite-line").text(userData.userName + ", will you go out with me?")
    $("#pixabay-display").append("<img src=" + inviteObject.pixabay.dataImg + ">")
    $("#etsy-display").append("<img src=" + inviteObject.etsy.dataImg + ">")
    $("#etsy-display").append("<h5>" + inviteObject.etsy.dataTitle + "</h5>")
    $("#eventbrite-display").append("<img src=" + inviteObject.eventbrite.dataImg + ">")
    $("#eventbrite-display").append("<h5>" + inviteObject.eventbrite.dataName + "</h5>")
};

renderInvite();