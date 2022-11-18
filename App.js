import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './Screen/InputScreen';
import ResultScreen from './Screen/ResultScreen';
import ColorInput from './Component/ColorInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import store from './Redux/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Button Settings') {
        iconName = focused
          ? 'ios-settings'
          : 'ios-settings-outline';
      } else if (route.name === 'Result') {
        iconName = focused ? 'ios-list' : 'ios-list-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
  })}>
  <Tab.Screen name="Button Settings" component={InputScreen}/>
  <Tab.Screen name="Result" component={ResultScreen} />
  </Tab.Navigator>
);
}
export default function App() {
  return (
  <Provider store={store}>
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Button" component={TabNavigator} options = {{headerShown:false }}/>
  <Stack.Screen name="Color" component={ColorInput} />
  </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
