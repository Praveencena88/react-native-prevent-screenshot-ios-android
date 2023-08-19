import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { enableSecureView, forbidAndroidShare } from 'react-native-prevent-screenshot-ios-android';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DetailsScreen = ({navigation}: {navigation: any}) => {

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', () => {
            if(Platform.OS === 'ios'){
                enableSecureView()
              }
              if(Platform.OS === 'android'){
                forbidAndroidShare()
              }
        });
        return unsubscribe;
      }, [navigation]);

    return (
      <View style={{ height: '100%' ,flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', }}>
        <Icon name="alert-octagon" color={'#EED202'} size={120} />
        <Text style={{color:'#000000', fontSize:28}}>I need to be prevented</Text>
      </View>
    );
  }