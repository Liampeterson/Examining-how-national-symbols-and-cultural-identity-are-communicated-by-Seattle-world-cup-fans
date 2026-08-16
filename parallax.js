// Essay page hero: the cover photo drifts slower than the page as the
// user scrolls past it (so the essay content feels like it slides up
// and over the photo), and the bouncing scroll cue fades out once the
// user actually starts scrolling. Purely decorative — the photo and
// cue just sit static without JS.
//
// The page loads pre-scrolled past the masthead (see the inline
// script right after <header>), so "scrolled" here is measured from
// that baseline, not from absolute 0 — otherwise the cue would start
// hidden and the photo would already be shifted on load.
(function () {
  var img = document.querySelector('.essay-header__cover img');
  var cue = document.querySelector('.essay-header__scroll-cue');
  if (!img && !cue) return;

  var cover = img ? img.closest('.essay-header__cover') : null;
  var masthead = document.querySelector('.masthead');
  var baseline = masthead ? masthead.offsetHeight : 0;
  var factor = 0.3;
  var hideCueAfter = 80; // px scrolled past the baseline before the cue fades out
  var ticking = false;

  function update() {
    var scrolled = Math.max(window.scrollY - baseline, 0);

    if (img && cover) {
      var maxShift = cover.offsetHeight * 0.12; // matches the img's 124% height
      var shift = Math.min(scrolled * factor, maxShift);
      img.style.transform = 'translate3d(0, ' + -shift + 'px, 0)';
    }

    if (cue) {
      cue.classList.toggle('is-hidden', scrolled > hideCueAfter);
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
