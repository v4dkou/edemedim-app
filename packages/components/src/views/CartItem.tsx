import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Item, Orderitem, Routestoporder, RoutestoporderStatusEnum, Seller} from '../models';
import {PointitemDisplay} from './PointitemCard';

export interface SectionDisplay {
    name: string,
    variants: string[]
}

export interface ComplexItemDisplay {
    isComplex: true,
    image: string,
    title: string,
    sellerName: string,
    arrives: {
        when: string,
        where: string
    },
    prices: {
        min: number,
        max: number
    },
    cost: number,
    rating: {
        value: number,
        votes: string
    },
    sections: SectionDisplay[]
}

interface ComplexItemProps {
    item: ComplexItemDisplay
}

class ComplexItem extends Component<ComplexItemProps> {
  render() {
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.text, styles.productTitle]}>
          {this.props.item.title}
        </Text>

        {this.props.item.sections.map(section => (
          <View style={styles.complexItemSection}>
            <Text style={[styles.text, styles.complexItemTitle]}>
              {section.name} {section.variants[0]}
            </Text>
            <Text style={[styles.text, styles.complexItemWeight]}>200 гр</Text>
          </View>
        ))}
      </View>
    );
  }
}


type OrderitemDisplay = Orderitem & PointitemDisplay & Item & {
    isComplex: false
}

interface SimpleItemProps {
    item: OrderitemDisplay
}

class SimpleItem extends Component<SimpleItemProps> {
  render() {
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.text, styles.productTitle]}>
          {this.props.item.title}
        </Text>
        <Text style={[styles.text, styles.productDescription]}>
          {this.props.item.description}
        </Text>
      </View>
    );
  }
}

export type CartItemDisplay = ComplexItemDisplay | OrderitemDisplay

interface CartSellerItemProps {
    item: CartItemDisplay
    paid: boolean
}

class CartSellerItem extends Component<CartSellerItemProps> {
  render() {
    const { item, paid } = this.props;

    const priceStyle = !paid ? { color: "#E21A1A" } : {};

    return (
      <View style={styles.cartItemContainer}>
        {item.isComplex ? <ComplexItem item={item} /> : <SimpleItem item={item} />}

        <View style={styles.cartItemActions}>
          <Text style={[styles.text, styles.cartRemoveText]}>удалить</Text>
          <Text style={[styles.text, styles.cartItemPrice, priceStyle]}>
            {item.cost} р.
          </Text>
        </View>
      </View>
    );
  }
}

export interface RoutestoporderDisplay {
    items: CartItemDisplay[]
    status: RoutestoporderStatusEnum
    total: string
    seller: Seller
}

interface CartItemProps {
    order: RoutestoporderDisplay
}

export default class CartItem extends Component<CartItemProps> {
  render() {
    const { items, seller, status, total } = this.props.order;
    const paid = status === RoutestoporderStatusEnum.Paid

    return (
      <View style={styles.container}>
        <View style={styles.sellerBlock}>
          <Image style={styles.sellerImage} source={{ uri: seller.logo }} />
          <Text style={[styles.text, styles.sellerName]}>{seller.title}</Text>
        </View>

        <View style={styles.sellerOrderItems}>
          {items.map(item => (
            <CartSellerItem item={item} paid={paid}/>
          ))}
        </View>

        <View style={styles.horizontalDivider} />

        {paid && (
          <View style={styles.paidBlock}>
            <Text style={[styles.text, styles.cancelOrderText]}>
              отменить заказ
            </Text>
            <View style={styles.priceBlock}>
              <Image
                style={styles.paidCheck}
                source={{ uri: "https://i.ibb.co/kQ0zz08/Shape-8.png" }}
                resizeMode="contain"
              />
              <Text style={[styles.text, styles.orderPriceText]}>
                {total} р.
              </Text>
            </View>
          </View>
        )}

        {!paid && (
          <View>
            <View style={styles.paidBlock}>
              <Text style={[styles.text, styles.cancelOrderText]}>
                удалить заказ
              </Text>
              <View style={styles.priceBlock}>
                <Image
                  style={styles.paidCheck}
                  source={{ uri: "https://i.ibb.co/mvSbLCM/Vector.png" }}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    styles.text,
                    styles.orderPriceText,
                    { color: "#E21A1A" }
                  ]}
                >
                  {total} р.
                </Text>
              </View>
            </View>
            <View style={styles.payButton}>
              <Text style={styles.payButtonText}>перейти к оплате</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: 15
  },
  text: {
    color: "#394A58"
  },
  sellerBlock: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  sellerImage: {
    width: 43,
    height: 43
  },
  sellerName: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: "RussoOne-Regular"
  },
  horizontalDivider: {
    height: 1,
    backgroundColor: "#394A58",
    marginVertical: 5
  },
  paidBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cancelOrderText: {
    fontSize: 16,
    fontFamily: "RussoOne-Regular",
  },
  priceBlock: {
    flexDirection: "row",
    alignItems: "center"
  },
  orderPriceText: {
    fontSize: 24,
    fontFamily: "RussoOne-Regular",
  },
  paidCheck: {
    width: 18,
    height: 18,
    marginRight: 8
  },
  cartItemActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  cartRemoveText: {
    fontSize: 16,
    fontFamily: "RussoOne-Regular",
  },
  cartItemPrice: {
    fontSize: 20,
    fontFamily: "RussoOne-Regular",
  },
  itemContainer: {
    marginBottom: 5
  },
  productTitle: {
    fontSize: 24,
    fontFamily: "RussoOne-Regular",
  },
  productDescription: {
    marginVertical: 5,
    fontFamily: "RussianRailGPro-Extended",
  },
  payButton: {
    borderRadius: 10,
    backgroundColor: "#C90000",
    padding: 15,
    marginBottom: 15,
    marginTop: 35
  },
  payButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "RussoOne-Regular",
  },
  complexItemSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5
  },
  complexItemTitle: {
    fontSize: 16,
    fontFamily: "RussianRailGPro-Extended",
  },
  complexItemWeight: {
    fontSize: 18,
    fontFamily: "RussianRailGPro-Extended",
  },
    cartItemContainer: {

    },
    sellerOrderItems: {

    }
});
