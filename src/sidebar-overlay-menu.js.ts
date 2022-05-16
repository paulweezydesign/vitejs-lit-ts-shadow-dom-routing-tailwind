import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('sidebar-overlay')
export class SidebarOverlay extends LitElement {
    protected render() {
        return html`
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

            <!-- Use any element to open/show the overlay navigation menu -->
            <span onclick="openNav()">open</span>

    `;
    }
    protected createRenderRoot() {
        return this;
    }
}