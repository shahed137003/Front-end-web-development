import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Card = () => {
  const { params } = useRoute();

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: `https://picsum.photos/200/300?random=${params.id}` }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{params.name}</Text>
        <Text style={styles.email}>{params.email}</Text>
        <Text style={styles.phone}>{params.phone}</Text>
        <Text style={styles.website}>{params.website}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20, // Rounded corners
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8, // Higher elevation for a more defined shadow
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0', // Border for a clean look
  },
  avatar: {
    width: 70, // Larger image
    height: 70,
    borderRadius: 35, // Circular avatar
    marginRight: 20, // Space between image and text
  },
  userInfo: {
    flex: 1, // Make text take up remaining space
  },
  name: {
    fontSize: 22, // Larger name text
    fontWeight: 'bold',
    color: '#333', // Darker text color
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555', // Subtle color for email
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: '#555', // Keep phone number styling consistent with email
    marginBottom: 4,
  },
  website: {
    fontSize: 16,
    color: '#007AFF', // Blue color for clickable links (i.e., websites)
  },
});

export default Card;
