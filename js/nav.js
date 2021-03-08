// Define nav as custom element
class Nav extends HTMLElement {
  constructor() {
    super();
  }

    connectedCallback() {
      this.innerHTML = `
        <nav>
            <div id="nav-links">
                <a href="#work">work</a>
                <a href="#bio">bio</a>
            </div>
            <div id="nav-monogram">
                <a href="index.html#welcome">
                    <img src="images/icons/monogram.svg" alt="ZL">
                </a>
            </div>
            <div id="nav-icons">
                <a href="files/ZackLabadie-Resume.pdf" target="_blank">
                    <img src="images/icons/download.svg" alt="Download resume">
                </a>
                <a href="mailto:hey@zack.design">
                    <img src="images/icons/mail.svg" alt="Email">
                </a>
            </div>
        </nav>
      `;
    }
}

//Register custom nav element
customElements.define('nav-component', Nav);

//Built using Kris Koishigawa's tutorial: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
