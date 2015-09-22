// Example:

JavaScript.load("/javascripts/something.js");


// With callback (that’s the good thing):

JavaScript.load("http://www.someawesomedomain.com/api.js", function() {
  API.use(); // or whatever api.js provides ...
});


/** Testet with:
 *  - IE 5.5, 7.0, 8.0, 9.0 (preview)
 *  - Firefox 3.6.3, 3.6.8
 *  - Safari 5.0
 *  - Chrome 5.0
 *  - Opera 10.10, 10.60
 */
var JavaScript = {
  load: function(src, callback) {
    var script = document.createElement('script'),
        loaded;
    script.setAttribute('src', src);
    if (callback) {
      script.onreadystatechange = script.onload = function() {
        if (!loaded) {
          callback();
        }
        loaded = true;
      };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  }
};
