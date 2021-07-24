import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {removefromFavo} from './../../redux/action';
import COLORS from '../../consts/colors';
import {useSelector, useDispatch} from 'react-redux';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

const CartCard2 = ({item}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer3);
  const state2 = state;
  const item2 = state2.find(e => e.id === item.id);
  return (
    <View style={style.cartCard}>
      <Image source={{uri: item.image}} style={{height: 80, width: 80}} />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
        <Text style={{fontSize: 13, color: COLORS.grey}}>
          {item.ingredients}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
      </View>
      <View style={{marginRight: 20, alignItems: 'center'}}>
        {/* <Text style={{fontWeight: 'bold', fontSize: 18}}>
          {item2 ? item2.count : 0}
        </Text> */}
        <View style={style.actionBtn}>
          <TouchableOpacity onPress={() => dispatch(removefromFavo(item))}>
            {/* <FontAwesomeIcon icon={faMinusCircle} size={30} color="white" /> */}
            <Text>حذف</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard2;

const style = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
});
