import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import favArt from "../data/favArt";

function FavArtScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={favArt}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            artist={item.artist_display.split(",")[0].split("(")[0]}
            imageUrl={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
            onPress={() => navigation.navigate("FavDetail", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default FavArtScreen;
