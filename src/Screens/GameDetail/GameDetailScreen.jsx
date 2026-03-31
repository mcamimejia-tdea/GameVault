import { useState, useEffect } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import Icon from "@react-native-vector-icons/fontawesome-free-solid"
import { PLATFORM_COLORS, AGE_RATING_COLORS, AGE_RATING_LABELS } from "../../constants/constants"
import styles from "./styles"

export default function GameDetailScreen({ route, navigation }) {
  const { game } = route.params
  const { title, platform, genre, price, ageRating, description, icon } = game

  const [inWishlist, setInWishlist] = useState(false)

  useEffect(() => {
    setInWishlist(false)
  }, [game])

  const platformColor = PLATFORM_COLORS[platform] ?? "#558a98"
  const ageColor = AGE_RATING_COLORS[ageRating] ?? "#888"

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Icon name="arrow-left" size={18} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Game Detail</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={[styles.cardHeader, { backgroundColor: platformColor }]}>
            <Icon name={icon} size={52} color="#fff" style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.badgeRow}>
              <Text style={styles.platformBadge}>{platform}</Text>
              <Text style={styles.genreBadge}>{genre}</Text>
            </View>
          </View>

          <View style={styles.cardBody}>
            <View style={styles.metaRow}>
              <View>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.priceValue}>{price}</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <View style={[styles.ageRatingBadge, { backgroundColor: ageColor }]}>
                  <Text style={styles.ageRatingText}>{ageRating}</Text>
                </View>
                <Text style={styles.ageRatingLabel}>{AGE_RATING_LABELS[ageRating]}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity
              style={[
                styles.wishlistButton,
                { backgroundColor: inWishlist ? "#3a9b6f" : "#1e1e2e" },
              ]}
              onPress={() => setInWishlist((prev) => !prev)}
              activeOpacity={0.7}
            >
              <Text style={styles.wishlistButtonText}>
                {inWishlist ? "★  Added" : "☆  Add to Wishlist"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
