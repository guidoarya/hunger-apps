class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero-inner">
        <h1 tabindex="0" class="hero-title">FIND YOUR FAVORITE <br />RESTAURANT</h1>
        <p class="hero-tagline">Find the best restaurant in your city</p>
        <form action="#header-title">
          <input type="submit" class="hero-button" value="FIND NOW!"></input>
        </form>
      </div>
    </div>`;
  }
}

customElements.define('hero-component', HeroComponent);
