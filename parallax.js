// Essay page hero: the cover photo drifts slower than the page as the
// user scrolls past it (so the essay content feels like it slides up
// and over the photo), and the bouncing scroll cue fades out once the
// user actually starts scrolling. Purely decorative — the photo and
// cue just sit static without JS.
(function () {
  var img = document.querySelector('.essay-header__cover img');
  var cue = document.querySelector('.essay-header__scroll-cue');
  if (!img && !cue) return;

  var cover = img ? img.closest('.essay-header__cover') : null;
  var factor = 0.3;
  var hideCueAfter = 80; // px scrolled before the cue starts fading out
  var ticking = false;

  function update() {
    if (img && cover) {
      var maxShift = cover.offsetHeight * 0.12; // matches the img's 124% height
      var shift = Math.min(window.scrollY * factor, maxShift);
      img.style.transform = 'translate3d(0, ' + -shift + 'px, 0)';
    }

    if (cue) {
      cue.classList.toggle('is-hidden', window.scrollY > hideCueAfter);
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Respect reduced-motion: leave the photo static and the cue in its
  // plain, non-bouncing, always-visible CSS fallback state.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
