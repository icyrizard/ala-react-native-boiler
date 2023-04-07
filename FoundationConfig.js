// ComponentsConfig.js

import { Colors, ThemeManager } from 'react-native-ui-lib';

// with plain object
ThemeManager.setComponentTheme('Card', {
  borderRadius: 8
});

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props, context) => {
  // 'square' is not an original Button prop, but a custom prop that can
  // be used to create different variations of buttons in your app
  return {
    backgroundColor: Colors.primaryColor,
  };
});

ThemeManager.setComponentTheme('Toast', (props, context) => {
  return {
    backgroundColor: Colors.primaryColor,
  };
});

// with a dynamic function
ThemeManager.setComponentTheme('Text', (props, context) => {
  return {
    textColor: Colors.primaryColor,
  };
});

ThemeManager.setComponentTheme('SortableList', (props, context) => {
  return {
    backgroundColor: Colors.primaryColor,
  };
});

ThemeManager.setComponentTheme('SortableListItem', (props, context) => {
  return {
    backgroundColor: Colors.primaryColor,
  };
});
