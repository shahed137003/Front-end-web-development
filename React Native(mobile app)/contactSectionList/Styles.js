import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',     // Centers content horizontally
},
header: {
    fontSize: 24,              // Font size for header
    fontWeight: 'bold',        // Bold text
    textAlign: 'center',       // Center text alignment
    backgroundColor: 'pink', // Add a background color (green in this case)
    color: 'white',            // Set text color to white for contrast
    padding: 15,               // Add padding around the text
    borderRadius: 10,          // Optional: Add rounded corners
    width: '90%',              // Optional: Set width to make it responsive
},
item: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 10,
},
itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  }

})