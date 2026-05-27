// ── Hamburger menu ──────────────────────────────────────────────
$("#hamburger-btn").on("click", function () {
  if ($("#main-nav").hasClass("hidden")) {
    $("#main-nav").removeClass("hidden");
  } else {
    $("#main-nav").addClass("hidden");
  }
});

// ── Modal ────────────────────────────────────────────────────────
$("#modal-close").on("click", function () {
  $("#modal-overlay").addClass("hidden");
});

$("#modal-overlay").on("click", function (event) {
  if ($(event.target).is("#modal-overlay")) {
    $("#modal-overlay").addClass("hidden");
  }
});

function openModal(title, desc, img) {
  $("#modal-title").text(title);
  $("#modal-desc").text(desc);
  $("#modal-img").attr("src", img).attr("alt", title);
  $("#modal-overlay").removeClass("hidden");
}

// ── Load data and render pages ───────────────────────────────────
$.getJSON("data.json", function (data) {

  // ── Render restaurants (eat.html) ──
  if ($("#restaurants-container").length) {
    data.restaurants.forEach(function (r) {
      var html = `
        <article>
          <h3>${r.name}</h3>
          <img src="${r.image}" alt="${r.alt}">
          <p>${r.description}</p>
          <h4>Details</h4>
          <dl>
            <dt>Location</dt><dd>${r.location}</dd>
            <dt>Price range</dt><dd>${r.price}</dd>
            <dt>Why it's special</dt><dd>${r.special}</dd>
          </dl>
        </article>`;
      $("#restaurants-container").append(html);
    });
  }

  // ── Render activities (burn.html) ──
  if ($("#activities-container").length) {
    data.activities.forEach(function (a) {
      var pictureOrImg = a.imageWide
        ? `<picture>
             <source media="(min-width: 700px)" srcset="${a.imageWide}">
             <img src="${a.image}" alt="${a.alt}">
           </picture>`
        : `<img src="${a.image}" alt="${a.alt}">`;

      var html = `
        <article>
          <h3>${a.name}</h3>
          ${pictureOrImg}
          <p>${a.description}</p>
          <h4>Details</h4>
          <dl>
            <dt>Difficulty</dt><dd>${a.difficulty}</dd>
            <dt>Duration</dt><dd>${a.duration}</dd>
            <dt>Starting Point</dt><dd>${a.startingPoint}</dd>
          </dl>
        </article>`;
      $("#activities-container").append(html);
    });
  }

  // ── Itinerary cards modal (index.html) ──
  $(document).on("click", ".itinerary-card", function () {
    var title = $(this).attr("data-title");
    var desc  = $(this).attr("data-desc");
    var img   = $(this).attr("data-img");
    openModal(title, desc, img);
  });

});
