import CardsContainer from "../components/CardsContainer.js";
import DetailCard from "../components/DetailCard.js";
import SearchFormAndRegionsSelectContainer from "../components/SearchFormAndRegionsSelectContainer.js";
import { pushCardsIntoCardsContainer } from "./pushCardsIntoCardsContainer.js";
import { pushInfoIntoDetailCard } from "./pushInfoIntoDetailCard.js";

export function hashRouter(e) {

    const $Main = document.querySelector('main'),
        hash = window.location.hash,
        cameFromASearch = e.oldURL.includes('search'),
        cameFromADetailCard = e.oldURL.includes('countries/')
    ;
    
    if ( !hash  ) { // HOME

        if ( cameFromADetailCard ) {
            document.querySelector('.detail-card').remove();
            $Main.appendChild(SearchFormAndRegionsSelectContainer());
            $Main.appendChild(CardsContainer());
        }

        if (JSON.parse(sessionStorage.getItem('numOfCards')) < 16) sessionStorage.setItem('numOfCards', JSON.stringify(16))

        pushCardsIntoCardsContainer();

        document.querySelector('.search-form').countryName.value = '';
        
    } else if( hash.includes('search?') ){ // SEARCH

        if ( cameFromADetailCard ) {
            document.querySelector('.detail-card').remove();
            $Main.appendChild(SearchFormAndRegionsSelectContainer());
            $Main.appendChild(CardsContainer());
        }

        if (JSON.parse(sessionStorage.getItem('numOfCards')) < 16) sessionStorage.setItem('numOfCards', JSON.stringify(16))

        // if i came from search or home i want to make fetch directly
        // if i came from a detail card i want to search if a have the data before
        pushCardsIntoCardsContainer(!cameFromADetailCard);

    } else if ( hash.includes('countries/') ){ // DETAIL CARD

        if ( !cameFromADetailCard || cameFromASearch ) {
            window.onscroll = null
            document.querySelector('.cards-container').remove();
            document.querySelector('.search-form-and-regions-select-container').remove();
            $Main.appendChild(DetailCard());
        }

        pushInfoIntoDetailCard();

    }
}