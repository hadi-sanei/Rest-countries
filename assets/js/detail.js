import { theme_switch } from './theme-switch.js';
import { CountryView } from './CountryView.js';
const countryView = new CountryView;
const searchParams = new URLSearchParams(window.location.search);
theme_switch();
function getParameterKeys() {
    const urlParams = new URLSearchParams(window.location.search);
    const keys = [];
    for (const key of urlParams.keys()) {
        keys.push(key);
    }
    return keys;
}
const parameterKey = getParameterKeys()[0];
if (searchParams.get(parameterKey)) {
    countryView.searchCountry(parameterKey, searchParams.get(parameterKey));
}
else {
    window.location.href = window.location.origin + '/Rest-countries/index.html';
}
