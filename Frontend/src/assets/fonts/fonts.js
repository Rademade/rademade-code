!function () {
  function e() {
    var e = document.createElement("style");
    e.rel = "stylesheet", document.head.appendChild(e), e.textContent = localStorage.domainFonts
  }

  try {
    if (localStorage.domainFonts) e(); else {
      var t = new XMLHttpRequest;
      t.open("GET", "assets/fonts/fonts.css", !0), t.onload = function () {
        t.status >= 200 && t.status < 400 && (localStorage.domainFonts = t.responseText, e())
      }, t.send()
    }
  } catch (a) {
  }
}();