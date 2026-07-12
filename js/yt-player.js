var YTPlayer = (function () {
  var overlay, modal, iframe, closeBtn;

  function init() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'video-modal-overlay';

    modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    closeBtn = document.createElement('button');
    closeBtn.className = 'video-modal__close';
    closeBtn.setAttribute('aria-label', 'Close video');
    closeBtn.innerHTML = '&times;';

    var wrapper = document.createElement('div');
    wrapper.className = 'video-modal__wrapper';

    iframe = document.createElement('iframe');
    iframe.className = 'video-modal__video';
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', 'true');

    wrapper.appendChild(iframe);
    modal.appendChild(closeBtn);
    modal.appendChild(wrapper);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
  }

  function open(videoId, title) {
    init();
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    if (title) modal.setAttribute('aria-label', 'Video: ' + title);
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!overlay || !overlay.classList.contains('is-open')) return;
    iframe.src = '';
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  return { open: open, close: close };
})();
