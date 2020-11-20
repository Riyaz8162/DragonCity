import {I18nManager} from 'react-native';

export const InvalidText = (str) => {
    if(str == "null" || 
       str == null   || 
       str == "undefined" || 
       str == undefined ||
       str == ""
      ){
        return true;
    }
    return false;
}

export const checkIsRTL = () =>{
    return I18nManager.isRTL ;
}