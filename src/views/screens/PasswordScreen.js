import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Mypass = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PasswordScreen = ({navigation}) => {
  const [Arr, setArr] = useState([]);
  function randomUniqueNum(range, outputCount) {
    let arr = [];
    for (let i = 1; i <= range; i++) {
      arr.push(i);
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }

    return result;
  }
  const aa = randomUniqueNum(9, 3);
  const bb = {
    1: 'یک',
    2: 'دو',
    3: 'سه',
    4: 'چهار',
    5: 'پنج',
    6: 'شش',
    7: 'هفت',
    8: 'هشت',
    9: 'نه',
  };

  const compaire = () => {
    if (Arr.length === 3) {
      if (Arr[0] === aa[0] && Arr[1] === aa[1] && Arr[2] === aa[2]) {
        navigation.navigate('Profile');
        setArr([]);
      } else {
        navigation.navigate('Home');
        setArr([]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.jheader}>
        <Text style={styles.ttxx}>{bb[aa[2]]}</Text>
        <Text style={styles.ttxx}>{bb[aa[1]]}</Text>
        <Text style={styles.ttxx}>{bb[aa[0]]}</Text>
      </View>
      <View style={styles.jadval}>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[0]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[0]}
        </Text>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[1]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[1]}
        </Text>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[2]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[2]}
        </Text>
      </View>
      <View style={styles.jadval}>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[3]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[3]}
        </Text>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[4]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[4]}
        </Text>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[5]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[5]}
        </Text>
      </View>
      <View style={styles.jadval}>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[6]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[6]}
        </Text>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[7]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[7]}
        </Text>
        <Text
          style={styles.txtt}
          onPress={() => {
            let Arr2 = Arr;
            if (Arr2.length < 3) {
              Arr2.push(Mypass[8]);
              setArr(Arr2);
            }
            compaire();
          }}>
          {Mypass[8]}
        </Text>
      </View>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jheader: {
    flexDirection: 'row',
  },
  txtt: {
    marginVertical: 10,
    borderWidth: 2,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  jadval: {
    flexDirection: 'row',
  },
  ttxx: {
    margin: 20,
    fontSize: 25,
  },
});
