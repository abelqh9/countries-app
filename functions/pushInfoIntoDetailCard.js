import { extracTheCurrencies } from "./extracTheCurrencies.js";
import { getCountriesNamesAndCodesByCCA3Codes, getCountryByCCA3Code } from "./getFunctions.js";
import { clearLoader, setLoader } from "../helpers/loaderFunctions.js";
import { setErrorMessage } from "../helpers/setErrorMessage.js";

export async function pushInfoIntoDetailCard() {

    const $countryDescription = document.querySelector('.country-description'),
        codeOfTheCountry = window.location.hash.split('/')[2];

    setLoader($countryDescription);
    
    let countryInfo, borderCountriesTags = '';
    
    try {
        countryInfo = await getCountryByCCA3Code(codeOfTheCountry);
        
        if (countryInfo.borders[0]) {
            const response2 = await getCountriesNamesAndCodesByCCA3Codes(countryInfo.borders);
            response2.forEach(borderCountry => {
                borderCountriesTags += `<li class='country-description__border-li' data-cca3=${borderCountry.cca3} ><a>${borderCountry.name.common}</a></li>`
            });
        }
    } catch (err) {
        err.message = '😕 Sorry, We don\'t have any results for your search 😕';
        return setErrorMessage($countryDescription, err);
    }

    clearLoader($countryDescription);

    const { flags, name, population, region, subregion, capital, tld, languages, currencies } = countryInfo;

    $countryDescription.innerHTML = `
        <img class='country-description__img' src="${flags.svg}">
        <div class='country-description__info-container'>
            <h2 class='country-description__h2'>${name.common}</h2>
            <div class='country-description__data-lists-container'>
                <ul class='country-description__data-ul'>
                    <li><span class='country-description__span'>Oficial Name:</span> ${name.official}</li>
                    <li><span class='country-description__span'>Population:</span> ${population.toLocaleString('en-US')}</li>
                    <li><span class='country-description__span'>Region:</span> ${region}</li>
                    <li><span class='country-description__span'>Sub Region:</span> ${subregion}</li>
                    <li><span class='country-description__span'>Capital:</span> ${capital[0]}</li>
                </ul>
                <ul class='country-description__data-ul'>
                    <li><span class='country-description__span'>Top Level Domain:</span> ${tld[0]}</li>
                    <li><span class='country-description__span'>Currencies:</span> ${extracTheCurrencies(currencies)}</li>
                    <li><span class='country-description__span'>Languages:</span> ${Object.values(languages).join(", ")}</li>
                </ul>
            </div>
            <div class="country-description__borders-list-container">
                ${borderCountriesTags
                    ? `<span class='country-description__span'>Border Countries:</span>
                        <ul class="country-description__borders-ul">
                            ${borderCountriesTags}
                        </ul>`
                    :`<span class='country-description__span'>No Border Countries</span>`}
            </div>    
        </div>
    `;
}