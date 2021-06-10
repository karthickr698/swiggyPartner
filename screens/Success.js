import React,{useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Platform,
    FlatList
} from "react-native";
import { Header,Divider } from 'react-native-elements';

import { icons, COLORS, SIZES, FONTS, images } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Overlay } from 'react-native-elements';
import { Avatar } from 'react-native-paper';

const Success = ({ route, navigation }) => {

    return(
        <View
        style={{
            paddingTop:'70%',
            alignItems:'center',
        }}>
            <Image
                source={icons.success}
                style={{
                    width:200,
                    height:200,
                    marginBottom:'10%'
                }} 
            />
            <Text style={{paddingVertical:SIZES.padding,fontSize:SIZES.body3,fontWeight:'bold',color:COLORS.primary}}>ORDER CONFIRMED</Text>
            <Text style={{fontSize:SIZES.body3,color:COLORS.primary}}>Taking you to next order...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Success;