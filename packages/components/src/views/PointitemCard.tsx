import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {Item, Pointitem} from '../models';

export type PointitemDisplay = Item & Pointitem

interface PointitemProps {
    item: PointitemDisplay
}

export default class PointitemCard extends Component<PointitemProps> {
  state = {
    count: 0
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: Math.max(this.state.count - 1, 0) });
  };

  render() {
    return (
      <View style={styles.productCard}>
        <Image
          style={styles.image}
          source={{ uri: this.props.item.thumbnail }}
          resizeMode="cover"
        />

        <View style={styles.productDescription}>
          <Text style={[styles.title, styles.text]}>
            {this.props.item.title}
          </Text>

          <View style={styles.subtitleBlock}>
            <Text style={[styles.text, styles.subtitle]}>
              {this.props.item.subtitle}
            </Text>
            <Text style={[styles.text, styles.subtitleLabel]}>
              {this.props.item.subtitleLabel}
            </Text>
          </View>

          <Text style={[styles.text, styles.description]}>
            {this.props.item.description}
          </Text>

          <View style={styles.addBlock}>
            <Text style={[styles.text, styles.price]}>
              {this.props.item.cost} р.
            </Text>

            <View style={styles.countBlock}>
              <TouchableOpacity onPress={this.onDecrement}>
                <Text style={[styles.text, styles.control]}>-</Text>
              </TouchableOpacity>
              <Text style={[styles.text, styles.count]}>
                {this.state.count}
              </Text>
              <TouchableOpacity onPress={this.onIncrement}>
                <Text style={[styles.text, styles.control]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productCard: {
    flexDirection: "column",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  image: {
    height: 250
  },
  productDescription: {
    paddingHorizontal: 20,
    fontFamily: "RussianRailGPro-Extended",
  },
  text: {
    color: "#394A58"
  },
  title: {
    fontSize: 28,
    fontFamily: "RussoOne-Regular",
    marginVertical: 10
  },
  subtitleBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "RussoOne-Regular",
    marginBottom: 5
  },
  subtitleLabel: {
    fontSize: 18,
    fontFamily: "RussoOne-Regular",
    marginBottom: 5,
    color: "#E21A1A"
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    fontFamily: "RussianRailGPro-Extended",
  },
  addBlock: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price: {
    fontSize: 24,
    color: "#E21A1A",
    fontFamily: "RussianRailGPro-Extended",
  },
  control: {
    fontSize: 24,
    fontFamily: "RussianRailGPro-Extended",
    color: "#E21A1A"
  },
  count: {
    fontSize: 24,
    fontFamily: "RussianRailGPro-Extended",
    marginHorizontal: 20
  },
  countBlock: {
    flexDirection: "row",
    marginRight: 10
  }
});
