import {getData} from './api.js';
import {addDisabledStatus} from './form-status.js';
import {renderMap, renderCards} from './map.js';
import {changeEvent, resetFiltres} from './map-filter.js';
import {debounce} from './util.js';

import './user-form.js';
import './price-slider.js';
import  './photo-files.js';

addDisabledStatus();
renderMap();

const RERENDER_DELAY = 500;

getData((cards) => {
  renderCards(cards);
  changeEvent(debounce(
    () => renderCards(cards),
    RERENDER_DELAY,
  ));
  resetFiltres(() => renderCards(cards));
});
