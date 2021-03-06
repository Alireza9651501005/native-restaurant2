import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addtocart, addtoFavo, removefromFavo} from './../../redux/action';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLessThan, faHeart} from '@fortawesome/free-solid-svg-icons';

const DetailsScreen = ({navigation, route}) => {
  // const [flag, setflag] = useState(false);
  const item = route.params;
  const state = useSelector(state => state.reducer3);
  const newState = state;
  const newItem = newState.find(e => e.id === item.id && e.name === item.name);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (flag) {
    //   dispatch(addtoFavo(item));
    // } else {
    //   dispatch(removefromFavo(item));
    // }
    console.log('hasan roohani');
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <FontAwesomeIcon
          icon={faLessThan}
          size={25}
          onPress={navigation.goBack}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 7}}>
          Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={{uri: item.image}} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <TouchableOpacity
              style={style.iconContainer}
              onPress={() => {
                !newItem
                  ? dispatch(addtoFavo(item))
                  : dispatch(removefromFavo(item));
              }}>
              <FontAwesomeIcon
                icon={faHeart}
                size={25}
                color={newItem ? 'red' : COLORS.grey}
              />
            </TouchableOpacity>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View
            style={{
              marginTop: 40,
              marginBottom: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SecondaryButton
              title="?????????? ???? ?????? ????????"
              onPress={() => dispatch(addtocart(item))}
            />
          </View>
        </View>
      </ScrollView>
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
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
