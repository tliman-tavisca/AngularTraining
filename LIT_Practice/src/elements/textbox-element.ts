import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators";

@customElement("textbox-element")
export class TextBoxElement extends LitElement {
  // Add css with static styles and are scoped to this element
  static styles = css`
    .text {
      color: red;
    }
  `;

  // Input as properties
  @property() inputText: string = "Hello";

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  protected render() {
    return html`
      <input type="text" class="text" value="${this.inputText}" /><input />
    `;
  }
}
