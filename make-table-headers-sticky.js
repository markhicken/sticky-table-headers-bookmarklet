// Mark Hicken did this stuff
// 2018 make all table headers on page sticky while scrolling
document.addEventListener('DOMContentLoaded', function(event) {
  var headElement = document.getElementsByTagName('head')[0];

  var jQueryScript = document.createElement('script');
  jQueryScript.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js';
  headElement.appendChild(jQueryScript);

  setTimeout(function () {
    var floatHeadScript = document.createElement('script');
    floatHeadScript.src = '//mkoryak.github.io/floatThead/dist/jquery.floatThead.js';
    headElement.appendChild(floatHeadScript);

    floatHeadScript.onload = function(event) {
      var $tables = $('table');
      $tables.floatThead();
    };
  });
});
