window.addEventListener("keydown", function(e) {
  if(e.shiftKey && e.keyCode == 82) {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i<links.length; i++) {
      var otac = links[i].parentElement;
      var klinac = links[i];
      otac.removeChild(klinac);
      otac.appendChild(klinac);
    }
  }
});

