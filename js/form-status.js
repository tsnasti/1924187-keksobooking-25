import {form, mapFiltersForm} from './user-form.js';

const adFieldset = form.querySelectorAll('fieldset');
const adFilterElements = mapFiltersForm.querySelectorAll('select, fieldset');

const addDisabledOnFilter = () => {
  mapFiltersForm.classList.add('map__filters--disabled');
  adFilterElements.forEach((filterElement) => {
    filterElement.disabled = true;
  });
};

const addDisabledStatus = () => {
  form.classList.add('ad-form--disabled');
  adFieldset.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  addDisabledOnFilter();
};

const addActiveStatus = () => {
  form.classList.remove('ad-form--disabled');
  adFieldset.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  mapFiltersForm.classList.remove('map__filters--disabled');
  adFilterElements.forEach((filterElement) => {
    filterElement.disabled = false;
  });
};

export {addDisabledStatus, addDisabledOnFilter, addActiveStatus};
