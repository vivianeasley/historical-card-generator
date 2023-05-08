import {html} from 'uhtml';
import { submitControls} from "./submit";
import {card} from "./card"

export const app = (cardData) => {
    return html`
        <div class="area">${submitControls()}</div>
        <div class="area" style="text-align: center">${cardData.map((cardData)=>html`${card(cardData)}`)}</div>`
}