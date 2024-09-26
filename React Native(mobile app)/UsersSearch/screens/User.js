import { View, Text, StyleSheet ,Button} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';


export default function User({ userArr, navigation }) {
    const {navigate}=useNavigation()
  return (
    <View style={styles.container}>
      {userArr.map((u) => (
        <View>
        <Text key={u.id} style={styles.userName}>{u.name}</Text>
        <Button title='Details' onPress={() => navigate("details",u)}></Button>
        {/* <Icon name='account' ></Icon> */}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});