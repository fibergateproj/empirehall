import map from './components/map';

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('map')) {
    map();
  }
}, {passive: true});
