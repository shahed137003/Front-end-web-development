import React from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView 
      horizontal 
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require("./assets/Photo.jpg")} />
        <Image style={styles.image} source={require("./assets/nature.jpg")} />
        <Image style={styles.image} source={require("./assets/Quite.jpg")} />
        <Image style={styles.image} source={require("./assets/Snow.jpg")} />
        <Image style={styles.image} source={require("./assets/view.jpg")} />
        <Image style={styles.image} source={require("./assets/Beautiful-Bridge.jpg")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 500,
    width: 400,
    marginHorizontal: 10, // Adds some space between images
  },
});

export default App;
