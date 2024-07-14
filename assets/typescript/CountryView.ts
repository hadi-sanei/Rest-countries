import { Country } from './Country.js'
import { ApiCountry } from "./serviceCountry.js";

export class CountryView extends ApiCountry {
    private sectionCountries = document.getElementById('countries-section') as HTMLElement;
    private countries: Country[] = [];

    public async displayAllCountries() {
        try {
            this.countries = await this.getAllCounties();
            if (this.countries.length === 0) {
                throw new Error('No countries data available.');
            }
            this.renderCountries(this.countries);
        } catch (error) {
            this.showErrorMessage('Failed to display countries:' + error)

        }
    }

    public searchCountry(name: string) {
        if (this.countries.length === 0) {
            return
        }
        try {
            const filteredCountries = this.countries.filter((country: Country) =>
                country.name.common.toLowerCase().includes(name.toLowerCase())
            );

            if (filteredCountries.length === 0) {
                throw new Error('No matching countries found.');
            }
            this.sectionCountries.innerHTML = '';
            this.renderCountries(filteredCountries);
        } catch (error: any) {
            this.sectionCountries.innerHTML = '';
            this.showErrorMessage(error.message);
        }
    }

    private renderCountries(countries: Country[]) {
        const countriesOfFragment = document.createDocumentFragment();
        countries.forEach((country: Country) => {
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