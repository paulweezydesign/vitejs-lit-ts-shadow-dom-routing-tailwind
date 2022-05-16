import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import "/src/nav-bar.ts";
import  '/src/components/home-button.ts';

@customElement('app-component')
export class AppComponent extends LitElement {
  protected render() {
    return html`
  <nav-bar></nav-bar>
     <main class="">
       <h1 class="text-9xl text-center font-black">Tailwind app</h1>
       <home-button></home-button>
       <a class="text-md py-3 px-7 bg-blue-700 text-white text-center rounded" href="/about.html">About</a>
     </main>
    `;
  }
  protected createRenderRoot() {
    return this;
  }
}
