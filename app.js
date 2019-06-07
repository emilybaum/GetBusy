var whatToSearch = $(this).attr("shoppingItems");
var API = "7u4gcw7pr0m2knv9opn4f5h6";
var queryURL = "https://openapi.etsy.com/v2/listings/active?api_key=" + API;

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response)
    // for (var i = 0; i < response.data.length; i++) {
});
    