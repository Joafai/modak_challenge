import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

import colors from "../config/colors";
import Text from "../components/Text";
import IconButton from "../components/IconButton";
import favArt from "../data/favArt";

function FeedDetailScreen({ route, navigation }) {
  const artpiece = route.params;

  {
    console.log(favArt);
  }

  return (
    <ScrollView
    // style={styles.scrollView}
    // contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${artpiece.image_id}/full/843,/0/default.jpg`,
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.infoTitles}>Name of the Piece</Text>
        <Text style={styles.title}>{artpiece.title}</Text>
        <Text style={styles.infoTitles}>Artist</Text>
        <Text style={styles.title}>{artpiece.artist_display}</Text>
        <Text style={styles.infoTitles}>Date</Text>
        <Text style={styles.title}>{artpiece.date_display}</Text>
        <Text style={styles.infoTitles}>Art Style</Text>
        <Text style={styles.title}>{artpiece.thumbnail.alt_text}</Text>
        <Text style={styles.infoTitles}>Place of Origin</Text>
        <Text style={styles.title}>{artpiece.place_of_origin}</Text>
        <View style={styles.favContainer}>
          <Text>Fav this Piece!</Text>
          <IconButton
            name="heart"
            style={styles.buttonHeart}
            color="red"
            onPress={() => {
              favArt.push(artpiece);
              navigation.navigate("Feed");
            }}
          />
        </View>
      </View>
      {/* <MapView
        //provider={PROVIDER_GOOGLE} // remove if not using Google Maps

        style={styles.map}
        region={{
          latitude: artpiece.latitude,
          longitude: artpiece.longitude,
        }}
      >
        <Marker
          coordinate={{
            latitude: artpiece.latitude,
            longitude: artpiece.longitude,
          }}
          pinColor={"blue"} // any color
          title={artpiece.title}
          description={artpiece.artist_display}
        />
      </MapView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {},

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonHeart: {},
  image: {
    width: "100%",
    height: 600,
    marginBottom: 30,
  },
  detailsContainer: {
    padding: 20,
    alignItems: "center",
  },
  infoTitles: {
    color: colors.primary,
    fontSize: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
  favContainer: {
    flex: 1,
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  map: {
    height: 400,
    width: 600,
  },
});

export default FeedDetailScreen;
