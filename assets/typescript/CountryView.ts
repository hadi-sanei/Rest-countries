import { Country } from './Country.js'
import { ApiCountry } from "./serviceCountry.js";
export class CountryView extends ApiCountry {
    private sectionCountries = document.getElementById('countries-section') as HTMLElement;
    public async showingCountries() {
        const countries=await this.getAllCounties();
        const countriesOfFragment=document.createDocumentFragment();
        countries.forEach((country: Country) => {
            const element = document.createElement('article');
            element.classList.add('country-box');
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
                                <li><span>Region:${country.region} </span></li>
                                <li><span>Capital: ${country.capital}</span></li>
                            </ul>
                        </section>
                    </section>
                </a>
                `
                countriesOfFragment.appendChild(element);
            });
            this.sectionCountries.appendChild(countriesOfFragment);
    }
}