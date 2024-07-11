import { ApiCountry } from "./serviceCountry.js";
export class CountryView extends ApiCountry {
    constructor() {
        super(...arguments);
        this.sectionCountries = document.getElementById('countries-section');
    }
    showingCountries() {
    }
}
