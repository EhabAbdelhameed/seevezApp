import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {RenderSvgIcon} from '../../../Components/atoms/svg';
import {Formik} from 'formik';
import InputView from '../../../Components/molecules/Input';
import Button from '../../../Components/molecules/Button';
import DonotHaveAccountSection from '../../../Components/molecules/DonotHaveAccountSection';
import AuthTopSection from '../../../Components/molecules/AuthTopSection';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {appColors} from '../../../theme/appColors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BigLogo, PDF} from 'assets/Svgs';
import {SafeAreaView} from 'react-native-safe-area-context';
import DocumentPicker from 'react-native-document-picker';
import {RegistSchema, RegistSchemaCompany} from '../../../Formik/schema';

import {useAppDispatch} from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import DeviceInfo from 'react-native-device-info';
import {useSelector} from 'react-redux';
import {selectIsSignedUp} from 'src/redux/auth';
const SignupTwo = () => {
  const signedUp = useSelector(selectIsSignedUp);
  const navigation = useNavigation<any>();
  const [email, setEmail] = React.useState('');
  const [deviceId, setDeviceId] = React.useState('');
  const [deviceVersion, setDeviceVersion] = React.useState('');
  const [deviceModel, setDeviceModel] = React.useState('');
  const [index, setIndex] = React.useState(false);
  const [tax_card_document, setTaxCardDocument] = React.useState([]);
  const [commercial_registration_document, setCommercialRegistrationDocument] =
    React.useState([]);

  const UineqId = async () => {
    const ff = await DeviceInfo.getUniqueId();
    setDeviceId(ff);
    console.log(deviceId);
    // return ff;
  };

  const DeviceVersion = async () => {
    const ff = await DeviceInfo.getVersion();
    setDeviceVersion(ff);
  };

  const DeviceModel = async () => {
    const ff = await DeviceInfo.getModel();
    setDeviceModel(ff);
  };

  useEffect(() => {
    signedUp && navigation.navigate('Verification', {email, type: 'register'});
  }, [signedUp]);

  useEffect(() => {
    UineqId();
    DeviceVersion();
    DeviceModel();
  }, []);
  const Dispatch = useAppDispatch();
  const uploadFile = async (type: any) => {
    console.log('hello');
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(res);
      if (type == '1') {
        setTaxCardDocument(res);
      } else {
        setCommercialRegistrationDocument(res);
      }
      // setFieldValue(name.replace(/\s/g, ''), {
      //   uri: res[0]?.uri,
      //   type: res[0]?.type,
      //   name: res[0]?.name,
      // });
    } catch (err) {
      // setFieldValue(name.replace(/\s/g, ''), '');
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const {work_type, title}: any = useRoute().params;
  console.log(work_type);
  return (
    // <View style={styles.container}>
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          // alignItems: "center",
          // paddingBottom: 30,
          backgroundColor: appColors.bg,
          paddingTop: 10,
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps={'handled'}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          {/* <Image source={require('../../../assets/images/logoWithName.png')} /> */}
          <BigLogo />
          {/* <RenderSvgIcon
            icon='LOGOWITHTITLE'
            width={100}
            height={50}
            style={{width:"100%",height:"100%"}}
          /> */}
        </View>
        <View style={styles.circles}>
          <RenderSvgIcon icon="CIRCLELOGIN" width={270} height={237} />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.blueCircle}>
            <RenderSvgIcon icon="CIRCLECV" width={64} height={32} />
          </View>
          <AuthTopSection
            title="Sign up"
            subtitle={
              title == 'Sign up as a job seeker'
                ? 'as a job seeker'
                : title == 'Sign up as a recruiter' && work_type !== 'Company'
                ? 'as a Freelancer recruiter'
                : work_type == 'Company'
                ? 'Company'
                : ''
            }
          />
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
              code: '',
              phone: '',
              taxId: '',
            }}
            validationSchema={
              work_type == 'Company' ? RegistSchemaCompany : RegistSchema
            }
            // validationSchema={work_type === 'Company' ? RegistSchemaCompany : RegistSchema}
            onSubmit={values => {
              setEmail(values.email);
              console.log(work_type?.toLowerCase());
              const formdata = new FormData();

              formdata.append('name', values.fullName);
              formdata.append(
                'country_code',
                values.code == '' ? '+20' : values.code.dial_code,
              );
              formdata.append('phone_number', values.phone);
              formdata.append('email', values.email);
              formdata.append('password', values.password);
              formdata.append('password_confirmation', values.confirmPassword);
              formdata.append('device_id', deviceId);
              formdata.append('device_kind', Platform.OS);
              formdata.append('device_model', deviceModel);
              formdata.append('device_version', deviceVersion);
              if (
                title != 'Sign up as a recruiter' &&
                work_type !== 'Company'
              ) {
                formdata.append('work_type', work_type?.toLowerCase());
                Dispatch(AuthThunks.doSignUpJobSeeker(formdata));
              } else if (work_type == 'Company') {
                console.log(tax_card_document);
                formdata.append('tax_id', '2585');
                formdata.append('tax_card_document', tax_card_document);
                formdata.append(
                  'commercial_registration_document',
                  commercial_registration_document,
                );
                Dispatch(AuthThunks.doSignUpCompany(formdata));
              } else {
                Dispatch(AuthThunks.doSignUpRecruiter(formdata));
              }
            }}>
            {(props: any) => (
              <View>
                <InputView
                  {...props}
                  name="fullName"
                  placeholder="Your full name"
                />
                <InputView {...props} name="phone" placeholder="Your phone" />
                <InputView
                  name="email"
                  placeholder="Write your email"
                  iconName={'RIGIHTININPUT'}
                  {...props}
                />
                {work_type == 'Company' ? (
                  <View>
                    <InputView
                      name="taxID"
                      placeholder="Enter the taxID"
                      iconName={'RIGIHTININPUT'}
                      {...props}
                    />
                    <TouchableOpacity
                      onPress={() => uploadFile('1')}
                      style={styles.DocStyle}>
                      <View style={{flexDirection: 'row'}}>
                        <PDF />
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 20,
                            color: '#15439D',
                          }}>
                          Upload Tax card
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => uploadFile('2')}
                      style={styles.DocStyle}>
                      <View style={{flexDirection: 'row'}}>
                        <PDF />
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 20,
                            color: '#15439D',
                          }}>
                          Upload commercial registration
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}
                <InputView
                  name="password"
                  placeholder="Write your password"
                  iconName={'EYE'}
                  secure={true}
                  {...props}
                />
                <InputView
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  iconName={'EYE'}
                  secure={true}
                  {...props}
                />
                <View style={styles.rowAgree}>
                  <TouchableOpacity
                    onPress={() => setIndex(!index)}
                    style={styles.Circle}>
                    <View style={index ? styles.innerCircle : null} />
                  </TouchableOpacity>
                  <Text style={styles.agree}>
                    I agree to the seevez{' '}
                    <Text style={styles.agreeLine}>terms & condiitions</Text>{' '}
                    and the seevez{' '}
                    <Text style={styles.agreeLine}>privacy policy</Text>
                  </Text>
                </View>
                <Button text="Sign up" onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
          <DonotHaveAccountSection noLang type="Log in" />
          <View style={{height: 50}} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupTwo;
