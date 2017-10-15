// Add loaded class to body so the banner animation awaits the page to be loaded
$(document).ready(function() {
  window.onload = function() {
    document.body.className += ' loaded'
  };
});
