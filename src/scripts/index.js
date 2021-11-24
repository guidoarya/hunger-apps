import 'regenerator-runtime';
import '../styles/main.min.css';
import '../styles/responsive.min.css';
import './components/navbar-component.js';
import './components/hero-component.js';
import './components/header-component.js';
import './components/footer-component.js';
import './components/form-reviews.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

// Drawer
const hamburgerBar = document.getElementById('ham-bar');
const closeBar = document.getElementById('close-bar');
const ulNavbar = document.getElementById('ul-navbar');

hamburgerBar.addEventListener('click', () => {
  closeBar.classList.add('show-icon');
  hamburgerBar.classList.add('unshow-icon');
  ulNavbar.classList.add('show');
});

closeBar.addEventListener('click', () => {
  hamburgerBar.classList.remove('unshow-icon');
  closeBar.classList.remove('show-icon');
  ulNavbar.classList.remove('show');
});

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
