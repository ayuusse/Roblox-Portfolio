var Projects = (function () {
  var projectsData = [
    {
      title: 'Infinite Obby Incremental',
      description: 'A solo development project created as a passion project merging traditional obby gameplay with incremental progression systems.',
      built: 'June 2026',
      videoSrc: 'assets/videos/Inf Obby Inc.mp4',
      thumbnailSrc: 'assets/images/Inf Obby Inc.png'
    },
    {
      title: 'Rolling System + Inventory system ',
      description: 'A flexible chance-based rolling system linked directly to an organized inventory. Designed with easy-to-update item tables and ID tracking for straightforward data management.',
      built: 'July 2026',
      videoSrc: 'assets/videos/Rolling System.mp4',
      thumbnailSrc: 'assets/images/Rolling System.png'
    },
    {
      title: 'Meccha Chameleon Painting System',
      description: 'Made a clean and functional painting system based on the Meccha Chameleon style.',
      built: 'July 2026',
      videoSrc: 'assets/videos/Basic meccha chameleon.mp4',
      thumbnailSrc: 'assets/images/Basic meccha chameleon.jpg'
    },
    {
      title: 'Character Selction window',
      description: 'A clean and fully modular character selection window. Built with flexible systems to allow for easy setup and smooth integration into any project.',
      built: 'July 2026',
      videoSrc: 'assets/videos/Character Selection.mp4',
      thumbnailSrc: 'assets/images/Character Selection.png'
    },
  ];

  
  function initProjects(modalInstance) {
    var grid = document.getElementById('projects-grid');
    if (!grid) return [];

    var cards = [];
    projectsData.forEach(function (project, index) {
      var card = createCard(project, modalInstance);
      grid.appendChild(card);
      cards.push(card);
    });

    return cards;
  }

  function createCard(project, modal) {
    var article = document.createElement('article');
    article.className = 'project-card';

    var imageDiv = document.createElement('div');
    imageDiv.className = 'project-card__image';

    if (project.thumbnailSrc) {
      var img = document.createElement('img');
      img.src = project.thumbnailSrc;
      img.alt = project.title + ' screenshot';
      img.loading = 'lazy';
      imageDiv.appendChild(img);
    } else {
      var placeholder = document.createElement('span');
      placeholder.className = 'project-card__placeholder';
      placeholder.textContent = 'Project Screenshot';
      imageDiv.appendChild(placeholder);
    }

    var openVideo = function (e) {
      e.preventDefault();
      if (modal && typeof modal.open === 'function') {
        modal.open(project.videoSrc, project.title);
      }
    };

    imageDiv.addEventListener('click', openVideo);
    imageDiv.style.cursor = 'pointer';

    article.appendChild(imageDiv);

    var content = document.createElement('div');
    content.className = 'project-card__content';

    var title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;
    content.appendChild(title);

    var desc = document.createElement('p');
    desc.className = 'project-card__description';
    desc.textContent = project.description;
    content.appendChild(desc);

    var builtBadge = document.createElement('ul');
    builtBadge.className = 'project-card__tags';
    builtBadge.setAttribute('aria-label', 'Build date');
    var li = document.createElement('li');
    li.textContent = project.built;
    builtBadge.appendChild(li);
    content.appendChild(builtBadge);

    var linksDiv = document.createElement('div');
    linksDiv.className = 'project-card__links';

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'project-link';
    link.textContent = 'Watch Video →';
    link.addEventListener('click', openVideo);
    linksDiv.appendChild(link);

    content.appendChild(linksDiv);
    article.appendChild(content);

    return article;
  }

  function setData(data) {
    projectsData = data;
  }

  return {
    init: initProjects,
    setData: setData
  };
})();
