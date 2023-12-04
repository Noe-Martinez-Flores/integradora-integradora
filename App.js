import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/modules/auth/auth';
import TabContainer from './src/config/TabNavigation';
import { StatusBar } from 'expo-status-bar';
NavigationBar.setBackgroundColorAsync("#00000000");

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <StatusBar backgroundColor='#00000000'/>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerTransparent : true, headerShown : false}}   />
        <Stack.Screen name="TabContainer" component={TabContainer} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
