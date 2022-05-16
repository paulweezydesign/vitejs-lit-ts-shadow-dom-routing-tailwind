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
        <!--menu overlay-->
    <!-- The overlay -->
    <div id="myNav" class="overlay">

        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

        <!-- Overlay content -->
        <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>

    </div>
    `;
    }
    protected createRenderRoot() {
        return this;
    }
}