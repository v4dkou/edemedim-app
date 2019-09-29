import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";


interface ComplexProductSelectProps {
    options: any
}

interface ComplexProductSelectState {
    count: number,
    selected: number
}

export default class ComplexProductSelect extends Component<ComplexProductSelectProps, ComplexProductSelectState> {
  state = {
    count: 0,
    selected: 0
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: Math.max(this.state.count - 1, 0) });
  };

  onSetSelected = (selected: number) => {
    this.setState({ selected });
  };

  render() {
    const { options } = this.props;
    const currentOption = options[this.state.selected];

    return (
      <View style={styles.screenContainer}>
        <ImageBackground
          source={currentOption.image}
          style={{
            width: "100%",
            height: "100%"
          }}
          resizeMode="cover"
        >
          <View style={styles.faded}>
            <View style={styles.arrivesBlock}>
              <Text style={styles.arrivesText}>привезут в</Text>
              <View style={styles.arrivesInnerBlock}>
                <Text style={styles.arrivesWhere}>Екатеринбург</Text>
                <Text style={styles.arrivesWhen}>21:32</Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>{currentOption.title}</Text>
            </View>
            <Text style={styles.prices}>от 349 до 439 р</Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Выбрать</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: "column"
  },
  faded: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  arrivesBlock: {
    alignItems: "flex-end",
    marginVertical: 5
  },
  arrivesText: {
    color: "#F2F2F2",
    fontFamily: "RussianRailGPro-Extended",
  },
  arrivesInnerBlock: {
    flexDirection: "row",
    alignItems: "center"
  },
  arrivesWhere: {
    color: "#F2F2F2",
    fontFamily: "RussianRailGPro-Extended",
  },
  arrivesWhen: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "RussianRailGPro-ExtendedBold",
    color: "#F2F2F2"
  },
  title: {
    marginVertical: 15,
    fontSize: 28,
    fontFamily: "RussoOne-Regular",
    color: "#f2f2f2"
  },
  prices: {
    marginBottom: 5,
    fontSize: 20,
    fontFamily: "RussianRailGPro-Extended",
    color: "#f2f2f2"
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#C90000",
    padding: 15,
    marginVertical: 15
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "RussoOne-Regular",
    color: "#F2F2F2"
  }
});
