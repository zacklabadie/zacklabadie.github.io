// Define footer as custom element
class Footer extends HTMLElement {
  constructor() {
    super();
  }

    connectedCallback() {
      this.innerHTML = `
          <footer>
              <a href="https://www.linkedin.com/in/zacklabadie/" target="_blank">
                  <img src="images/icons/linked-in.svg" alt="LinkedIn">
              </a>
              <a href="https://dribbble.com/zacklabadie" target="_blank">
                  <img src="images/icons/dribbble.svg" alt="Dribbble">
              </a>
              <a href="https://github.com/zacklabadie" target="_blank">
                  <img src="images/icons/github.svg" alt="GitHub">
              </a>
              <a href="https://twitter.com/ZackLabadie" target="_blank">
                  <img src="images/icons/twitter.svg" alt="Twitter">
              </a>
              <a href="https://www.instagram.com/zacklabadie/" target="_blank">
                  <img src="images/icons/instagram.svg" alt="Instagram">
              </a>
              <a href="https://open.spotify.com/user/zacklabadie" target="_blank">
                  <img src="images/icons/spotify.svg" alt="Spotify">
              </a>
              <span>Designed &#38; built by Zack<br>
              Set in Founders Grotesk</span>
          </footer>
      `;
    }
}

//Register custom footer element
customElements.define('footer-component', Footer);

//Built using Kris Koishigawa's tutorial: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
