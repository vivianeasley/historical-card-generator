import {JSONEditor} from "@json-editor/json-editor"; // https://github.com/json-editor/json-editor
import {html, render} from 'uhtml'; // https://github.com/WebReflection/uhtml
import {app} from "./components/app"
import {store} from "./store";
const { getState, setState, subscribe } = store

const element = document.getElementById('json-editor-js');

export const editor = new JSONEditor(element, {
  schema: {
    type: "object",
    title: "Card",
    properties: {
      name: {
        type: "string"
      },
      year: {
        type: "integer"
      },
      era: {
        type: "string",
        enum: [
          "C.E.",
          "B.C.E.",
        ]
      },
      image: {
        type: "string"
      },
      text: {
        type: "string"
      },
    }
  }
});

async function initApp () {
  const cardData = await getState().cards;
  if (!cardData) {
    render(document.querySelector("#app"), html`${app([])}`);
  } else {
    render(document.querySelector("#app"), html`${app(cardData)}`);
  }

}

initApp();

subscribe(initApp);

    