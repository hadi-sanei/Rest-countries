export class ApiCountry {
    private api: string = 'https://restcountries.com/v3.1';

    protected async getAllCounties(path: string = '/all') {
        try {
            const response: Response = await fetch(this.api + path);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: any[] = await response.json();
            return data;
        } catch (error) {
            this.showErrorMessage('Failed to fetch countries:'+ error)
            return [];
        }
    }
    protected showErrorMessage(error: string) {
        const sectionCountries = document.getElementById('countries-section') as HTMLElement;
        const element = document.createElement('section');
        element.classList.add('message');
        element.textContent = error;
        sectionCountries.append(element);
    }
}