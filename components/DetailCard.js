import BackButton from "./BackButton.js"
import CountryDescription from "./CountryDescription.js"

function DetailCard() {
    
    const $div = document.createElement('div');

    $div.classList.add('detail-card');
    
    $div.appendChild(BackButton())
    $div.appendChild(CountryDescription());

    return $div;
}

export default DetailCard;