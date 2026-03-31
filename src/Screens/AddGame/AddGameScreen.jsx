import { useState, useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PLATFORM_COLORS, AGE_RATING_COLORS, AGE_RATING_LABELS } from "../../constants/constants"
import styles from "./styles"

const PLATFORMS = ["PS5", "Xbox", "PC", "Switch"]
const GENRES = ["Action", "Adventure", "RPG", "Sports", "Strategy"]
const AGE_RATINGS = ["E", "T", "M"]

export default function AddGameScreen() {
  const [title, setTitle] = useState("")
  const [platform, setPlatform] = useState("")
  const [genre, setGenre] = useState("")
  const [price, setPrice] = useState("")
  const [ageRating, setAgeRating] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const parsedPrice = parseFloat(price)
    const isPriceValid = price.trim() !== "" && !isNaN(parsedPrice) && parsedPrice > 0
    const allFilled = title.trim() !== "" && platform !== "" && genre !== "" && ageRating !== ""
    setIsFormValid(allFilled && isPriceValid)
  }, [title, platform, genre, price, ageRating])

  const handleAddGame = () => {
    Alert.alert(
      "Game Added!",
      `Title: ${title}\nPlatform: ${platform}\nGenre: ${genre}\nPrice: $${parseFloat(price).toFixed(2)}\nAge Rating: ${ageRating} — ${AGE_RATING_LABELS[ageRating]}`,
      [{ text: "OK" }]
    )
  }

  const handleClear = () => {
    setTitle("")
    setPlatform("")
    setGenre("")
    setPrice("")
    setAgeRating("")
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <ScrollView
          style={styles.scrollContent}
        >
          <View style={styles.headerBar}>
            <Text style={styles.screenTitle}>Add Game</Text>
          </View>
          
          {/* Title */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Game Title</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. The Legend of Zelda"
              placeholderTextColor="#aaa"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          {/* Platform */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Platform</Text>
            <View style={styles.chipsRow}>
              {PLATFORMS.map((p) => (
                <TouchableOpacity
                  key={p}
                  style={[
                    styles.chip,
                    platform === p && { backgroundColor: PLATFORM_COLORS[p] ?? "#558a98" },
                  ]}
                  onPress={() => setPlatform(p)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.chipText, platform === p && styles.chipTextSelected]}>
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Genre */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Genre</Text>
            <View style={styles.chipsRow}>
              {GENRES.map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[styles.chip, genre === g && styles.chipSelected]}
                  onPress={() => setGenre(g)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.chipText, genre === g && styles.chipTextSelected]}>
                    {g}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Price */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Price (USD)</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 59.99"
              placeholderTextColor="#aaa"
              value={price}
              onChangeText={setPrice}
              keyboardType="decimal-pad"
            />
          </View>

          {/* Age Rating */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Age Rating</Text>
            <View style={styles.chipsRow}>
              {AGE_RATINGS.map((r) => (
                <TouchableOpacity
                  key={r}
                  style={[
                    styles.chip,
                    ageRating === r && { backgroundColor: AGE_RATING_COLORS[r] ?? "#888" },
                  ]}
                  onPress={() => setAgeRating(r)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.chipText, ageRating === r && styles.chipTextSelected]}>
                    {r} — {AGE_RATING_LABELS[r]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClear}
              activeOpacity={0.7}
            >
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.addButton, !isFormValid && styles.addButtonDisabled]}
              onPress={handleAddGame}
              disabled={!isFormValid}
              activeOpacity={0.7}
            >
              <Text style={styles.addButtonText}>Add Game</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}