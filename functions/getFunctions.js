import { get } from "../helpers/get.js";

export async function getAllTheCountries() {
    return get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3;');
}
export async function getCountriesByName(name) {
    return get(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,capital,cca3;`);
} 
export async function getCountryByCCA3Code(cca3Code) {
    return get(`https://restcountries.com/v3.1/alpha/${cca3Code}?fields=borders,name,flags,population,region,subregion,capital,tld,languages,currencies;`);
}
export async function getCountriesNamesAndCodesByCCA3Codes(cca3CodesArr) {
    return get(`https://restcountries.com/v3/alpha?codes=${cca3CodesArr.join(",")};fields=name,cca3;`);
}
