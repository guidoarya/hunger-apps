class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p tabindex="0" class="footer">Copyright ©2021 Hunger by Guido Aryasatya</p>`;
  }
}

customElements.define('footer-component', FooterComponent);
