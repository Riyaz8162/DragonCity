import React from 'react';
import { View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppBG = (props) => {
  return(
  <View style={{flex: 1,}}>
    <LinearGradient
      colors={['#960004', '#690104','#960004']}
      start={{x: 1.2, y: 0.4}}
      style={styles.gradientStyle}
      >
       {props.children}

    </LinearGradient>
  </View>
)};

const styles = {
    gradientStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
    }
}
export default AppBG;