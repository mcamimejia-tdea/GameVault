import { createStackNavigator } from "@react-navigation/stack"
import GameListScreen from "../Screens/GameList/GameListScreen"
import GameDetailScreen from "../Screens/GameDetail/GameDetailScreen"

const Stack = createStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GameList"
        component={GameListScreen}
        options={{ title: "Game List" }}
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetailScreen}
        options={{ title: "Game Detail" }}
      />
    </Stack.Navigator>
  )
}
