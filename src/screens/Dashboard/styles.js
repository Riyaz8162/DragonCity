import { SCREEN_WIDTH,SCREEN_HEIGHT,IS_RTL,IS_INVALID_STRING } from '../../utils'
import {I18nManager} from 'react-native'
const styles = {
    boldText: {fontSize: 16,lineHeight: 19,color: '#000',fontFamily:IS_RTL() ? 'GESSTEXTBOLD-BOLD': 'Shojumaru-Regular',width: SCREEN_WIDTH * .78,textAlign: 'left',fontWeight:'bold' },
    mediumText: {color: '#000', width: SCREEN_WIDTH * .14, fontSize: 12, fontFamily:IS_RTL() ? 'GE_SS_TWO_MEDIUM' : 'CALIBRI',textAlign:IS_RTL() ? 'right' : 'left',},
    tinyText: {color: '#000',fontSize: 12,fontFamily: 'CALIBRI', textAlign: 'center',marginTop: 12},
    normalText: {fontSize: 14,lineHeight: 19, color: '#000',fontFamily: 'Shojumaru-Regular',width: SCREEN_WIDTH * .78,textAlign: 'left',marginLeft: 17 },
    notificationNormalText: {  width: SCREEN_WIDTH * .78, fontSize: 13, fontWeight: '700', color: '#9098B1', lineHeight: 24, marginTop: 8,textAlign:IS_RTL()?'right':'left'},
    homeParentView: { flexDirection:'row',width:SCREEN_WIDTH*.9,alignSelf:'center'},
    notificatonTinyText:{width: SCREEN_WIDTH * .78,textAlign:IS_RTL()?'right':'left', fontSize: 10, fontWeight: '700', color: '#223263', lineHeight: 24, marginTop: 8},
    parentRedView: { justifyContent: 'center', marginTop: 6, marginLeft: 24 },
    redImage: { width: 52, height: 52, justifyContent: 'center', alignItems: 'center' },
    profileBoldText:{ fontSize: 14,lineHeight: 19, color: '#2B2B2B', fontFamily: 'CALIBRI', width: SCREEN_WIDTH * .62, textAlign: 'left',fontWeight:'bold',marginLeft: 17},
    profileMediumText:{fontSize:16,fonWeight:'normal',color:'#000000',fontFamily: 'CALIBRI',marginLeft:14,textAlign:IS_RTL()?'right':'left'},
    aprofileUserName:{color:'#ffffff',fontSize:24,fontFamily: 'CALIBRI',marginTop:12,marginBottom:16},
    profileImage:{width:20,height:24,justifyContent:'center'},
    profileMainView:{marginLeft:30, backgroundColor: '#fff', padding: 20, flexDirection:'row', justifyContent:'center',alignSelf:'center',alignSelf:'center',alignItems:'center'},
    subCatView:{width:SCREEN_WIDTH*.6,height:70,flexDirection:'row',marginLeft:'20%',marginTop:10},
    profilePlaceholder:{width:SCREEN_WIDTH * .72,height:SCREEN_HEIGHT*.05,borderRadius:8,borderColor:'#D8D8D8',borderWidth:.5,color:'#202020'},
    profileTinyText:{fontSize: 13, fontFamily: 'CALIBRI', color: '#9098B1', letterSpacing:0.5, marginTop: 16, lineHeight: 19,textAlign:IS_RTL()?'right':'left'},
    profileImagView:{alignItems: 'center', justifyContent: 'center', height: 134},
    modalTextView: { marginTop: 10,fontSize: 14,  color: "#3e3e3e",marginBottom: 10,textAlign:'center' },

}

export default styles;