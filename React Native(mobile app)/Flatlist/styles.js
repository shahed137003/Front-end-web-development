import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',     // Centers content horizontally
      },
      header: {
        fontSize: 24,        // Increase font size for the header
        fontWeight: 'bold',  // Make the text bold
        textAlign: 'center', // Ensure the text itself is centered
      },
      view:{
        marginBottom:10,
        backgroundColor:"#2aa198",
        marginHorizonal:10,
        borderRadius:7,
        textAlign:"center"
      },
      text:{
        color:"white",
        fontWeight:"bold",
        padding:10,
        fontSize:17
      }
})

