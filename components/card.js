import {html} from 'uhtml';

export const card = (cardData) => html`<div>
<div class="card-wrapper">
  <div class="card-background" style=${"background: url("+cardData.image+") center center no-repeat"}></div>
  <div class="card-no-border">
  <div class="card-date">${cardData.year + " " + cardData.era}</div>
  <div class="card-content-wrapper">
    <div class="card-name" style="margin-bottom: 4px;border-top-right-radius: 12px;border-bottom-left-radius: 12px;">${cardData.name}</div>
    <div class="card-text">${cardData.text}</div>
    </div>
    </div>
</div>

<div class="card-wrapper">
<div class="card-background" style=${"background: url("+cardData.image+") center center no-repeat"}></div>
  <div class="card-border">
  <div class="card-content-wrapper">
    <div class="card-name">${cardData.name}</div>
    </div>
  </div>

</div>
</div>`