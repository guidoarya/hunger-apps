class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 tabindex="0" id="header-title" class="header-title">Explore Restaurant</h2>`;
  }
}

customElements.define('header-component', HeaderComponent);
