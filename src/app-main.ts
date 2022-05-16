import  {LitElement, html} from "lit-element";
import  {outlet} from "lit-element-router";

@outlet
export class AppMain extends LitElement {
   render() {
       return html`
        <slot></slot>
       `;
    }
}