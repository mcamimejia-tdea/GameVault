import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import newsData from "../../Data/newsData"
import styles from "./styles"

export default function GamingNewsScreen() {
  const [news, setNews] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [infoMessage, setInfoMessage] = useState("")

  useEffect(() => {
    setNews(newsData)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (news.length > 0) {
      setInfoMessage(`News ${currentIndex + 1} of ${news.length}`)
    }
  }, [currentIndex, news])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length)
  }

  if (news.length === 0) return null

  const currentNews = news[currentIndex]

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.header}>Gaming News</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{currentNews.title}</Text>
        <Text style={styles.cardMessage}>{currentNews.message}</Text>
      </View>

      <Text style={styles.infoMessage}>{infoMessage}</Text>

      <View style={styles.dotsRow}>
        {news.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === currentIndex && styles.dotActive]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next News</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

