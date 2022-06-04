export function extracTheCurrencies(obj) {
    const currenciesArr = [];
    for (const key in obj) {
        currenciesArr.push(obj[key].name);
    }
    return currenciesArr.join(', ');
}