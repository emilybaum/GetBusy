# GetBusy
"The UnDating App"
GetBusy allow users to plan a date for themselves. Built with javascript/jQuery, Bootstrap, Firebase, Pixabay API, Etsy API, and Eventbrite API.  

## Created by team: thissociety
Allen Cooper
Emily Baumgartner
Arceny Castillo
Fahim Jamal

### Overview
I) User inputs information on index.html, then user is asked to select favorites from three sets of content related to their interest (photos, items for purchase, events) delivered by application through API calls to 3rd party applications:
    1) user inputs information through HTML form, stored to javascript userOject
    2) wrote validation functions with if/else statements and jQuery to ensure proper data format
    2) uses userObject for an ajax call to Pixabay API, returning 20 images, and rendering 4 at a time onto the page using jQuery, with image metadata stored as an attribute on each image's HTML element
    3) user selects a Pixabay image, selects next button
    4) created click handler using jQuery on next button that saves the seleted item's metadata to userObject and launches next API call
    5) uses userObject for an ajax call to Etsy API, returning 20 items for purchase, and renders 4 at a time onto the page using jQuery, with item's metadata stored as an attribute on each item's HTML element
    6) user selects an Etsy item, selects next button
    7) created click handler using jQuery on next button that saves selected item's metadata to userObject and launches next API
    8) uses UserObject for an ajax call to Eventbrite API, returning events within a 10 mile radius of user's location, displaying up to 4 at a time, with item's metadata stored as an attribute on each item's HTML element.
    9) uses if/else statements to generate a default event if no events are located in the user's area for their inputted interest
    10) user selects an Eventbrite item, selects generate invite button.
    11) created click handler using jQuery on generate invite button that saves selected metadata to userObject AND userObject to Local Storage AND firebase, and which loads invite.html
    12) on page load of invite.html, userObject is retrieved from Local Storage and rendered onto the page in the form of a "date invite" to the user.

II) Search.html allows user to search for other users by interest and retrieve their contact information and created invites:
    1) index.html includes a link to search.html in the navbar built with Bootstrap
    2) search.html includes an html form for searching for an interest
    3) created click handler with jQuery on search button, that calls a function which queries they firebase database, matching the users search term with the appropriate "interest" child of stored userObjects, and returns a JSON string of parent objects of those matched children
    4) uses jQuery to append query results onto the page in a table, and stores parent object's metadata into an attribute in the html element of the "see invite" anchor element
    5) created click handler on "see invite" anchor tag so that when user clicks it, it opens a "render-invite.html", stores objects metadata from data attribute into local storage
    6) upon page load of render-invite.html, a javascript function retrieves object metadata from local storage and renders it onto the page

III) Bootstrap layout utilized, building in mobile responsiveness:
    1) Google Fonts used

IV) Used CSS and JavaScript libraries to add animations and improve design:
    1) TypeIt library used to create animated page subtitle
    2) CloudFlare library used to create animated page title

#### Functionality
![Screenshot of Game](assets/images/screenshotvideo.gif)