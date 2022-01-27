import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("converter-element")
class ConverterElement extends LitElement {
  @property({
    converter: (attrValue: string | null) => {
      if (attrValue) return new Date(attrValue);
      else return undefined;
    },
  })
  date?: Date;

  render() {
    return html`
      ${this.date
        ? html`<p>
            Date =
            <span id="datefield">${this.date.toLocaleDateString()}</span>
          </p>`
        : "No date set"}
    `;
  }
}
