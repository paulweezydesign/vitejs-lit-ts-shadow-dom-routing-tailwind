import { html, LitElement } from 'lit';

import { router } from 'lit-element-router';

import './app-link';
import './app-main';

@customElement('home-button')
export class HomeButton extends LitElement {
  protected render() {
    return html`
        <button class="py-1 px-4 rounded-md text-lg text-center bg-blue-700 text-white/90 hover:scale-x shadow-lg" type="">Click me </button>
    `;
  }
  protected createRenderRoot() {
    return this;
  }
}
