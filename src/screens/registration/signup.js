/*Sign up*/
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  I18nManager,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import commonStyle from '../../assets/Styles';
import {useTranslation} from 'react-i18next';
import Button from '../../templates/ButtonLarge';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils';
import {DatePickerDialog} from 'react-native-datepicker-dialog';
import moment from 'moment';

const Signup = React.forwardRef((props,ref) => {
  const {t, i18n} = useTranslation();
  let [isValidateemailInput, setisValidateemailInput] = useState(1);
  let [isValidatephnInput, setisValidatephnInput] = useState(1);
  let [isValidatenameInput, setisValidatenameInput] = useState(1);
  let [isValidatepwdInput, setisValidatepwdInput] = useState(1);
  let [isValidateconfirmpwdInput, setisValidateconfirmpwdInput] = useState(1);
  const [textname, setTextname] = useState('');
  const [textemail, setTextemail] = useState('');
  const [textmbl, setTextmbl] = useState('');
  const [textpwd, setTextpwd] = useState('');
  const [textconfirmpwd, setTextconfirmpwd] = useState('');
  const [dobDate, setdobdate] = useState(null);
  const [dobFmt, setDobfmt] = useState('12/12/2012');
  const [isDob, setIsDob] = useState('');
  const dobDialog = useRef();
  const onDOBPress = () => {
    let dobDate = dobDate;
    if (!dobDate || dobDate == null) {
      dobDate = new Date();
      setdobdate(dobDate);
    }
    //To open the dialog
    dobDialog.current.open({
      date: dobDate,
      maxDate: new Date(), //To restirct future date
    });
  };

  const onDOBDatePicked = (date) => {
    setdobdate(date);

    let datePick = moment(date).format('DD-MMM-YYYY');
    console.log('Is datePick', datePick);
    setDobfmt(datePick);
  };
  const name = (text) => {
    setTextname(text);
    if (text == undefined || text == '') {
      setisValidatenameInput(0);
    } else {
      setisValidatenameInput(1);
    }
  };
  const email = (text) => {
    setTextemail(text);
    if (text == undefined || text == '') {
      setisValidateemailInput(0);
    } else {
      setisValidateemailInput(1);
    }
  };
  const mobile = (text) => {
    setTextmbl(text);
    if (text == undefined || text == '') {
      setisValidatephnInput(0);
    } else {
      setisValidatephnInput(1);
    }
  };
  const password = (text) => {
    setTextpwd(text);
    if (text == undefined || text == '') {
      setisValidatepwdInput(0);
    } else {
      setisValidatepwdInput(1);
    }
  };
  const confirmpwd = (text) => {
    setTextconfirmpwd(text);
    if (text == undefined || text == '') {
      setisValidateconfirmpwdInput(0);
    } else {
      setisValidateconfirmpwdInput(1);
    }
  };

  const signup = () => {
    // debugger;
    // // if (textname == undefined || textname == "" && textemail == undefined || textemail == "" && textmbl == undefined || textmbl == "" && textpwd == undefined || textpwd == "" && textconfirmpwd == undefined || textconfirmpwd == "") {

    // // setisValidatephnInput(0);
    // // setisValidateemailInput(0);
    // // setisValidatenameInput(0);
    // // setisValidatepwdInput(0);
    // // setisValidateconfirmpwdInput(0);
    // // }
    // //   else {
    // // setisValidatephnInput(1);
    // // setisValidateemailInput(1);
    // // setisValidatenameInput(1);
    // // setisValidatepwdInput(1);
    // // setisValidateconfirmpwdInput(1);
    // //   }
    // if (
    //   textname == undefined ||
    //   textname == '' ||
    //   textemail == undefined ||
    //   textemail == '' ||
    //   textmbl == undefined ||
    //   textmbl == '' ||
    //   textpwd == undefined ||
    //   textpwd == '' ||
    //   textconfirmpwd == undefined ||
    //   textconfirmpwd == ''
    // ) {
    //   if (textname == undefined || textname == '') {
    //     setisValidatenameInput(0);
    //   } else {
    //     setisValidatenameInput(1);
    //   }
    //   if (textemail == undefined || textemail == '') {
    //     setisValidateemailInput(0);
    //   } else {
    //     setisValidateemailInput(1);
    //   }
    //   if (textmbl == undefined || textmbl == '') {
    //     setisValidatephnInput(0);
    //   } else {
    //     setisValidatephnInput(1);
    //   }
    //   if (textpwd == undefined || textpwd == '') {
    //     setisValidatepwdInput(0);
    //   } else {
    //     setisValidatepwdInput(1);
    //   }
    //   if (textconfirmpwd == undefined || textconfirmpwd == '') {
    //     setisValidateconfirmpwdInput(0);
    //   } else {
    //     setisValidateconfirmpwdInput(1);
    //   }
    //   if (textpwd != textconfirmpwd) {
    //     alert('Password mismatched');
    //   }
    // } else {
    //   alert('Api calling');
    // }
    props.navigate('BottomNavigation');
  };

  return (
    <KeyboardAvoidingView>
      <View style={{ width: SCREEN_WIDTH * .94,  }}>
        <Text style={[commonStyle.welcomeText, { flexWrap: 'wrap', width: SCREEN_WIDTH * .8, margin: 35, marginLeft: 26 }]}>Create Account</Text>

        <Text style={[commonStyle.placeHolderName]}>Full Name</Text>
        <TextInput
          value={setTextname}
          onChangeText={name}
          placeholder="Enter Name"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          style={[commonStyle.sectionStyle, { marginBottom: '6%', margin: 0, color: '#fff',textAlign:I18nManager.isRTL?'right':'left' }]}
        />
        {/* <View style={{ marginLeft: 30,width: "80%",height:"3%" ,alignItems: "flex-start" }}> */}
        {isValidatenameInput === 0 ?
          <Text style={[commonStyle.placeHolderName,{color:'#000',marginBottom:10}]}>*Shouldn't be blank</Text>
          : null}
        {/* </View> */}

        <Text style={commonStyle.placeHolderName}>Email</Text>
        <TextInput
          
          value={setTextemail}
          onChangeText={email}
          placeholder="abc@gmail.com"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          style={[commonStyle.sectionStyle, { marginBottom: '6%',textAlign:I18nManager.isRTL?'right':'left', margin: 0, color: '#fff' }]}
        />
        {isValidateemailInput === 0 ?
          <Text style={[commonStyle.placeHolderName,{color:'#000',marginBottom:10}]}>*Shouldn't be blank</Text>
          : null}
        <Text style={commonStyle.placeHolderName}>Mobile Number</Text>
        <View
          style={[
            commonStyle.sectionStyle,
            {flexDirection: 'row', marginBottom: '6%'},
          ]}>
          <Text style={commonStyle.loginSmallText}>+973</Text>
          <Image
            style={{width: 8, height: 6, marginLeft: 8}}
            source={require('../../assets/images/down.png')}
          />
          <TextInput
            style={{ flex: 1, color: '#fff', marginLeft: 5,textAlign:I18nManager.isRTL?'right':'left' }}
            value={setTextmbl}
            onChangeText={mobile}
            maxLength={10}
            keyboardType={'phone-pad'}
            placeholder="0123456789"
            placeholderTextColor="#fff"
            underlineColorAndroid="transparent"

          /></View>
        {isValidatephnInput === 0 ?
          <Text style={[commonStyle.placeHolderName,{color:'#000',marginBottom:10}]}>*Shouldn't be blank</Text>
          : null}
        <Text style={commonStyle.placeHolderName}>Date of Birth</Text>
        <TouchableOpacity onPress={onDOBPress.bind(this)}>
          <TextInput
            editable={false}
            label="Date of Birth"
            mode="outlined"
            value={dobFmt}
            onChangeText={onDOBDatePicked}
            style={[commonStyle.sectionStyle, { marginBottom: '6%', margin: 0, color: '#fff',textAlign:I18nManager.isRTL?'right':'left' }]}
            selectionColor={'#f0275d'}
            theme={{
              roundness: 10,
              colors: {
                placeholder: '#000',
                text: '#000',
                primary: '#000',
                underlineColor: '#000',
                fontSize: 16,
                paddingLeft: 5,
              },
            }}
          />
          <DatePickerDialog
            ref={dobDialog}
            onDatePicked={onDOBDatePicked.bind(this)}
          />
        </TouchableOpacity>

        <Text style={commonStyle.placeHolderName}>Password</Text>
        <TextInput
          ref={ref}
          style={{flex: 1, color: '#fff'}}
          value={setTextpwd}
          onChangeText={password}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          style={[commonStyle.sectionStyle, { marginBottom: '6%', margin: 0, color: '#fff',textAlign:I18nManager.isRTL?'right':'left'}]}
        />
        {isValidatepwdInput === 0 ?
          <Text style={[commonStyle.placeHolderName,{color:'#000',marginBottom:10}]}>*Shouldn't be blank</Text>
          : null}
        <Text style={commonStyle.placeHolderName}>Confirm Password</Text>
        <TextInput
          style={{flex: 1, color: '#fff'}}
          value={setTextconfirmpwd}
          onChangeText={confirmpwd}
          placeholder="Confirm Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          style={[commonStyle.sectionStyle, { marginBottom: '6%', margin: 0, color: '#fff',textAlign:I18nManager.isRTL?'right':'left' }]}
        />
        {isValidateconfirmpwdInput === 0 ?
           <Text style={[commonStyle.placeHolderName,{color:'#000',marginBottom:10}]}>*Shouldn't be blank</Text>
          : null}
        <Button
          text="CREATE ACCOUNT"
          type="outlined"
          bordered
          size="small"
          onPress={signup}
        />

        <Text style={commonStyle.normalText} onPress={()=>props.navigate('BottomNavigation')}>SKIP</Text>

        <Text
          style={[
            commonStyle.loginSmallText,
            {textAlign: 'center', marginTop: 12},
          ]}>
          By registering you agree to{' '}
          <Text
            style={[
              commonStyle.loginSmallText,
              {textAlign: 'center', marginTop: 12, color: '#b98e54'},
            ]}>
            Terms & Conditions
          </Text>
        </Text>
        <Text
          style={[
            commonStyle.loginSmallText,
            {textAlign: 'center', marginBottom: 34},
          ]}>
          and{' '}
          <Text
            style={[
              commonStyle.loginSmallText,
              {textAlign: 'center', marginTop: 12, color: '#b98e54'},
            ]}>
            Privacy Policy
          </Text>
          <Text> of the Dragon City Bahrain</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
});

export default Signup;
