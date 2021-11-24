class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#header-title" class="skip-link">Go To Content</a>
    <nav id="drawer" class="nav">
      <div class="navbar">
        <label class="brand-logo"><a href="/"><img src="../images/logo/logo.png" alt="brand logo" /></a></label>
        <label for="icon" class="bar">
          <button aria-label="open navbar menu" id="ham-bar" class="hamburger-bar">☰</button>
          <button aria-label="close navbar menu" id="close-bar" class="close-bar">✖</button>
        </label>

        <ul id="ul-navbar">
          <li><a href="#/home">HOME</a></li>
          <li><a href="#/favorite">FAVORITE</a></li>
          <li><a href="https://www.linkedin.com/in/guido-aryasatya-29b7931b4/" target="_blank" rel="noreferrer">CONTACT</a></li>
        </ul>
      </div>
    </nav>`;
  }
}

customElements.define('navbar-component', NavbarComponent);
