import React from 'react';
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import {DiscountBox} from '../components';
import CountdownCard from '../components/CountdownCard';
import {CardItemList} from '../containers/general';
import {MenuItemList} from '../containers/general';

export default function DetailScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require('../assets/bkBanner.png')}
        />
        <Text style={styles.bannerTitle}>Burger King</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.address}>
          Plaza II, 4, Jl. Hayam Wuruk No.108, RT.4/RW.9, Maphar, Kec. Taman
          Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11160
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <CountdownCard />
        <Text style={styles.segmentTitle}>Promo</Text>
        <CardItemList />
        <Text style={styles.segmentTitle}>Highest Discount</Text>
        <CardItemList />
        <Text style={styles.segmentTitle}>Menu</Text>
        <MenuItemList />
      </View>
      <DiscountBox
        style={styles.discountBox}
        boxSize={115}
        discountType={'all-dishes'}
        discountPercentage={50}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',
  },
  bannerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  bannerImage: {
    width: '100%',
  },
  bannerTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: 30,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    color: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  detailContainer: {
    width: '100%',
    paddingLeft: 8,
  },
  address: {
    width: '60%',
    color: '#707070',
    fontSize: 14,
  },
  discountBox: {
    position: 'absolute',
    right: 20,
    top: 120,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  segmentTitle: {
    fontSize: 14,
    paddingVertical: 10,
    color: '#000',
    fontWeight: 'bold',
  },
});
