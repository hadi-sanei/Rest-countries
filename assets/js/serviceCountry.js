var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ApiCountry {
    constructor() {
        this.api = 'https://restcountries.com/v3.1';
    }
    getAllCounties() {
        return __awaiter(this, arguments, void 0, function* (path = '/all') {
            try {
                const response = yield fetch(this.api + path);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = yield response.json();
                return data;
            }
            catch (error) {
                this.showErrorMessage('Failed to fetch countries:' + error);
                return [];
            }
        });
    }
    showErrorMessage(error) {
        const sectionCountries = document.getElementById('countries-section');
        const element = document.createElement('section');
        element.classList.add('message');
        element.textContent = error;
        sectionCountries.append(element);
    }
}
