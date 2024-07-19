export interface Country {
    name: {
        common:string
        official:string,
        nativeName:string,
    },
    flags: {
        png:string,
        svg:string,
    },
    region: string,
    capital: string,
    [key:string]:any,
}