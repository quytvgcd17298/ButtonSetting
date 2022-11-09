import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './Screen/InputScreen';
import ResultScreen from './Screen/ResultScreen';
import ColorInput from './Component/ColorInput';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
  <Tab.Navigator>
  <Tab.Screen name="Button Settings" component={InputScreen}/>
  <Tab.Screen name="Result" component={ResultScreen} />
  </Tab.Navigator>
);
}
export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Button" component={TabNavigator} options = {{headerShown:false }}/>
  <Stack.Screen name="Color" component={ColorInput} />
  </Stack.Navigator>
  </NavigationContainer>
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
