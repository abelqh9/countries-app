import Card from "../components/Card.js";
import { setInfinityScroll } from "./setInfinityScroll.js";

export async function pushFilterCardsIntoCardsContainer() {

    const d = document;
    const $CardsContainer = d.querySelector('.cards-container');

  
    const activeFilter = d.getElementById('activeFilter').textContent;
    const theUserIsSearching = window.location.hash.split('=')[1] ? true : false;
    const countriesArr = JSON.parse(sessionStorage.getItem(theUserIsSearching 
        ? 'countriesArrFromSearch' 
        : 'countriesArr'));

    const CountriesArrWithFilter = countriesArr.filter(country => {
        if (activeFilter !== 'All') return country.region === activeFilter;
        return true;
    })

    const $fragment = document.createDocumentFragment();
    const numOfcardsToPush = JSON.parse(sessionStorage.getItem('numOfCards')) || 16;
    for (let i = 0; i < numOfcardsToPush; i++) {
        if (CountriesArrWithFilter[i]) {
            $fragment.appendChild(Card(CountriesArrWithFilter[i]));
        } else {
            break;
        }
    }

    $CardsContainer.innerHTML = '';
    $CardsContainer.appendChild($fragment);
    setInfinityScroll(CountriesArrWithFilter, numOfcardsToPush, 16, $CardsContainer);
}