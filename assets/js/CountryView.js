var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiCountry } from "./serviceCountry.js";
export class CountryView extends ApiCountry {
    constructor() {
        super(...arguments);
        this.sectionCountries = document.getElementById('countries-section');
        this.countries = [];
    }
    displayAllCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.countries = yield this.getAllCounties();
                if (this.countries.length === 0) {
                    throw new Error('No countries data available.');
                }
                this.renderCountries(this.countries);
            }
            catch (error) {
                this.showErrorMessage('Failed to display countries:' + error);
            }
        });
    }
    searchCountry(name) {
        if (this.countries.length === 0) {
            return;
        }
        try {
            const filteredCountries = this.countries.filter((country) => country.name.common.toLowerCase().includes(name.toLowerCase()));
            if (filteredCountries.length === 0) {
                throw new Error('No matching countries found.');
            }
            this.sectionCountries.innerHTML = '';
            this.renderCountries(filteredCountries);
        }
        catch (error) {
            this.sectionCountries.innerHTML = '';
            this.showErrorMessage(error.message);
        }
    }
    renderCountries(countries) {
        const countriesOfFragment = document.createDocumentFragment();
        countries.forEach((country) => {
            const element = document.createElement('article');
            element.classList.add('country-box');
            let t = document.createElement('h2').classList.add('title');
            element.innerHTML = `
                    <a href="./detail.html">
                        <section>
                            <img class="flag-image" src="${country.flags.png}" alt="">
                        </section>
                        <section class="detail-box">
                            <header>
                                <h2 class="title">${country.name.common}</h2>
                            </header>
                            <section>
                                <ul>
                                    <li><span>Population: ${country.population}</span></li>
                                    <li><span>Region: ${country.region}</span></li>
                                    <li><span>Capital: ${country.capital}</span></li>
                                </ul>
                            </section>
                        </section>
                    </a>
                `;
            countriesOfFragment.appendChild(element);
        });
        this.sectionCountries.appendChild(countriesOfFragment);
    }
}
