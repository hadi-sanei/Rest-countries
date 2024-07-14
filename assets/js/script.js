import { CountryView } from "./CountryView.js";
const countryView = new CountryView;
countryView.displayAllCountries();
const change_theme = document.getElementById('change-theme');
const search = document.getElementById('search');
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
search.addEventListener('keyup', (e) => {
    countryView.searchCountry(search.value);
});
