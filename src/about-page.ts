import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
    protected render() {
        return html`
    <section class="">
        <div class="">
            <h1 class="text-9xl text-center">About us</h1>
        </div>
        <a class="text-xl py-2 px-6 bg-blue-700 text-white text-center rounded" href="/index.html">Home</a>
    </section>

    `;
    }
    protected createRenderRoot() {
        return this;
    }
}