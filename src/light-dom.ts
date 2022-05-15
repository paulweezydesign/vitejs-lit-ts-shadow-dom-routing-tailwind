import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('light-dom')
export class LightDom extends LitElement {
  protected render() {
    return html`
      <p class="text-blue-700">Custom rendering without shadow DOM (note, styling leaks in).</p>
    `;
  }
  protected createRenderRoot() {
    return this;
  }
}
