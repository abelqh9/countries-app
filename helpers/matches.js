export function matches(e, selector, matchInnerElements) {
    if ( e.target.matches(selector) )return true;
    if ( matchInnerElements && e.target.matches(selector + ' *') )return true;
    return false;
}