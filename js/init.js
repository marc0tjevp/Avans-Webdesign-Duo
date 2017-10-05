// Trigger class name on load, so the banner doesn't animate
// while still loading
$(document).ready(function() {
  window.onload = function() {
    document.body.className += ' loaded'
  };
});
