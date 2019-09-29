import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {Routestop} from '../models';
import RoutePoint from './RoutePoint';


export interface RoutestopDisplay {
    text: string,
    time: string,
    passed: boolean
}

interface RouteProps {
    points: RoutestopDisplay[]
}

export default class Route extends Component<RouteProps> {
  render() {
    const lastIndex = this.props.points.length - 1;
    return (
      <View style={styles.route}>
        {this.props.points.map((point, i) => (
          <View key={i} style={point.passed && styles.faded}>
            <RoutePoint text={point.text} time={point.time} passed={point.passed} />
            {i < lastIndex && <View style={styles.routeLine} />}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  route: {
    flexDirection: "column"
  },
  faded: {
    opacity: 0.3
  },
  routeLine: {
    height: 30,
    width: 3,
    backgroundColor: "#EB5757",
    marginLeft: 7
  }
});
