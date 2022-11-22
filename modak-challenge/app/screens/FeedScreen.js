import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import artworksApi from "../api/artworks";

import Screen from "../components/Screen";

// import useApi from "../hooks/useApi";

function FeedScreen({ navigation }) {
  // const getArtworksApi = useApi(artworksApi.getArtworks);

  // useEffect(() => {
  //   getArtworksApi.request();
  // }, []);

  // console.log(getArtworksApi.data);

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const loadArtworks = async () => {
      // const response = await artworksApi.getArtworks();
      // // console.log(response.data[0].id);
      const response = await fetch(
        "https://api.artic.edu/api/v1/artworks?&limit=100&fields=id,title,artist_display,date_display,image_id,thumbnail,place_of_origin"
      );
      const myJson = await response.json();
      // console.log(myJson);
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
