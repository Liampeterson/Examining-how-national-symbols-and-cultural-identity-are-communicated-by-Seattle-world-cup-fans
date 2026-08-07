(function () {
  var loader = document.getElementById('page-loader');
  if (!loader) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var minDisplay = reduceMotion ? 150 : 1900;

  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('is-hidden');
    }, minDisplay);
  });
})();
