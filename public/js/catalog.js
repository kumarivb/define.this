$(document).ready(function() {
    // card container
    var cardContainer = $(".indexCard");
});

// grab context info from db
getContext();

// get context
function getContext() {
    $.post("/api/getfirstentry", function(data) {
        context = data;
console.log(data);
    });
}