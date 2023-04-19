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
    name: 'Grimes',
    description: 'Alternative pop singer with ethereal vocals',
    details: 'Canadian Grimes has been active since 2007, known for ethereal vocals and unique pop, electronic, and experimental music',
    image_scr: './images/artist1.png',
  },
  {
    name: 'Daft Punk',
    description: 'Electronic duo with iconic helmets',
    details: 'French electronic music duo Daft Punk, active since 1993, known for iconic helmets, robot personas, and influential contributions to the genre',
    image_scr: './images/artist2.png',
  },
  {
    name: 'Björk',
    description: 'Avant-garde singer with eclectic style',
    details: 'Icelandic Björk has been active since 1977, known for avant-garde music, eclectic style, and unique vocal range',
    image_scr: './images/artist3.png',
  },
  {
    name: 'Tame Impala',
    description: 'Psychedelic rock band with dreamy soundscapes',
    details: 'Australian Tame Impala, formed in 2007, known for dreamy soundscapes and lush production',
    image_scr: './images/artist4.png',
  },
  {
    name: 'MGMT',
    description: 'Indie rock band with synth-heavy sound',
    details: 'American indie rock band MGMT, formed in 2002, known for synth-heavy sound and catchy hooks',
    image_scr: './images/artist5.png',
  },
  {
    name: 'Radiohead',
    description: 'Alternative rock band with experimental style',
    details: 'British alternative rock band Radiohead, formed in 1985, known for experimental style and pushing musical boundaries',
    image_scr: './images/artist6.png',
  },
];

const artistsContainer = document.getElementById('artists-container');
for (let i = 0; i < artists.length; i += 1) {
  const artistCard = document.createElement('div');
  artistCard.innerHTML = `
  <div class="img-container">
      <div></div>
      <img src="${artists[i].image_scr}" alt="Artist's Image">
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
for (let i = 2; i < artistCard.length; i += 1) {
  artistCard[i].style.display = 'none';
}

const moreBtn = document.getElementById('more-btn');
let showCards = true;
moreBtn.addEventListener('click', () => {
  if (showCards) {
    for (let i = 2; i < artistCard.length; i += 1) {
      artistCard[i].style.display = 'flex';
    }
    showCards = false;
    moreBtn.innerHTML = 'Less <i id="btn_arrow" class="material-icons">keyboard_arrow_up</i>';
  } else {
    for (let i = 2; i < artistCard.length; i += 1) {
      artistCard[i].style.display = 'none';
    }
    showCards = true;
    moreBtn.innerHTML = 'More <i id="btn_arrow" class="material-icons">keyboard_arrow_down</i>';
  }
});
