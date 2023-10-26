import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

const contacts = [
{
    uid: 1,
    name: 'Cheeto Selman',
    status: 'Napping like a cat',
    imageUrl: 'https://i.pravatar.cc/150?img=52',
},
{
    uid: 2,
    name: 'Kevin Selman',
    status: 'Learning React Native',
    imageUrl: 'https://i.pravatar.cc/150?img=53',
},
{
    uid: 3,
    name: 'Spencer Selman',
    status: 'Playing video games',
    imageUrl: 'https://i.pravatar.cc/150?img=54',
},
{
    uid: 4,
    name: 'Lauren Selman',
    status: 'Going to school',
    imageUrl: 'https://i.pravatar.cc/150?img=55',
}
]

  return (
    <View>
    <Text style={styles.headingText}>ContactList</Text>
    <ScrollView
    style={styles.container}
    scrollEnabled={true}
    >
      {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
              <Image
              source={{
                  uri: imageUrl
              }}
              style={styles.userImage}
              />
              <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
              </View>
          </View>
      ))}
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
    },
    container: {
    paddingHorizontal: 16,
    marginBottom: 3,
    },
    userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#EEEEEE',
    padding: 6,
    borderRadius: 10,
    },
    userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#444444',

    },
    userStatus: {
        fontSize: 12,

    },
})