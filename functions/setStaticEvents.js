import { changeAppMode } from "./changeAppMode.js";
import { matches } from "../helpers/matches.js";
import { hashRouter } from "./hashRouter.js";
import { pushFilterCardsIntoCardsContainer } from "./pushFilterCardsIntoCardsContainer.js";

export function setStaticEvents() {

    const d = document,
        w = window;
    
    d.onclick = function (e) {
        // ChangeMode
        if ( matches(e, '.change-mode', true) ) changeAppMode();

        // RegionsSelect
        if ( matches(e, '.regions-select', true) ){
            d.querySelector('.regions-select__ul').classList.toggle('regions-select__ul_active');
            d.querySelector('.regions-select__svg').classList.toggle('regions-select__svg_reverse');
        }
        if (matches(e, '.regions-select__li')) {
            d.querySelector('.regions-select__span').textContent = e.target.textContent;
            d.querySelector('.regions-select__ul').classList.remove('active');
            d.querySelector('.regions-select__svg').classList.remove('svgReverse');
            pushFilterCardsIntoCardsContainer();
        }

        // Card
        if ( matches(e, ".card", true) ) {
            const code = e.target.closest('.card').dataset['3code'];
            window.location.hash = `/countries/${code}`
            sessionStorage.setItem('numOfCards', JSON.stringify(d.querySelectorAll('.card').length));
        }

        // CountryDescription
        if ( matches(e, '.country-description__border-li', true) ) {
            const cca3Code = e.target.matches('li') ? e.target.dataset['cca3'] : e.target.closest('li').dataset['cca3'];
            window.location.hash = `/countries/${cca3Code}`
        }

        // BackButton
        if ( matches(e, '.back-button', true) ) history.go(-1);
    }

    d.onsubmit = function (e) {
        e.preventDefault();

        // SearchForm
        // if ( matches(e, '.search-form') ) {
        //     const countryName = e.target.countryName.value.trim();
        //     window.location.hash = countryName ? `/search?country=${countryName}` : '';
        // }
    }

    d.onkeyup = function (e) {
        // SearchForm
        if ( matches(e, '.search-form__input') ) {
            d.querySelector('.regions-select__span').textContent = 'All';
            const countryName = e.target.value.trim();
            window.location.hash = countryName ? `/search?country=${countryName}` : '';
        }
    }

    w.onhashchange = hashRouter;
}