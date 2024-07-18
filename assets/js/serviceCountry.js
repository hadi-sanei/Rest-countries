export class ApiCountry {
    constructor() {
        this.sectionCountries = document.getElementById('countries-section');
        this.api = 'https://restcountries.com/v3.1';
    }
    async getAllCounties(path = '/all') {
        try {
            const response = await fetch(this.api + path);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            this.showErrorMessage('Failed to fetch countries:' + error);
            return [];
        }
    }
    showErrorMessage(error) {
        this.sectionCountries.innerHTML = '';
        const element = document.createElement('section');
        element.classList.add('message');
        element.textContent = error;
        this.sectionCountries.append(element);
    }
}
