import { Country } from './Country.js'
import { ApiCountry } from "./serviceCountry.js";

export class CountryView extends ApiCountry {
    private countries: Country[] = [];

    public async displayAllCountries() {
        try {
            this.countries = await this.getAllCounties();
            if (this.countries.length === 0) {
                throw new Error('No countries data available.');
            }
            this.renderCountries(this.countries);
        } catch (error) {
            this.showErrorMessage('Failed to display countries:' + error);
        }
    }

    public searchCountries(name: string) {

        if (this.checkIFCountriesExist(this.countries)) {
            return;
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

    public searchCountriesByRegion(region: string) {
        if (this.checkIFCountriesExist(this.countries)) {
            return;
        }
        try {
            if (region == 'all') {
                this.sectionCountries.innerHTML = '';
                this.renderCountries(this.countries);
            } else {
                const filteredCountries = this.countries.filter((country: Country) =>
                    country.region.toLowerCase().includes(region.toLowerCase())
                );

                if (filteredCountries.length === 0) {
                    throw new Error('No matching countries found.');
                }
                this.sectionCountries.innerHTML = '';
                this.renderCountries(filteredCountries);
            }

        } catch (error: any) {
            this.sectionCountries.innerHTML = '';
            this.showErrorMessage(error.message);
        }
    }

    public searchCountry(countryName: string) {
        const country = this.getAllCounties('/name/' + countryName);
        country.then(([data]) => {
            if (this.checkIFCountriesExist(data)) {
                return;
            }
            try {
                this.renderCountry(data);

            } catch (error: any) {
                this.sectionCountries.innerHTML = '';
                this.showErrorMessage(error.message);
            }
        });

    }


    private renderCountries(countries: Country[]) {
        const countriesOfFragment = document.createDocumentFragment();
        countries.forEach((country: Country) => {
            const element = document.createElement('article');
            element.classList.add('country-box');
            element.innerHTML = `
                    <a href="./detail.html?country=${country.name.common}">
                        <section>
                            <img class="flag-image" src="${country.flags.png}" alt="">
                        </section>
                        <section class="detail-box">
                            <header>
                                <h2 class="title">${country.name.common}</h2>
                            </header>
                            <section>
                                <ul>
                                    <li><span>Population: ${country.population.toLocaleString()}</span></li>
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
    private renderCountry(country: Country) {
        const countryName = document.getElementById('Name')!;
        const nativeName = document.getElementById('Native-Name')!;
        const population = document.getElementById('Population')!;
        const region = document.getElementById('Region')!;
        const subRegion = document.getElementById('Sub-Region')!;
        const capital = document.getElementById('Capital')!;
        const countryImage = document.getElementById('Country-Image') as HTMLImageElement;
        const domain = document.getElementById('Domain')!;
        const currencies = document.getElementById('Currencies')!;
        const languages = document.getElementById('Languages')!;
        const borderContainer = document.getElementById('border-container')!;
        countryName.textContent = country.name.common;
        nativeName.textContent = country.name.common;
        population.textContent = country.population.toLocaleString();
        region.textContent = country.region;
        subRegion.textContent = country.subregion;
        capital.textContent = country.capital;
        countryImage.src = country.flags.png;
        domain.textContent = country.tld;

        currencies.textContent = Object.values(country.currencies)
            .map((currency: any) => currency.name)
            .join(", ");

        languages.textContent = Object.values(country.languages).join(", ");
        if(country.borders){
            country.borders.forEach((border: any) => {
                const button = document.createElement('a');
                button.href = './detail.html?country=' + border;
                button.textContent = border;
                button.classList.add('btn');
                borderContainer.appendChild(button);
            });
        }else{
            borderContainer.parentElement!.remove();
        }
        

    }

    protected checkIFCountriesExist(countries: Country[]): boolean {
        if (countries.length === 0) {
            return true;
        }
        return false;
    }
}