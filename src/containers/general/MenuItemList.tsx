import React from 'react';
import {FlatList} from 'react-native';
import {MenuItem} from '../../components/';

export default function MenuItemList() {
  return (
    <FlatList>
      <MenuItem
        menuName={item.menu_name}
        discountPercentage={item.percentage}
        basePrice={item.base_price}
      />
    </FlatList>
  );
}
