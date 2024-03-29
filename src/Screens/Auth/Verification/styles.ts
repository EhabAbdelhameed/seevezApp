import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/appColors';
import { appSizes } from '../../../theme/appSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  logoContainer: {
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    backgroundColor: appColors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    zIndex: 10,
    height: "100%",
    paddingHorizontal: appSizes.padding_x,
    marginTop:-40
  },
  img:{
    width:"100%",
    height:appSizes.height/2.1
  },
  circles: {
    position: 'absolute',
    top: -155,
    width: appSizes.width,
    alignItems: 'center',
    zIndex: -1,
  },
  blueCircle: {
    position: 'absolute',
    top: -15,
    width: appSizes.width,
    alignItems: 'center',
  },

  
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: appSizes.spacing_m,
  },
  orText: {
    color: '#B9B9B9',
    fontSize: 16,
    fontWeight: '500',
  },
  line: {
    width: 51,
    height: 1,
    backgroundColor: '#B9B9B9',
  },
  loginTextContainer: {
    marginTop: appSizes.spacing_s,
    flexDirection: 'row',
    flexBasis: 'auto',
    justifyContent: 'space-between',
  },
  verificationText:{
    color: appColors.black,
    fontSize: appSizes.font_xxxxl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: appSizes.spacing_s-1,
    marginTop:-10
  },
  verificationText2: {
    color: appColors.black,
    fontSize: appSizes.font_xs,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: appSizes.spacing_m,
  },
  resendCode:{
    color: appColors.primary,
    fontSize: appSizes.font_xs,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: appSizes.spacing_m,
    textDecorationLine:"underline"
  }


});

export default styles;
