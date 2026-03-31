import "./global.css"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./src/Navigation/TabNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
