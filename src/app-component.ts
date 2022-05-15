import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-component')
export class AppComponent extends LitElement {
  protected render() {
    return html`
     <nav class="grid grid-cols-2 items-center shadow-xl h-[100px] text-black/90">
      <div class="">
        <a href="/">
          <h1 class="text-4xl font-black ml-[12%]">LitElement app</h1>
        </a>
          </div>
      <div class="hidden md:flex justify-end mr-[12%]">
        <a class="text-lg uppercase mr-6" href="/">Home</a>
        <a class="mr-6 text-lg uppercase" href="/about">About</a>
        <a class="mr-6 text-lg uppercase" href="/contact">Contact</a>
      </div>
      <div class="md:hidden flex justify-end mr-[12%]">

      </div>
     </nav>
    `;
  }
  protected createRenderRoot() {
    return this;
  }
}