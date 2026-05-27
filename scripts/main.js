
$("#hamburger-btn").on("click", function() { // ← click event
  if ($("#main-nav").hasClass("hidden")) { // ← element has css class
    $("#main-nav").removeClass("hidden");
  } else {
    $("#main-nav").addClass("hidden");
  } // ← element has css class
}); // ← click event

$(".itinerary-card").on("click", function() { // ← click event
  var title = $(this).attr("data-title");
  var desc = $(this).attr("data-desc");
  var img = $(this).attr("data-img");

  $("#modal-title").text(title);
  $("#modal-desc").text(desc);
  $("#modal-img").attr("src", img);
  $("#modal-img").attr("alt", title);

  $("#modal-overlay").removeClass("hidden");
}); // ← click event

$("#modal-close").on("click", function() { // ← click event
  $("#modal-overlay").addClass("hidden");
}); // ← click event

$("#modal-overlay").on("click", function(event) { // ← click event
  if ($(event.target).is("#modal-overlay")) { // ← check click target
    $("#modal-overlay").addClass("hidden");
  } // ← check click target
}); // ← click event
