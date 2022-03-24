function theme() {
  if (localStorage.getItem('nightmode')) {
    document.body.classList.add('night');
  }
}

theme();

const btnNight = document.getElementById('btnNight');

btnNight.addEventListener('click', () => {
  if (localStorage.getItem('nightmode')) {
    document.body.classList.remove('night');
    localStorage.removeItem('nightmode');
  } else {
    document.body.classList.add('night');
    localStorage.setItem('nightmode', 'activated');
  }
});
