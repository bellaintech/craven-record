document.addEventListener("DOMContentLoaded", function () {
  var banner = document.getElementById("cookie-banner");
  var acceptBtn = document.getElementById("cookie-accept");
  var declineBtn = document.getElementById("cookie-decline");

  function hideBanner() {
    if (banner) {
      banner.style.display = "none";
    }
  }

  if (acceptBtn) acceptBtn.addEventListener("click", hideBanner);
  if (declineBtn) declineBtn.addEventListener("click", hideBanner);
});
