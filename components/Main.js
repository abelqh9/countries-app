import CardsContainer from "./CardsContainer.js"
import DetailCard from "./DetailCard.js"
import SearchFormAndRegionsSelectContainer from "./SearchFormAndRegionsSelectContainer.js"

function Main() {

    const $main = document.createElement('main'),
        hash = window.location.hash;

    $main.classList.add('body__main', 'main');

    if ( !hash || hash.includes('search?') ) {
        $main.appendChild(SearchFormAndRegionsSelectContainer());
        $main.appendChild(CardsContainer());
    }else if ( hash.includes('countries/') ){
        $main.appendChild(DetailCard());
    }

    return $main;
}

export default Main;