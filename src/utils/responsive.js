import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const responsiveHeight = p => (p * Height) / 100;
export const responsiveWidth = p => (p * Width) / 100;
