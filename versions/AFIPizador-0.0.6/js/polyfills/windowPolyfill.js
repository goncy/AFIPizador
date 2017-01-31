// Polyfill window.navigate
window.navigate = function (x) { window.location.href = x; }