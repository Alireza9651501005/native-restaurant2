import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLessThan} from '@fortawesome/free-solid-svg-icons';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {checkout} from './../../redux/action';
import CartCard2 from '../components/CartCard2';
import {useDeviceOrientation} from '@react-native-community/hooks';

const FaveScreen = ({navigation}) => {
  const {portrait} = useDeviceOrientation();

  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer3);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <FontAwesomeIcon
          icon={faLessThan}
          size={25}
          onPress={navigation.goBack}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 7}}>
          Favourits
        </Text>
      </View>
      {!state.length ? (
        <View style={style.empty}>
          <Text style={[style.textt, {marginVertical: portrait ? 200 : 50}]}>
            در حال حاضر لیست علاقه مندی خالی است
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={state}
          renderItem={({item}) => {
            return <CartCard2 item={item} />;
          }}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  marginHorizontal: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <PrimaryButton
                  title="حذف لیست"
                  onPress={() => dispatch(checkout())}
                />
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textt: {
    fontSize: 35,
    fontWeight: 'bold',
    // marginVertical: 150,
    color: 'red',
  },
});

export default FaveScreen;
