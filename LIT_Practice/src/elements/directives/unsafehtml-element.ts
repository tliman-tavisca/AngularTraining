import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

const markup = "<h3>Some HTML to render.</h3>";

const svg = '<circle cx="50" cy="50" r="40" fill="red" />';

@customElement("unsafe-html-element")
class UnSafeHtmlElement extends LitElement {
  render() {
    return html`
      <h3>unsafeHTML directive example</h3>
      Look out, potentially unsafe HTML ahead: ${unsafeHTML(markup)}

      <h3>unsafeSVG directive example</h3>
      Look out, potentially unsafe SVG ahead:
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        ${unsafeSVG(svg)}
      </svg>
    `;
  }
}
