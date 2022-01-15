import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Navbar from "./screens/Navbar";
import Localisation from "./screens/Localisation";
import Cart from "./screens/Cart";
import RegisterScreen from "./screens/RegisterScreen";
import Login from "./screens/SigninScreen";
import LandingPage from "./screens/LandingPage";
import Footer from "./screens/Footer";
import NotificationScreen from "./screens/Notification";
import ReminderScreen from "./screens/Reminder"
import ProfileScreen from "./screens/Profile"
import VerificationScreen from "./screens/Verification";
import AboutScreen from "./screens/About";
import EditProfile from './screens/editProfile';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registerScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verification"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="localisation"
          component={Localisation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: true }}
        />
          <Stack.Screen
          name="Reminder"
          component={ReminderScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{ headerShown: false}}
        />
        
        
        
        
      </Stack.Navigator>
      {/* <Footer/> */}
    </NavigationContainer>
  );
}
