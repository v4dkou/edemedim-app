import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Rating } from "react-native-ratings";
import {Seller} from '../models';


interface SellerCardProps {
    seller: Seller
}

export default class SellerCard extends Component<SellerCardProps> {
  render() {
    return (
      <View style={styles.vendorCard}>
        <Image
          style={styles.image}
          source={{ uri: this.props.seller.logo }}
          resizeMode="contain"
        />

        <View style={styles.vendorDesription}>
          <Text style={[styles.title, styles.text]}>
            {this.props.seller.title}
          </Text>

          <View style={styles.ratingBlock}>
            {/*<Rating*/}
              {/*type="custom"*/}
              {/*ratingColor="#394A58"*/}
              {/*fractions={1}*/}
              {/*startingValue={this.props.seller.rating.value}*/}
              {/*readonly*/}
              {/*imageSize={20}*/}
            {/*/>*/}
            <View style={{ flex: 1 }}>
              <Text style={[styles.text, styles.rating]}>
                {this.props.seller.rating.value} (
                {this.props.seller.rating.votes})
              </Text>
            </View>
          </View>

          <Text style={[styles.text, styles.description]}>
            {this.props.seller.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vendorCard: {
    flexDirection: "column",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  vendorDesription: {
    paddingHorizontal: 10
  },
  image: {
    height: 250
  },
  text: {
    color: "#394A58"
  },
  title: {
    fontSize: 28,
    fontFamily: "RussoOne-Regular",
    marginVertical: 10,
    color: "#394A58"
  },
  ratingBlock: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center"
  },
  rating: {
    fontSize: 14,
    marginLeft: 10
  },
  description: {
    fontSize: 14,
    fontFamily: "RussianRailGPro-Extended",
    marginVertical: 10,
  },
    ratingInternal: {
        paddingVertical: 0
    }
});
