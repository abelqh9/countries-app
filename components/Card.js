function Card(country) {

    const { name, flags, population, region, capital, cca3 } = country;

    const $section = document.createElement('section');

    $section.setAttribute('data-3code', cca3);

    $section.classList.add('card');

    $section.innerHTML = `
        <img class='card__img' src="${flags.svg}" alt="${name.common} flag">
        <div class="card__data-container">
           <h2 class='card__h2'>${name.common}</h2>
           <span class='card__span'><b class='card__b'>Population:</b> ${population.toLocaleString('en-US')}</span>
           <span class='card__span'><b class='card__b'>Region:</b> ${region}</span>
           <span class='card__span'><b class='card__b'>Capital:</b> ${capital}</span>
        </div>
    `;

    return $section;
}

export default Card