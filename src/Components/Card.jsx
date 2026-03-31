import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "@react-native-vector-icons/fontawesome-free-solid"

export default function Card({ game, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Icon name={game.icon} size={30} color="#cdd6f4" style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{game.title}</Text>
        <View style={styles.row}>
          <Text style={styles.badge}>{game.platform}</Text>
          <Text style={styles.genre}>{game.genre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#558a98",
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    backgroundColor: "#f6d581",
    color: "#1e1e2e",
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: "hidden",
  },
  genre: {
    fontSize: 13,
    color: "#1e1e2e",
  },
})
