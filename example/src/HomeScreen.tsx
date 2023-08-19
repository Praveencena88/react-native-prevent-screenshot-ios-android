import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { allowAndroidShare, disableSecureView } from 'react-native-prevent-screenshot-ios-android';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', () => {
      if (Platform.OS === 'android') {
        allowAndroidShare();
      }
      if (Platform.OS == 'ios') {
          disableSecureView()
      }
    });
    return unsubscribe;
  }, [navigation]);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', }}>
        <Icon name="home-account" color={'#1E90FF'} size={120} />
        <Text style={{color:'#000000', fontSize:28}}>Home Screen</Text>
      </View>
    );
  }