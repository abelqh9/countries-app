export function setErrorMessage($containerElement, errorObj) {

    $containerElement.classList.add('loaderOrErrorContainer');

    const pStyles = `
        font-size: 2rem;
        color: var(--Text);
        border-radius: 0.5rem;
        font-weight: bold;
        text-align: center;
    `,
    spanStyles = `
        color: red;
    `;

    $containerElement.innerHTML = `
        <p class='errorTag' style="${pStyles}" >${errorObj.message} <br> 🚧 <span style="${spanStyles}">${errorObj.status}</span> 🚧</p>
    `;
}