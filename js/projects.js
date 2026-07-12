var Projects = (function () {
  var projectsData = [
    {
      title: 'Infinite Obby Incremental',
      description: 'A solo development project created as a passion project merging traditional obby gameplay with incremental progression systems.',
      built: 'June 2026',
      youtubeId: 'Lvt8b_YmhKc',
      thumbnailSrc: 'assets/images/inf-obby-inc.jpg'
    },
    {
      title: 'Rolling System + Inventory system',
      description: 'A flexible chance-based rolling system linked directly to an organized inventory. Designed with easy-to-update item tables and ID tracking for straightforward data management.',
      built: 'July 2026',
      youtubeId: '5eoFDl0Pn7k',
      thumbnailSrc: 'assets/images/rolling-system.jpg'
    },
    {
      title: 'Meccha Chameleon Painting System',
      description: 'Made a clean and functional painting system based on the Meccha Chameleon style.',
      built: 'July 2026',
      youtubeId: 'mg2RCpDoFNk',
      thumbnailSrc: 'assets/images/basic-meccha-chameleon.jpg'
    },
    {
      title: 'Character Selction window',
      description: 'A clean and fully modular character selection window. Built with flexible systems to allow for easy setup and smooth integration into any project.',
      built: 'July 2026',
      youtubeId: '1VSLq4elTZ4',
      thumbnailSrc: 'assets/images/character-selection.jpg'
    },
  ];

  function initProjects(player) {
    var grid = document.getElementById('projects-grid');
    if (!grid) return [];

    var cards = [];
    projectsData.forEach(function (project) {
      var card = createCard(project, player);
      grid.appendChild(card);
      cards.push(card);
    });

    return cards;
  }

  function createCard(project, player) {
    var article = document.createElement('article');
    article.className = 'project-card';

    var imageDiv = document.createElement('div');
    imageDiv.className = 'project-card__image';

    var img = document.createElement('img');
    img.src = project.thumbnailSrc;
    img.alt = project.title + ' screenshot';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 400;
    img.height = 225;
    imageDiv.appendChild(img);

    imageDiv.addEventListener('click', function (e) {
      e.preventDefault();
      if (player && typeof player.open === 'function') {
        player.open(project.youtubeId, project.title);
      }
    });
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
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (player && typeof player.open === 'function') {
        player.open(project.youtubeId, project.title);
      }
    });
    linksDiv.appendChild(link);

    content.appendChild(linksDiv);
    article.appendChild(content);

    return article;
  }

  return { init: initProjects };
})();
