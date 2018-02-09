// Mark Hicken did this stuff
// 2018 make all table headers on page sticky while scrolling
function makeTableHeadersSticky() {
  var headElement = document.getElementsByTagName('head')[0];

  var jQueryScript = document.createElement('script');
  jQueryScript.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js';

  jQueryScript.onload = function() {
    var floatHeadScript = document.createElement('script');
    floatHeadScript.src = '//mkoryak.github.io/floatThead/dist/jquery.floatThead.js';
    floatHeadScript.onload = function(event) {
      var $tables = $('table');
      $tables.floatThead();
    };

    headElement.appendChild(floatHeadScript);
  };

  headElement.appendChild(jQueryScript);
}

makeTableHeadersSticky();
