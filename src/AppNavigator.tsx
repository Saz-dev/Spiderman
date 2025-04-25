import {
  createNavigationContainerRef,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {CustomTheme, LightTheme} from './Theme/AppTheme';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Homescreen from './Screens/HomeScreen';


export type RootStackParamList = {
    Login: undefined,
    Home: undefined
}

const Stack =  createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [currentTheme, setCurrentTheme] = useState<CustomTheme>(LightTheme);
  const navigationRef = createNavigationContainerRef();

  const [isAuthenticated, setIsAuthenticated] = useState("");

    useEffect(() => {
      const fetchAuthStatus = async () => {
        try {
          const value = await AsyncStorage.getItem("isAuthenticated");
          setIsAuthenticated(value ?? "");
        } catch (e) {
          console.log("Failed to load auth status", e);
        }
      }
      fetchAuthStatus()
    } ,[])
    
  
  return (
    <NavigationContainer
      theme={currentTheme}
      ref={navigationRef}>

        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
           {isAuthenticated == 'false' ? 
           <>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    cardStyle: { backgroundColor: LightTheme.colors.background }
                }}
                />
            </>
             : 
              <>
              <Stack.Screen
                name='Home'
                component={Homescreen}
                options={{
                  cardStyle: { backgroundColor: LightTheme.colors.background}
                }}/>
              
              </>
            
            }
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;