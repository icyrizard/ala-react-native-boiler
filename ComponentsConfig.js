// FoundationConfig.js

import { Colors, Typography, Spacings, ThemeManager } from 'react-native-ui-lib';

Colors.loadColors({
  primaryColor: '#56997E',
  secondaryColor: '#E1A852',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C',
  error: '#ff2442',
  success: '#00CD8B',
  elementColor: '#ddcece',
  text: '#20303C',
  backgroundColor: 'red',
});

Colors.loadSchemes({
  light: {
    screenBG: '#F4EADF',
    textColor: Colors.grey20,
    textColorContrast: Colors.white,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
    backgroundColor: 'red',
    primaryColor: Colors.primaryColor,
    primary: Colors.primaryColor,
    $textPrimary: Colors.primaryColor,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    textColorContrast: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20,
    backgroundColor: 'red',
    primaryColor: Colors.primaryColor,
    primary: Colors.primaryColor,
    $textPrimary: Colors.primaryColor,
  }
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 20, fontWeight: '400'}
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});