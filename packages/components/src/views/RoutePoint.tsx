import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {RoutestopDisplay} from './Route';

export default class RoutePoint extends Component<RoutestopDisplay> {
  render() {
    return (
      <View style={styles.routePoint}>
        <View style={styles.circle} />
        <Text style={styles.stationText}>{this.props.text}</Text>
        <Text style={styles.stationTime}>{this.props.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  routePoint: {
    flex: 1,
    flexDirection: "row",
    height: 18
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#EB5757",
    backgroundColor: "#fff"
  },
  stationText: {
    marginLeft: 10
  },
  stationTime: {
    marginLeft: "auto"
  }
});
