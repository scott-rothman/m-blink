class MBlink extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const text = document.createElement('span');

    text.classList.add('text');

    text.innerHTML = this.innerHTML;

    const styles = document.createElement('style');
    styles.textContent = `

      .text {
        animation: blink 1s linear;
        animation-timing-function: steps(1, end);
        animation-iteration-count: infinite;
        white-space: nowrap;
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

    `;

    shadow.appendChild(styles);
    shadow.appendChild(text);
  }
}

customElements.define('m-blink', MBlink);
