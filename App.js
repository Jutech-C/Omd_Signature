import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import InputField from './screens/InputField';
import OmdSignature from './screens/omdSignature'

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
  // <Navigator />
  <NavigationContainer>
  <Stack.Navigator initialRouteName='InputField' >
  <Stack.Screen name='InputField' component={InputField} options={{title:"Kindly provide the following details", headerTitleStyle: {color: 'grey',fontWeight: 'bold',fontSize: 25}}}/>
  <Stack.Screen name='OmdSignature' component={OmdSignature} options={{title:"OMD Signature", headerTitleStyle: {color: 'red',fontWeight: 'bold',fontSize: 25,}}}/> 
  
 </Stack.Navigator>
  </NavigationContainer>

  )
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     padding:7,
//     justifyContent:'center',
//     flex:1
//   },
// });