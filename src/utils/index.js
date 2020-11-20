import {Dimensions} from 'react-native';
import {InvalidText,checkIsRTL} from './UtillMethods';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const THEME_PATH = '../assets/themes/';

export const IS_INVALID_STRING = InvalidText;

export const IS_RTL = checkIsRTL;



