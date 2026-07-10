var VideoModal = (function () {

  var overlay = null;
  var modal = null;
  var video = null;
  var source = null;
  var closeBtn = null;
  var isOpen = false;

  function init() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'video-modal-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Video player');

    closeBtn = document.createElement('button');
    closeBtn.className = 'video-modal__close';
    closeBtn.setAttribute('aria-label', 'Close video');
    closeBtn.innerHTML = '&times;';

    var wrapper = document.createElement('div');
    wrapper.className = 'video-modal__wrapper';

    video = document.createElement('video');
    video.className = 'video-modal__video';
    video.controls = true;
    video.preload = 'none';
    video.playsInline = true;

    source = document.createElement('source');
    video.appendChild(source);
    wrapper.appendChild(video);
    modal.appendChild(closeBtn);
    modal.appendChild(wrapper);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    closeBtn.addEventListener('click', close);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) close();
    });
  }

  function open(src, title, poster) {
    init();
    source.src = src;
    source.type = 'video/mp4';
    if (poster) video.poster = poster;
    if (title) {
      modal.setAttribute('aria-label', 'Video: ' + title);
    }
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');
    isOpen = true;
    document.body.style.overflow = 'hidden';
    video.load();
    video.play().catch(function () {});
  }

  function close() {
    if (!isOpen) return;
    video.pause();
    source.removeAttribute('src');
    video.load();
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    isOpen = false;
    document.body.style.overflow = '';
  }

  return {
    init: init,
    open: open,
    close: close
  };
})();
