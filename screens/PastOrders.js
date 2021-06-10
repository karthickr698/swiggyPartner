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
import { Searchbar,Menu,Button,Divider,Provider,Switch,RadioButton } from "react-native-paper";
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Overlay } from 'react-native-elements';


import { icons, COLORS, SIZES, FONTS, images } from '../constants'

const PastOrders = ({ navigation }) => {

    
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection:'row',
                paddingHorizontal:SIZES.padding2,
                paddingVertical:SIZES.padding2,
                borderBottomColor:COLORS.lightGray3,
                borderBottomWidth:3,
                justifyContent:'space-between'
            }}>
                <Text style={{
                    fontSize:SIZES.h4,
                    fontWeight:'bold'
                }}>
                    Past Orders
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        color:COLORS.primary
                    }}>
                        Export
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                paddingHorizontal:SIZES.padding
            }}>
                <View style={{
                    flexDirection:'row',
                    paddingHorizontal:SIZES.padding2*2,
                    paddingVertical:SIZES.padding2,
                    borderBottomColor:COLORS.lightGray3,
                    borderBottomWidth:3,
                    justifyContent:'space-between',
                }}>
                    <View>
                        <View>
                            <Text>
                                From
                            </Text>
                        </View>
                        <View style={{
                            flexDirection:'row',
                            paddingVertical:SIZES.padding2,
                            borderBottomColor:COLORS.lightGray3,
                            borderBottomWidth:2,
                            justifyContent:'space-between'
                        }}>
                            <Text
                                style={{
                                    paddingRight:SIZES.padding2
                                }}>
                                Jul 24,2018
                            </Text>
                            <Icon
                                name='calendar-o'
                                color={COLORS.black} 
                                style={{fontSize:SIZES.h3}}
                            />
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>
                                To
                            </Text>
                        </View>
                        <View style={{
                            flexDirection:'row',
                            paddingVertical:SIZES.padding2,
                            borderBottomColor:COLORS.lightGray3,
                            borderBottomWidth:2,
                            justifyContent:'space-between'
                        }}>
                            <Text
                                style={{
                                    paddingRight:SIZES.padding2
                                }}>
                                Jul 24,2018
                            </Text>
                            <Icon
                                name='calendar-o'
                                color={COLORS.black} 
                                style={{fontSize:SIZES.h3}}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>
                            TEST 20_CHD-SECTOR 70, North
                        </Text>
                    </View>
                </View>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.lightGray,
        marginTop:SIZES.padding2*2.5,
    }
})

export default PastOrders;