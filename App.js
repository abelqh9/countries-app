import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { checkTheAppMode } from "./functions/checkTheAppMode.js";
import { pushCardsIntoCardsContainer } from "./functions/pushCardsIntoCardsContainer.js";
import { pushInfoIntoDetailCard } from "./functions/pushInfoIntoDetailCard.js";
import { setStaticEvents } from "./functions/setStaticEvents.js";

function App() {

    checkTheAppMode();
    sessionStorage.clear();

    const $root = document.getElementById('root'),
        hash = window.location.hash;

    $root.appendChild(Header());
    $root.appendChild(Main());

    if ( !hash || hash.includes('search?') ) pushCardsIntoCardsContainer();
    if (hash.includes('countries/')) pushInfoIntoDetailCard();

    setStaticEvents();
}

export default App;