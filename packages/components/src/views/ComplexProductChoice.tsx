import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";


interface ComplexProductSelectProps {
    options: any
}

interface ComplexProductSelectState {
    count: number,
    selected: number
}

class ComplexProductSection extends Component {
  state = {
    selected: 0
  };

  onIncrement = () => {
    const selected =
      (this.state.selected + 1) % this.props.section.variants.length;
    this.setState({ selected });
  };

  onDecrement = () => {
    const selected =
      (this.props.section.variants.length + this.state.selected - 1) %
      this.props.section.variants.length;
    this.setState({ selected });
  };

  buildText = (title: string, variant: string) => title + " " + variant;

  render() {
    const { selected } = this.state;
    const variant = this.props.section.variants[selected];

    return (
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={this.onDecrement}>
          <View style={styles.sectionLeftArrow}>
            <Image
              style={[styles.sectionArrowImg, { opacity: this.props.opacity }]}
              source={{ uri: "https://i.ibb.co/HG44vrL/Shape-6.png" }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.sectionTextContainer}>
          <Text
            style={[
              styles.text,
              { opacity: this.props.opacity },
              styles.sectionTitle
            ]}
          >
            {this.buildText(this.props.section.name, variant)}
          </Text>
          <Text
            style={[
              styles.text,
              { opacity: this.props.opacity },
              styles.sectionWeight
            ]}
          >
            200 гр
          </Text>
        </View>

        <TouchableOpacity onPress={this.onIncrement}>
          <View style={styles.sectionRightArrow}>
            <Image
              style={[styles.sectionArrowImg, { opacity: this.props.opacity }]}
              source={{ uri: "https://i.ibb.co/xLwn2w0/Shape-7.png" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class ComplexProductChoice extends Component {
  state = {
    selected: {},
    ordered: false
  };

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: Math.max(this.state.count - 1, 0) });
  };

  onSetSelected = selected => {
    this.setState({ selected });
  };

  makeOrder = () => this.setState({ ordered: true });

  render() {
    const textOpacity = !this.state.ordered ? 1 : 0.5;

    return (
      <View style={styles.screenContainer}>
        <ImageBackground
          source={this.props.product.image}
          style={{
            width: "100%",
            height: "100%"
          }}
          resizeMode="cover"
        >
          <View style={styles.faded}>
            <View style={styles.arrivesBlock}>
              <Text style={[styles.text, styles.arrivesText]}>привезут в</Text>
              <View style={styles.arrivesInnerBlock}>
                <Text style={[styles.text, styles.arrivesWhere]}>
                  {this.props.product.arrives.where}
                </Text>
                <Text style={[styles.text, styles.arrivesWhen]}>
                  {this.props.product.arrives.when}
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={[styles.text, { opacity: textOpacity }, styles.title]}
              >
                {this.props.product.title}
              </Text>
            </View>

            {this.props.product.sections.map(section => (
              <ComplexProductSection
                key={section.name}
                section={section}
                opacity={textOpacity}
              />
            ))}

            {!this.state.ordered && (
              <TouchableOpacity onPress={this.makeOrder}>
                <View style={styles.button}>
                  <Text style={[styles.text, styles.buttonText]}>
                    заказать за 349 р.
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {!!this.state.ordered && (
              <View style={styles.confirmButton}>
                <View style={styles.optionsPopup}>
                  <Text style={[styles.text, styles.buttonActiveText]}>
                    новый заказ
                  </Text>
                  <View style={styles.optionsPopupDivider} />
                  <Text style={[styles.text, styles.buttonActiveText]}>
                    продолжить заказ
                  </Text>
                  <Image
                    style={styles.optionsPopupAnchor}
                    source={{ uri: "https://i.ibb.co/DkF0H79/Rectangle-3.png" }}
                  />
                </View>
                <Text style={[styles.text, styles.buttonOrderText]}>
                  добавлено{" "}
                  <Text style={styles.buttonActiveText}>в корзину</Text>
                </Text>
              </View>
            )}
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
  text: {
    color: "#F2F2F2"
  },
  arrivesBlock: {
    alignItems: "flex-end",
    marginVertical: 5
  },
  arrivesText: {
    fontFamily: "RussianRailGPro-Extended",
  },
  arrivesInnerBlock: {
    flexDirection: "row",
    alignItems: "center"
  },
  arrivesWhere: {
    fontFamily: "RussianRailGPro-Extended",
  },
  arrivesWhen: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "RussianRailGPro-ExtendedBold",
  },
  title: {
    marginVertical: 15,
    fontSize: 28,
    fontFamily: "RussoOne-Regular",
  },
  prices: {
    marginBottom: 5,
    fontSize: 20
  },
  sellerName: {
    fontSize: 14,
    fontFamily: "RussianRailGPro-Bold",
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#C90000",
    padding: 15,
    marginBottom: 15,
    marginTop: 35
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RussoOne-Regular",
  },
  selector: {
    flexDirection: "row"
  },
  optionCirle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    marginRight: 7
  },
  sectionContainer: {
    flexDirection: "row",
    marginTop: 35
  },
  sectionTextContainer: {
    flex: 1,
    flexDirection: "column"
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "RussoOne-Regular",
    textAlign: "center"
  },
  sectionWeight: {
    fontSize: 14,
    fontFamily: "RussoOne-Regular",
    textAlign: "center"
  },
  sectionLeftArrow: {
    width: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  sectionRightArrow: {
    width: 20
  },
  sectionArrowImg: {
    width: 10,
    height: 10,
    marginTop: 10
  },
  confirmButton: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    padding: 15,
    marginBottom: 15,
    marginTop: 35
  },
  buttonOrderText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RussoOne-Regular",
    color: "#394A58"
  },
  buttonActiveText: {
    fontSize: 16,
    fontFamily: "RussoOne-Regular",
    color: "#E21A1A"
  },
  optionsPopup: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    padding: 15,
    marginBottom: 15,
    marginTop: 35,
    position: "absolute",
    bottom: "calc(100% - 10px)",
    left: 0,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  optionsPopupDivider: {
    height: 1,
    backgroundColor: "#394A58",
    marginVertical: 5,
    opacity: 0.5
  },
  optionsPopupAnchor: {
    width: 20,
    height: 20,
    position: "absolute",
    bottom: -10,
    left: "calc(50% - 10px)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
});
