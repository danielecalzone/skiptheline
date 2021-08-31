import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LogBox } from 'react-native';

import {
  LoginScreen,
  RegisterScreen,
  HomeScreen,
  SupermarketDetailScreen,
  PrenotationList,
  PrenotationScreen
} from './screens';

LogBox.ignoreAllLogs();//Ignore all log notifications
const Router = createStackNavigator(
  {
    LoginScreen,
    RegisterScreen,
    HomeScreen,
    SupermarketDetailScreen,
    PrenotationList,
    PrenotationScreen
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);