import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
export default function Box({colorName,hexCode}) {
  return (
    <View style={[styles.view,{backgroundColor:hexCode}]}>
    <Text style={styles.text}>{colorName} {hexCode}</Text>
    </View>
  )
}