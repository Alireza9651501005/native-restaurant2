import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../../consts/colors';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import {Badge} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faShoppingCart,
  faHeart,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const state = useSelector(state => state);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHome} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faEnvelope} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHeart} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <>
              <FontAwesomeIcon icon={faShoppingCart} size={30} color={color} />
              <Badge
                status="error"
                value={state.length}
                containerStyle={{position: 'absolute', top: -1, left: 8}}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  imgg: {
    width: 30,
    height: 30,
  },
});
export default BottomNavigator;
