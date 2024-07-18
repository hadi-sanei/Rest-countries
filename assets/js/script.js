import { theme_switch } from "./theme-switch.js";
import { CountryView } from "./CountryView.js";
const countryView = new CountryView;
countryView.displayAllCountries();
const change_theme = document.getElementById('change-theme');
const search = document.getElementById('search');
const filter_box = document.getElementById('filter-box');
const filter_buttons = document.querySelectorAll('.filter-button');
theme_switch();
search.addEventListener('keyup', (e) => {
    countryView.searchCountries(search.value);
});
filter_box.addEventListener('click', function (e) {
    this.children[2].classList.toggle('hidden');
    this.children[1].classList.toggle('active');
});
filter_buttons.forEach((filter_button) => {
    filter_button.addEventListener('click', function (e) {
        var _a;
        if (this.textContent == 'all') {
            filter_box.children[0].textContent = 'Filter by Region';
        }
        else {
            filter_box.children[0].textContent = this.textContent;
        }
        countryView.searchCountriesByRegion((_a = this.children[0].textContent) === null || _a === void 0 ? void 0 : _a.trim());
    });
});
