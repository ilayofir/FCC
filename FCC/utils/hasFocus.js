import { merge as _merge } from 'lodash';

function hasFocus(element){
    if(element && element.children){
        for (let i = 0; i < element.children.length; i++) {
            if(element.children[i] === document.activeElement) return true;
        }
    }
    return false;
}

export default hasFocus