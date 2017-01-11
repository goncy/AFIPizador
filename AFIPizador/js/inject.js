var s = document.createElement('script');
s.src = chrome.extension.getURL('js/afipizador.js');
s.onload = function() { this.remove() };
(document.head || document.documentElement).appendChild(s);