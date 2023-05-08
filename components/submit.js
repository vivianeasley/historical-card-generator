import {html} from 'uhtml';
import { editor} from "../main"
import {store} from "../store";

const { getState } = store

export const submitControls = () => {

    const updateCards = () => {
        const newCardData = editor.getValue();
        getState().addACard(newCardData);
    }

    return html`<div class="controls-wrapper"><button style="background-color: #9bff9b" onclick=${updateCards}> Create a card </button><button style="background-color: #ff9b9b" onclick=${()=>getState().removeAll()}> Delete Cards </button></div>`
}