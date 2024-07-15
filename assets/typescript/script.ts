import { ApiCountry } from "./serviceCountry.js";
import { CountryView } from "./CountryView.js";
const countryView: CountryView = new CountryView;
countryView.displayAllCountries();
const change_theme = document.getElementById('change-theme') as HTMLElement;
const search = document.getElementById('search') as HTMLInputElement;
const filter_box = document.getElementById('filter-box') as HTMLInputElement;
const filter_buttons = document.querySelectorAll('.filter-button')!;

// changing the theme
if (document.cookie.includes('theme=dark')) {
    document.body.classList.add('dark-theme');
}
change_theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        document.cookie = `theme=dark`;
        return;
    }
    document.cookie = 'theme=dark;max-age=0';
});

//searching the country
search.addEventListener('keyup', (e: any) => {
    countryView.searchCountry(search.value)
});
filter_box.addEventListener('click', function (e) {
    this.children[1].classList.toggle('hidden');
    this.children[0].classList.toggle('active');
});

// click buttons of filter
filter_buttons.forEach((filter_button) => {
    filter_button.addEventListener('click', function (e) {
        console.log('object');
    });
});