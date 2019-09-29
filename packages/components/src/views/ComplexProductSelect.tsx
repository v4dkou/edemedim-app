import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { Rating } from "react-native-ratings";
import {SectionDisplay} from './CartItem';

interface ComplexProductSectionProps {
    section: SectionDisplay
}

class ComplexProductSection extends Component<ComplexProductSectionProps> {
    buildText = (variants: string[]) => {
        const main = variants.slice(0, variants.length - 1).join(", ");

        return main + " или " + variants[variants.length - 1];
    };

    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text style={[styles.text, styles.sectionTitle]}>
                    {this.props.section.name}
                </Text>
                <Text style={[styles.text, styles.sectionVariants]}>
                    {this.buildText(this.props.section.variants)}
                </Text>
            </View>
        );
    }
}


interface ComplexProductSelectProps {
    options: any
    onSelected: () => any
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
                    source={require('../../../../img/foodback.jpg')}
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
                                    {currentOption.arrives.where}
                                </Text>
                                <Text style={[styles.text, styles.arrivesWhen]}>
                                    {currentOption.arrives.when}
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.text, styles.title]}>
                                {currentOption.title}
                            </Text>
                        </View>

                        <Text style={[styles.text, styles.prices]}>
                            от {currentOption.prices.min} до {currentOption.prices.max} р
                        </Text>

                        <View style={styles.ratingBlock}>
                            {/*<Rating*/}
                                {/*type="custom"*/}
                                {/*ratingImage="https://s3-alpha-sig.figma.com/img/fef1/f1fa/9d9d40b76cf0cecdf0fc75078c74bca8?Expires=1570406400&Signature=H7EqYy9LIcRDctAQ4PGjRPVHSf~rSV088vO61yV4N3TsP~HFie17ZA57263AiH-To0Sp0z~GgPdjhY6jS0kyrJIHgkv~AtTUAXvHDYBdHCxaVtWI2c~L5yysG-DRZsFaECFIiKzsJc9dAZvM0QuQBlK8NkDl-GqYqSuEzfEuZNdedponFwAZbGalH~lM7x3hQytqzZtarzN9mmua1o72O75QDgKBS-iXbNzke36x-gqCxYzlgkK4GouvUCcse2BHuMtvBsXCc6Oi6S1NF1pbe3Xao0DKg-R91Kc4lKnAXo9~zqK5~FrkaVMD9zpNhZN0wUpAnF3D0OgYASA~Gxn3zw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"*/}
                                {/*ratingColor="#394A58"*/}
                                {/*fractions={1}*/}
                                {/*startingValue={currentOption.rating.value}*/}
                                {/*readonly*/}
                                {/*imageSize={20}*/}
                                {/*style={{ paddingVertical: 0 }}*/}
                            {/*/>*/}
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.text, styles.rating]}>
                                    {currentOption.rating.value} ({currentOption.rating.votes})
                                </Text>
                            </View>
                        </View>

                        <Text style={[styles.text, styles.vendorName]}>
                            {currentOption.vendorName}
                        </Text>

                        {currentOption.sections.map((section: SectionDisplay) => (
                            <ComplexProductSection key={section.name} section={section} />
                        ))}

                        <TouchableOpacity onPress={this.props.onSelected}>
                          <View style={styles.button}>
                              <Text style={[styles.text, styles.buttonText]}>Выбрать</Text>
                          </View>
                        </TouchableOpacity>

                        <View style={styles.selector}>
                            {this.props.options.map((_, i:any) => (
                                <TouchableOpacity key={i} onPress={() => this.onSetSelected(i)}>
                                    <View
                                        style={[
                                            styles.optionCirle,
                                            {
                                                backgroundColor:
                                                    i !== this.state.selected
                                                        ? "rgba(242, 242, 242, 0.5)"
                                                        : "#E21A1A"
                                            }
                                        ]}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flexDirection: "column",
        height: '100%'
    },
    faded: {
        backgroundColor: "rgba(0, 0, 0, .0)",
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

    },
    ratingBlock: {
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center"
    },
    rating: {
        fontSize: 12,
        marginLeft: 10
    },
    vendorName: {
        fontSize: 14,
        fontWeight: "bold"
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
    },
    selector: {
        flexDirection: "row"
    },
    optionCirle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 7
    },
    sectionContainer: {
        marginTop: 15
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    sectionVariants: {
        fontSize: 16
    }
});
