// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function InstagramScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Instagram!</Text>
    </View>
  );
}

function FacebookScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Facebook!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Instagram') {
              iconName = focused
                ? 'instagram'
                : 'instagram';
            } else if (route.name === 'Facebook') {
              iconName = focused ? 'facebook-square' : 'facebook-square';
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Instagram" component={InstagramScreen} />
        <Tab.Screen name="Facebook" component={FacebookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
