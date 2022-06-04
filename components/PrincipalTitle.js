function PrincipalTitle() {

    const $h1 = document.createElement('h1');

    $h1.classList.add('principal-title');

    $h1.innerHTML = `<a href="/#">Where in the world?</a>`;
    
    return $h1;
}

export default PrincipalTitle;