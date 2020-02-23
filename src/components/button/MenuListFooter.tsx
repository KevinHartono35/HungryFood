import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

export interface MenuListFooterProps {
  onPress(event: GestureResponderEvent): void;
}

export default function MenuListFooter({onPress}: MenuListFooterProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>Click here to load more</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});
