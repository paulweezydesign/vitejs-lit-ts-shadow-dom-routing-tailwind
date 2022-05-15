import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('contact-page')
export class ContactPage extends LitElement {
    protected render() {
        return html`
    <section class="">
        <div class="">
            <h1 class="text-9xl text-center">Contact us</h1>
        </div>
    </section>

    `;
    }
    protected createRenderRoot() {
        return this;
    }
}