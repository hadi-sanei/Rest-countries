import { Country } from './Country.js'
import { ApiCountry } from "./serviceCountry.js";
export class CountryView extends ApiCountry {
    private sectionCountries = document.getElementById('countries-section') as HTMLElement;
    public showingCountries() {
    }
}