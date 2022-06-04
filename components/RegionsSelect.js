function RegionsSelect() {
    const $div = document.createElement('div');

    $div.classList.add('regions-select');

    $div.innerHTML = `
        <div class="regions-select__filter-selected-container">
            <span class='regions-select__span' id="activeFilter">Filter by Region</span>

            <svg class='regions-select__svg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
        </div>
        <ul class="regions-select__ul">
            <li class="regions-select__li">All</li>
            <li class="regions-select__li">Africa</li>
            <li class="regions-select__li">Americas</li>
            <li class="regions-select__li">Asia</li>
            <li class="regions-select__li">Europe</li>
            <li class="regions-select__li">Oceania</li>
        </ul>
    `;

    return $div;
}

export default RegionsSelect;