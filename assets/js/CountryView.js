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
    }
    showingCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const countries = yield this.getAllCounties();
            const countriesOfFragment = document.createDocumentFragment();
            countries.forEach((country) => {
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
                `;
                countriesOfFragment.appendChild(element);
            });
            this.sectionCountries.appendChild(countriesOfFragment);
        });
    }
}
