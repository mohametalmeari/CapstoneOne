const xMenu = document.getElementById('close-menu');
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');
const menuLink = document.querySelectorAll('.menu-list li');

menuIcon.addEventListener('click', () => {
  menuList.style.display = 'flex';
});

xMenu.addEventListener('click', () => {
  menuList.style.display = 'none';
});

for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menuList.style.display = 'none';
    }
  });
}

const artists = [
  {
    name: 'Tailer Swift1',
    description: 'A great American singer1',
    details: 'She is known for her loud songs1',
    image_scr: './images/artist1.png',
    image_alt: 'Tailer Swift Image',
  },
  {
    name: 'Tailer Swift2',
    description: 'A great American singer2',
    details: 'She is known for her loud songs2',
    image_scr: './images/artist2.png',
    image_alt: 'Tailer Swift Image2',
  },
  {
    name: 'Tailer Swift',
    description: 'A great American singer',
    details: 'She is known for her loud songs',
    image_scr: './images/artist3.png',
    image_alt: 'Tailer Swift Image',
  },
  {
    name: 'Tailer Swift1',
    description: 'A great American singer1',
    details: 'She is known for her loud songs1',
    image_scr: './images/artist1.png',
    image_alt: 'Tailer Swift Image',
  },
  {
    name: 'Tailer Swift2',
    description: 'A great American singer2',
    details: 'She is known for her loud songs2',
    image_scr: './images/artist2.png',
    image_alt: 'Tailer Swift Image2',
  },
  {
    name: 'Tailer Swift',
    description: 'A great American singer',
    details: 'She is known for her loud songs',
    image_scr: './images/artist3.png',
    image_alt: 'Tailer Swift Image',
  },
];

const artistsContainer = document.getElementById('artists-container');
for (let i = 0; i < artists.length; i += 1) {
  const artistCard = document.createElement('div');
  artistCard.innerHTML = `
  <div class="img-container">
      <div></div>
      <img src="${artists[i].image_scr}" alt="${artists[i].image_alt}">
  </div>
  <div class="artist-info">
      <h3>
      ${artists[i].name}
      </h3>
      <h4>${artists[i].description}</h4>
      <hr class="info-underline">
      <p>${artists[i].details}</p>
  </div>
  `;
  artistCard.classList.add('artist-card');
  artistsContainer.appendChild(artistCard);
}

const artistCard = document.querySelectorAll('.artist-card');
for (let i = 4; i < artistCard.length; i += 1) {
  artistCard[i].style.display = 'none';
}

const moreBtn = document.getElementById('more-btn');
let showCards = true;
moreBtn.addEventListener('click', () => {
  if (showCards) {
    for (let i = 4; i < artistCard.length; i += 1) {
      artistCard[i].style.display = 'flex';
    }
    showCards = false;
    moreBtn.innerHTML = 'Less <i id="btn_arrow" class="material-icons">keyboard_arrow_up</i>';
  } else {
    for (let i = 4; i < artistCard.length; i += 1) {
      artistCard[i].style.display = 'none';
    }
    showCards = true;
    moreBtn.innerHTML = 'More <i id="btn_arrow" class="material-icons">keyboard_arrow_down</i>';
  }
});
