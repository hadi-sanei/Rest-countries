import { theme_switch } from './theme-switch.js';
import { CountryView } from './CountryView.js';
const countryView = new CountryView;
const searchParams = new URLSearchParams(window.location.search);
theme_switch();
if (searchParams.get('country')) {
    countryView.searchCountry(searchParams.get('country'));
}
else {
    window.location.href = 'index.html';
}
