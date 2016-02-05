var emojilib

// get data from local json file

(function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'js/emojis.json', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      emojilib = JSON.parse(request.response);
      var event = document.createEvent('HTMLEvents');
      event.initEvent('emoji-ready', true, false);
      document.dispatchEvent(event);
    }
  };
  request.send();
})();



