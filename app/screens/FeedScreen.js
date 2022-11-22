import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { favoArt, addArt } from "../redux/slices/ArtSlice";

import Card from "../components/Card";
import colors from "../config/colors";

import Screen from "../components/Screen";

function FeedScreen({ navigation }) {
  const [artworks, setArtworks] = useState([]);

  const artState = useSelector(favoArt);
  const dispatch = useDispatch();

  console.log(artState);
  // console.log(favoArt);

  useEffect(() => {
    const loadArtworks = async () => {
      const response = await fetch(
        "https://api.artic.edu/api/v1/artworks?&limit=100&fields=id,title,artist_display,date_display,image_id,thumbnail,place_of_origin"
      );
      const myJson = await response.json();

      setArtworks(myJson);
    };

    loadArtworks();
  }, []);

  const dataart = artworks.data;

  return (
    <Screen style={styles.screen}>
      <FlatList
        centerContent={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={dataart}
        renderItem={({ item }) => (
          <Card
            y
            title={item.title}
            artist={item.artist_display.split(",")[0].split("(")[0]}
            imageUrl={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
            onPress={() => navigation.navigate("FeedDetail", item)}
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

export default FeedScreen;
