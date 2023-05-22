import {StyleSheet} from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: {
    fontSize: SIZES.large,
    // fontFamily: FONT.bold,
    color: COLORS.primary,
    textAlign: 'center',
  },
  companyInfoBox: {},
  companyName: {},
  locationBox: {},
  locationImage: {},
  locationName: {},
});

export default styles;