import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile() {
  const [imgg, setImgg] = useState('');

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImgg(prev => (prev = image.path));
    });
  };

  const camera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImgg(prev => (prev = image.path));
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.ttxx}>Change Profile Picture</Text>
      <View style={styles.label}>
        <TouchableOpacity style={styles.label2} onPress={camera}>
          <Text style={styles.ttxx}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.label2} onPress={openGallery}>
          <Text style={styles.ttxx}>Galary</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.pick, {backgroundColor: 'green'}]}
        onPress={openGallery}>
        {imgg === '' ? (
          <Image
            source={require('../../assets/placholderimage.jpg')}
            style={styles.pick}
          />
        ) : (
          <Image source={{uri: imgg}} style={styles.pick} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pick: {
    width: 250,
    height: 250,
    borderRadius: 150,
  },
  label: {
    marginVertical: 30,
    flexDirection: 'row',
  },
  label2: {
    marginHorizontal: 15,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  ttxx: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
