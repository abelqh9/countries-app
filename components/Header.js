import ChangeMode from "./ChangeMode.js";
import PrincipalTitle from "./PrincipalTitle.js";

function Header() {

    const $header = document.createElement('header');

    $header.classList.add('header');
    
    $header.appendChild(PrincipalTitle());
    $header.appendChild(ChangeMode());

    return $header;
}

export default Header;