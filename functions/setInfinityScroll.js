import Card from "../components/Card.js";

export function setInfinityScroll(arrOfElements, startIndex, numOfCardsToPush, $containerToPush) {

    window.onscroll = e => {

        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        
        if (scrollTop + clientHeight > scrollHeight - 100 ) {
    
            const $fragment = document.createDocumentFragment();
    
            for (let i = startIndex; i < startIndex + numOfCardsToPush; i ++) {
                
                if ( arrOfElements[i] ) {
                    $fragment.appendChild(Card(arrOfElements[i]));
                }else{
                    window.onscroll = null;
                    break;
                }
            }
    
            $containerToPush.appendChild($fragment);

            startIndex += numOfCardsToPush;
        }
    }
}