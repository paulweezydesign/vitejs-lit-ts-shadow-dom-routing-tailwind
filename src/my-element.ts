import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  protected render() {
    return html`
      <p>By default template renders into shadow DOM.</p>
    `;
  }
}