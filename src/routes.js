import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';

import { Icon } from 'react-native-elements';

import Home from '~/pages/Home';
import Settings from '~/pages/Settings';
import Notification from '~/pages/Notification';

const configs = {
  defaultNavigationOptions: {
    headerStyle: {
      height: 16 * 4,
      backgroundColor: '#FFFFFF', // or 'white
      borderBottomColor: 'transparent',
      elevation: 0, // for android
    },
    headerBackImage: <Icon name="ios-arrow-round-back" type="ionicon" color="#323643" size={40} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: 16,
      paddingRight: 16,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: 16,
    },
  },
};
const screens = createStackNavigator(
  {
    Home,
    Notification,
    Settings,
  },
  configs,
);

export default createAppContainer(screens);