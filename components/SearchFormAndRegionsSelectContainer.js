import SearchForm from "./SearchForm.js";
import RegionsSelect from "./RegionsSelect.js";

function SearchFormAndRegionsSelectContainer() {

    const $div = document.createElement('div');

    $div.classList.add('search-form-and-regions-select-container');

    $div.appendChild(SearchForm());
    $div.appendChild(RegionsSelect());

    return $div;
}

export default SearchFormAndRegionsSelectContainer;