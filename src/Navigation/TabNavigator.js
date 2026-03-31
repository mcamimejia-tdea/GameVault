import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
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
        options={{ title: "Game List" }}
      />
      <Tab.Screen
        name="AddGame"
        component={AddGameScreen}
        options={{ title: "Add Game" }}
      />
      <Tab.Screen
        name="GamingNews"
        component={GamingNewsScreen}
        options={{ title: "Gaming News" }}
      />
    </Tab.Navigator>
  )
}