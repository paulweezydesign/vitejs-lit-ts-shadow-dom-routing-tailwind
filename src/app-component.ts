import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import "/src/nav-bar.ts";


@customElement('app-component')
export class AppComponent extends LitElement {
  protected render() {
    return html`
  <nav-bar></nav-bar>
     <main class="">
       <h1 class="text-9xl text-center font-black">Tailwind app</h1>
     </main>
    `;
  }
  protected createRenderRoot() {
    return this;
  }
}
