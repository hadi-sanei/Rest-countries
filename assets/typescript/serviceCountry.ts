export class ApiCountry {
    private api: string = 'https://restcountries.com/v3.1';
    protected async getAllCounties(path:string='/all') {
        const api: Response = await fetch(this.api + path);
        const data: [] = await api.json();
        return data;
    }
}
