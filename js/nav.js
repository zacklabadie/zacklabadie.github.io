// Define nav as custom element
class Nav extends HTMLElement {
  constructor() {
    super();
  }

    connectedCallback() {
      this.innerHTML = `
        <nav>
            <div id="nav-links">
                <a href="index.html#work">work</a>
                <a href="index.html#bio">bio</a>
            </div>
            <div id="nav-monogram">
                <a href="index.html#welcome">
                    <img src="images/icons/monogram.svg" alt="ZL">
                </a>
            </div>
            <div id="nav-email">
                <a href="mailto:hey@zack.design">
                    <span>Email</span>
                    <img src="images/icons/arrow-ne.svg">
                </a>
            </div>
        </nav>
      `;
    }
}

//Register custom nav element
customElements.define('nav-component', Nav);

//Built using Kris Koishigawa's tutorial: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
