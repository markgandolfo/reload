console.info("reload.js is now listening for SHIFT + R to reload the css files");
window.addEventListener("keydown", function(e) {
  if(e.shiftKey && e.keyCode == 82) {
    console.info("reload.js: Reloading css files");
    var links = document.getElementsByTagName('link');
    for (var i = 0; i<links.length; i++) {
      var otac = links[i].parentElement;
      var klinac = links[i];
      otac.removeChild(klinac);
      otac.appendChild(klinac);
    }
  } else if(e.shiftKey && e.keyCode == 85) {
    console.info("reload.js: Unloading reload.js, to re-initialize, you'll need to reload the plugin");
    var el = document.getElementById('reload.js');
    el.parentNode.removeChild(el);
  }

});

