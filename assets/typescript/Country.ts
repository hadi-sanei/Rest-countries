export interface Country {
    name: {
        common:string
        official:string
    },
    flags: {
        png:string
    },
    region: string,
    capital: string,
    [key:string]:any,
}