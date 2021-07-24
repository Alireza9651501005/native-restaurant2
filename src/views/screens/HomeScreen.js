import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {useDeviceOrientation} from '@react-native-community/hooks';

import ListCategories from '../components/ListCategories';
import {pizzas} from './../../consts/foods';
import {sushies} from './../../consts/foods';
import {salads} from './../../consts/foods';
import {bergers} from './../../consts/foods';

const HomeScreen = ({navigation}) => {
  const state = useSelector(state => state.reducer2);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const {portrait} = useDeviceOrientation();

  useEffect(() => {
    if (state.length) {
      switch (state.toString()) {
        case 'bergers': {
          setPosts(bergers);
          setCurrentPage(1);
        }
        break;
        case 'sushies': {
          setPosts(sushies);
          setCurrentPage(1);
        }
        break;
        case 'salads': {
          setPosts(salads);
          setCurrentPage(1);
        }
        break;
        case 'pizzas': {
          setPosts(pizzas);
          setCurrentPage(1);
        }
        break;
        default:
          setPosts(pizzas);
      }
    } else {
      setPosts(pizzas);
    }
  }, [state]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const changeIndex = () => {
    currentPage < Math.ceil(posts.length / postsPerPage)
      ? setCurrentPage(prev => prev + 1)
      : setCurrentPage(prev => (prev = 1));
  };

  const pages = {
    1: 'صفحه 1',
    2: 'صفحه 2',
    3: 'صفحه 3',
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 160}}>
        <View style={style.header}>
          <View>
            <View
              style={{flexDirection: 'row', marginLeft: portrait ? 0 : 150}}>
              <Text style={{fontSize: portrait ? 18 : 15}}>
                به رستوران من خوش آمدید!
              </Text>
              <Text
                style={{
                  fontSize: portrait ? 18 : 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                سلام
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Password')}>
            <Image
              source={{
                uri: 'https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png',
              }}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={[style.searchBox, {marginBottom: 10}]}>
          <View style={[style.inputContainer, {width: portrait ? 200 : 300}]}>
            <FontAwesomeIcon icon={faSearch} size={25} />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="جستجوی غذا"
            />
          </View>
          <View style={style.sortBtn}>
            <FontAwesomeIcon icon={faSearchPlus} size={20} />
          </View>
        </View>
        <View style={style.constentCards}>
          <ListCategories />
        </View>
      </View>
      <View style={style.constentCards}>
        <Text>برای تغییر صفحه به سمت پایین اسکرول کنید</Text>
        <Text style={style.txx}>{pages[currentPage]}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={currentPosts}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <Card food={item} navigation={navigation} />}
          onEndReachedThreshold={0}
          onEndReached={changeIndex}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    // margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 100,
  },
  constentCards: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  inputContainer: {
    // flex: 1,

    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgg: {
    width: 30,
    height: 30,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  txx: {
    fontSize: 25,
  },
});

export default HomeScreen;
