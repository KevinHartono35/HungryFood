import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export interface MenuItemProps {
  menuID: string;
  menuName: string;
  basePrice: number;
  discountPercentage: number;
  onPress?(id: string): void;
}

export default function MenuItem({
  menuID,
  menuName,
  basePrice,
  discountPercentage,
  onPress,
}: MenuItemProps) {
  const discPrice = basePrice * ((100 - discountPercentage) / 100);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress(menuID)}>
      <Image style={styles.icon} source={require('../assets/burger.png')} />
      <View style={styles.menuContainer}>
        <Text style={styles.menuName}>{menuName}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.normalPrice}>Rp. {basePrice}</Text>
          <Text style={styles.discountedPrice}>Rp. {discPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  icon: {
    width: '15%',
    height: 50,
    borderRadius: 100,
  },
  menuContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  menuName: {
    fontSize: 16,
    fontWeight: '700',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  normalPrice: {
    fontSize: 12,
    marginRight: 5,
    color: '#888888',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 14,
    marginLeft: 5,
  },
});
