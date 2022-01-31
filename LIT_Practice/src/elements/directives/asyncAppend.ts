import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { asyncAppend } from "lit/directives/async-append.js";

async function* tossCoins(count: number) {
  for (let i = 0; i < count; i++) {
    yield Math.random() > 0.5 ? "Head" : "Tail";
    await new Promise((r) => setTimeout(r, 1000));
  }
}

@customElement("asyncappend-element")
class AsyncappendElement extends LitElement {
  @state()
  private tosses = tossCoins(10);

  render() {
    return html` <ul>
      ${asyncAppend(this.tosses, (v) => html`<li>${v}</li>`)}
    </ul>`;
  }
}