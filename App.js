import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {IconButton} from './components';
import { Provider } from 'react-redux';
import store from './Store'
import {
  AllEexpense,
  ManageExpense,
  RecentExpense,
} from './screens';
import {colors} from './assets/colors';

const BottamTab =createBottomTabNavigator();
const stack = createNativeStackNavigator();

const BottamNav =()=>{
  return(
  <BottamTab.Navigator screenOptions={({navigation})=>({
    headerTitleAlign:"center",
    headerStyle:{
      backgroundColor:colors.primary500
    },
    headerTintColor:"white",
    tabBarStyle:{backgroundColor:colors.primary500},
    tabBarActiveTintColor:colors.accent500,
    
    headerRight:({tintColor})=>{
      return(
        <IconButton 
        name="plus" 
        size={24} 
        color={tintColor}
        onPress={()=>{
          navigation.navigate("Manage expense")
        }}/>
      )
    }
  })}>
          <BottamTab.Screen
          name='Recent Expenses'
          component={RecentExpense}
          options={{
            tabBarIcon:({size,color})=>{
              return(<MaterialCommunityIcons name="timer-sand" size={size} color={color}/>)
            }
          }}
            />
          <BottamTab.Screen
          name='All Expenses'
          component={AllEexpense}
          options={{
            tabBarIcon:({size,color})=>{
              return(<MaterialCommunityIcons name="content-save-all-outline" size={size} color={color} />)
            }
          }}/>
  </BottamTab.Navigator>)
}
export default function App() {

  return (
    <>
    <StatusBar style='light'/>
    <Provider store={store}>
    <NavigationContainer>
        <stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:colors.primary500
            },
            headerTintColor:"white",
            headerTitleAlign:"center",
          }}>
          <stack.Screen
          name='Expense Overview'
          component={BottamNav}
          options={{
            headerShown:false
          }}/>
          <stack.Screen
          name='Manage expense'
          component={ManageExpense}
          options={{
            presentation:"modal"
          }}
         />
        </stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}

