import Card from "../components/Card.js";
import { getAllTheCountries, getCountriesByName } from "./getFunctions.js";
import { clearLoader, setLoader } from "../helpers/loaderFunctions.js";
import { setInfinityScroll } from "./setInfinityScroll.js";
import { setErrorMessage } from "../helpers/setErrorMessage.js";

export async function pushCardsIntoCardsContainer(doFecthDirectly = false) {

    const d = document;
    const $CardsContainer = d.querySelector('.cards-container');

    const theUserIsSearching = window.location.hash.split('=')[1] ? true : false;
    const searchWord = window.location.hash.split('=')[1];
    const sessionStorageKey = theUserIsSearching ? 'countriesArrFromSearch' : 'countriesArr';
    const countriesInSessionStorage = JSON.parse(sessionStorage.getItem(sessionStorageKey));
    
    let countriesArr = [];

    setLoader($CardsContainer);

    if ( !countriesInSessionStorage || doFecthDirectly) {
        try {
            countriesArr = await (searchWord
                ? getCountriesByName(searchWord)
                : getAllTheCountries())
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(countriesArr));
        } catch (err) {
            err.message = (err.status === 404)
                ? '😕 Sorry, We don\'t have any results for your search 😕'
                : '😕 Sorry, something went wrong with the API 😕';
            return setErrorMessage($CardsContainer, err);
        }
    }else{ countriesArr = countriesInSessionStorage; }

    clearLoader($CardsContainer);

    const $fragment = document.createDocumentFragment();
    const numOfcardsToPush = JSON.parse(sessionStorage.getItem('numOfCards')) || 16;

    for (let i = 0; i < numOfcardsToPush; i++) {
        if (countriesArr[i]) {
            $fragment.appendChild(Card(countriesArr[i]));
        } else { break; }
    }

    $CardsContainer.innerHTML = '';
    $CardsContainer.appendChild($fragment);

    setInfinityScroll(countriesArr, numOfcardsToPush, 16, $CardsContainer);
}