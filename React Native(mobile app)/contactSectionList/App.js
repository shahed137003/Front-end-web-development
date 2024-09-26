import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View, Image } from 'react-native';
import Styles from './Styles';

export default function App() {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", text: "Ahamed", image: require("./assets/icon.png") },
        { id: "1", text: "Ali", image: require("./assets/Snow.jpg") },
        { id: "2", text: "Ayman", image: require("./assets/splash.png") },
      ]
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "5", text: "Camilia", image: require("./assets/camilia.jpg") },
        { id: "6", text: "Carin", image: require("./assets/camilia.jpg") },
      ]
    },
    {
      id: "4",
      title: "S",
      data: [
        { id: "9", text: "Shahd", image: require("./assets/shahdImage.jpg") },
        { id: "10", text: "Shams", image: require("./assets/favicon.png") },
      ]
    }
  ];

  return (
    <View>
      <StatusBar style="auto" />
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={Styles.header}>{title}</Text>
        )}
        renderItem={({ item: { text, image } }) => (
          <View style={Styles.itemContainer}>
            <Image source={image} style={Styles.image} />
            <Text style={Styles.item}>{text}</Text>
          </View>
        )}
      />
    </View>
  );
}



