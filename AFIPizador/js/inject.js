[
  ["all", "windowPolyfill.js"],
  ["all", "form1Polyfill.js"],
  ["recategorizacion.asp|resto_datos_mod.asp", "obtenerParamPolyfill.js"],
  ["recategorizacion.asp|resto_datos_mod.asp", "recategorizacionPolyfill.js"]
].map(function (item) {
  var url = item[0];
  var polyfill = item[1];

  if (url === 'all' || location.pathname.match(url)) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('js/polyfills/' + polyfill);
    s.onload = function() { this.remove() };
    (document.head || document.documentElement).appendChild(s);
  }
})
