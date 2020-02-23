import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default function PaymentScreen() {
  const [valueTop, setTopValue] = useState(1);
  const [valueBot, setBotValue] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment and Deliver options:</Text>
      <View style={styles.methodContainer}>
        <Text>Choose payment methods</Text>
        <View style={styles.methodOptionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTopValue(1)}>
            {valueTop === 1 ? <View style={styles.buttonChecker} /> : <></>}
          </TouchableOpacity>
          <Image
            style={styles.methodOptionIcon}
            source={require('../assets/ovo.png')}
          />
          <View>
            <Text>Rp. 4,993,000.00</Text>
            <Text>Points: 203.000</Text>
          </View>
        </View>
        <View style={styles.methodOptionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTopValue(2)}>
            {valueTop === 2 ? <View style={styles.buttonChecker} /> : <></>}
          </TouchableOpacity>
          <Text> Setup Other Payment Method</Text>
        </View>
      </View>
      <View style={styles.paymentDetailsContainer}>
        <Text>Where should the food be delivered to?</Text>
        <Image
          style={styles.addressImage}
          source={require('../assets/address.png')}
        />
        <View style={styles.addressDetails}>
          <Text>Delivery Address</Text>
          <Text>
            Jl. Kyai H. Syahdan No.9, RT.6/RW.12, Kemanggisan, Kec. Palmerah,
            Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480
          </Text>
        </View>
        <Text>Select the desired courier:</Text>
        <View style={styles.methodOptionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setBotValue(1)}>
            {valueBot === 1 ? <View style={styles.buttonChecker} /> : <></>}
          </TouchableOpacity>
          <Text style={styles.courier}>Go-Jek</Text>
          <Text>+ Rp. 12,000.00</Text>
        </View>
        <View style={styles.methodOptionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setBotValue(2)}>
            {valueBot === 2 ? <View style={styles.buttonChecker} /> : <></>}
          </TouchableOpacity>
          <Text style={styles.courier}>Grab</Text>
          <Text>+ Rp. 10,000.00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.proceedButtonContainer}>
        <Text style={styles.proceedButtonText}>
          PROCEED - TOTAL : Rp.41.400,00
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  methodContainer: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 3,
    marginVertical: 5,
  },
  methodOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  button: {
    width: 22,
    height: 22,
    borderRadius: 22,
    borderWidth: 1,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonChecker: {
    width: 12,
    height: 12,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  methodOptionIcon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  paymentDetailsContainer: {
    paddingVertical: 15,
    paddingHorizontal: 9,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 3,
    marginVertical: 5,
  },
  addressImage: {
    marginVertical: 10,
    width: '100%',
    height: 185,
  },
  addressDetails: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 3,
    marginVertical: 10,
    padding: 5,
  },
  courier: {
    width: '25%',
  },
  proceedButtonContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 40,
    backgroundColor: '#E53735',
    borderRadius: 5,
    paddingVertical: 10,
  },
  proceedButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
