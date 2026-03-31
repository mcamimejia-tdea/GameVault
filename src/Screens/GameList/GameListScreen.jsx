import { useState, useEffect } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import gamesData from "../../Data/gamesData"
import Card from "../../Components/Card"
import styles from "./styles"

export default function GameListScreen({ navigation }) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setGames(gamesData)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#89b4fa" />
        <Text style={styles.loaderText}>Loading catalog...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Games</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            game={item}
            onPress={() => navigation.navigate("GameDetail", { game: item })}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}
