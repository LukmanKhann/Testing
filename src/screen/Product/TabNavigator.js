import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeProduct from './HomeProduct';


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator 
    initialRouteName="Products"
    >
      <Tab.Screen 
        name="Products" 
        component={HomeProduct}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen} 
      /> */}
    </Tab.Navigator>
  );
}

export default TabNavigator;
