import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { useSelector } from "react-redux";
import { favoArt } from "../redux/slices/ArtSlice";

function FavArtScreen({ navigation }) {
  const artState = useSelector(favoArt);

  return (
    <Screen style={styles.screen}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={artState}
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
