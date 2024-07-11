export class ApiCountry {
    private api: string = 'https://restcountries.com/v3.1';
    public async getAllCounties() {
        const api: Response = await fetch(this.api + '/all');
        const data: [] = await api.json();
        return data;
    }
}
