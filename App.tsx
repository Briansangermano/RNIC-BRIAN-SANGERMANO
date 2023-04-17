/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './src/constants/theme'
import List from './src/screens/List';
import AddTask from './src/screens/AddTask';
import EditTask from './src/screens/EditTask';
import { TabParamsList } from './src/types/interfaces/navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Routes } from './src/types/enums/routes';
import Reducer from './src/redux/reducer'
const ListIcon = require('./src/assets/icons/list.svg').default;
const PlusIcon = require('./src/assets/icons/plus.svg').default;

// -------- REACT PERSIST --------

import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// -------------------------------


const App = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();
  const ListStack = createNativeStackNavigator<TabParamsList>();

  useEffect(() => {
    RNBootSplash.hide({ fade: true, duration: 500 });
  }, []);

  const ListStackScreen = () => {
    return (
      <ListStack.Navigator screenOptions={{ headerShown: false }}>
        <ListStack.Screen name={Routes.List} component={List} />
        <ListStack.Screen name={Routes.EditTask} component={EditTask} />
      </ListStack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: myTheme.colors.darkBlue,
              borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              fontSize: 13,
              fontFamily: 'Lato-Italic'
            }
          }}
        >
          <Tab.Screen
            name={Routes.Home}
            component={ListStackScreen}
            options={{
              tabBarIcon: ({ focused }) => <ListIcon stroke={focused ? '#2564c0' : 'grey'}/>,
            }}
          />
          <Tab.Screen
            name={Routes.AddTask}
            component={AddTask}
            options={{ tabBarIcon: ({ focused }) => <PlusIcon stroke={focused ? '#2564c0' : 'grey'}/>}}
          />
        </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
