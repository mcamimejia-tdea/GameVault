import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "@react-native-vector-icons/fontawesome-free-solid"
import StackNavigator from "./StackNavigator"
import AddGameScreen from "../Screens/AddGame/AddGameScreen"
import GamingNewsScreen from "../Screens/GamingNews/GamingNewsScreen"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="GameListTab"
        component={StackNavigator}
        options={{ title: "Game List", tabBarIcon: ({ color, size }) => <Icon name="gamepad" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="AddGame"
        component={AddGameScreen}
        options={{ title: "Add Game", tabBarIcon: ({ color, size }) => <Icon name="circle-plus" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="GamingNews"
        component={GamingNewsScreen}
        options={{ title: "Gaming News", tabBarIcon: ({ color, size }) => <Icon name="newspaper" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}