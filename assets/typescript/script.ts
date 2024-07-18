import { theme_switch } from "./theme-switch.js"
import { CountryView } from "./CountryView.js";
const countryView: CountryView = new CountryView;
countryView.displayAllCountries();
const change_theme = document.getElementById('change-theme') as HTMLElement;
const search = document.getElementById('search') as HTMLInputElement;
const filter_box = document.getElementById('filter-box') as HTMLInputElement;
const filter_buttons = document.querySelectorAll('.filter-button')!;

// switch the theme
theme_switch();

//searching the country
search.addEventListener('keyup', (e: any) => {
    countryView.searchCountries(search.value)
});
filter_box.addEventListener('click', function (e) {
    this.children[2].classList.toggle('hidden');
    this.children[1].classList.toggle('active');
});

// click buttons of filter
filter_buttons.forEach((filter_button) => {
    filter_button.addEventListener('click', function (this: HTMLElement, e: Event) {
        if (this.textContent == 'all') {
            filter_box.children[0].textContent = 'Filter by Region';
        } else {
            filter_box.children[0].textContent = this.textContent;
        }
        countryView.searchCountriesByRegion(this.children[0].textContent?.trim() as string)
    });
});