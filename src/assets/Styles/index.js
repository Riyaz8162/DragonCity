
import {
    I18nManager,
} from 'react-native';
import {SCREEN_WIDTH,IS_RTL} from '../../utils'
const styles = {
    textMedium: {
        fontSize: 28,
        lineHeight: 37,
        fontFamily: 'Shojumaru-Regular',
        color: '#fff'
    },
    textInputStyle:{
        flex: 1, color: '#fff', textAlign:IS_RTL()?'right':'left' 
    },
    textSmall: {
        fontSize: 18,
        lineHeight: 18,
        color: '#ffffff',
        fontFamily: 'Calibri Regular'
    },
    loginSmallText: {
        fontSize: 12,
        color: '#ffffff',
        lineHeight: 15,
        fontFamily: 'Calibri Regular',
    },
    normalText: {
        fontSize: 16,
        color: '#ffffff',
        lineHeight: 19,
        fontFamily: 'Calibri Regular',
        textAlign: 'center'
    },
    placeHolderName:{
        fontSize: 12,
        color: '#ffffff',
        lineHeight: 16,
        fontFamily: 'Calibri Regular',
        textAlign:IS_RTL()?'right':'left',
        alignSelf: 'center',  alignItems: 'center', width: SCREEN_WIDTH*.76,
    },
  tinyText:{
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'CALIBRI',
    textAlign: 'center'
  },
  circleParentView:{flexDirection:'column',width:80,height:70,justifyContent:'center',alignItems:'center'},

  yellowCircle: {
    width: 46,
    height: 46,
    borderRadius: 46/2,
    backgroundColor:'#EAAC4A',justifyContent:'center',
    marginTop:15,
    marginBottom:15
},
redcircle: {
    width: 34,
    height: 34,
    borderRadius: 34/2,
    borderColor:'#E01A1F',
    borderWidth:4,
    backgroundColor:'transparent',
    alignSelf:'center'
},

    welcomeText: {
        fontSize: 28,
        color: '#ffffff',
        fontFamily: 'Shojumaru-Regular',
        textAlign:'left'
    },
    sectionStyle: {
        flexDirection: 'row' ,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 5,
        margin: 10,
        width: SCREEN_WIDTH * .76,
        
    },
    
    imageStyle: {
        padding: 10,
        margin: 5,
        width: 10.46, height:7.1,
      
    },
    loginParentView: { width: 144, height: 20, backgroundColor: 'transparent', justifyContent: 'center', alignSelf: 'center', flexDirection:IS_RTL() ? 'row-reverse' :'row', borderRadius: 10, borderWidth: 1, borderColor: '#fff', justifyContent: 'space-around' }
}
export default styles;