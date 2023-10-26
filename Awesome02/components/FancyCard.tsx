import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
          }}
        style={styles.cardImage} />
        <View style={styles.cardBody}> 
          <Text style={styles.cardTitle}>Kaysville City</Text>
          <Text style={styles.cardLabel}>Utah</Text>
          <Text style={styles.cardDescription}>
            Kaysville is a city north of Farmington UT. Kaysville is a city
            Farmington UT. Kaysville is a city north of Farmington UT.
          </Text>
          <Text style={styles.cardFooter}>12 miles away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }

  },
  cardImage: {
    height: 150,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 4,

  },
  cardDescription: {
    color: '#444444',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000000',
  },
})
