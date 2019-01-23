$(document).ready(function() {
  $("#button").click(function(event) {
    var iceCreams = ["vanilla", "chocolate", "caramel", "mint", "chocolate mint", "cocoa"]
    iceCreams.forEach(function(flavor) {
      $("ul").append("<li>" + flavor + "</li>");
    });
  });
});
