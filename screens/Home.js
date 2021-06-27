import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Platform
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

    const tabs=[
        {
            name:'all',
            value:'All'
        },
        {
            name:'preparing',
            value:'Preparing'
        },
        {
            name:'pending',
            value:'Pending'
        },
        {
            name:'done',
            value:'Done'
        }
    ]

    const RenderHeader =() =>{
        return (
            <View style={{
                paddingVertical:SIZES.paddingText*4,
                justifyContent:'space-between', 
                paddingHorizontal:SIZES.paddingText*3,
                backgroundColor:COLORS.header,
                marginTop:Platform.OS === "web"?0:20
            }}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',paddingVertical:SIZES.padding*2,width:'50%'}}>
                        <Text style={{fontWeight:'bold',color:COLORS.black,backgroundColor:COLORS.tags,height:30,borderRadius:20,paddingVertical:3,paddingHorizontal:10}}>ON</Text>
                        <Text style={{color:COLORS.white,paddingHorizontal:10,paddingVertical:2}}>Sector 70, North Mohali Sector 70, North Mohali</Text>
                    </View>
                    <View>
                        <Text style={{color:COLORS.darkgray,paddingVertical:SIZES.paddingText}}>Preparation time</Text>
                        <Text style={{color:COLORS.white,textAlign:'center',backgroundColor:'rgba(255,255,255,0.2)',paddingVertical:SIZES.paddingText1*3,borderRadius:10}}>15 mins</Text>
                    </View>
                </View>
                <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:SIZES.h1}}>Orders</Text>
            </View>
        )
    }

    const RenderTabs=()=>{
        const renderItem = ({ item }) => {
            console.log(item)
            return (
                <TouchableOpacity
                    style={{
                        borderRadius: SIZES.radius1,
                        marginRight: SIZES.padding,
                        borderWidth:2,
                        borderColor:COLORS.darkgray,
                        paddingHorizontal:SIZES.padding*2,
                        paddingVertical:SIZES.paddingText*2,
                        backgroundColor:item.name==='all'?COLORS.darkgray:COLORS.white,
                    }}
                >
                    <Text
                        style={{
                            color:item.name!=='all'?COLORS.darkgray:COLORS.white,
                            fontSize:SIZES.body3
                        }}
                    >
                        {item.value}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{backgroundColor:COLORS.white,borderBottomWidth:1,borderBottomColor:COLORS.line }}>
                <FlatList
                    data={tabs}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.name}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding:SIZES.padding*2 }}
                />
            </View>
        )
    }

    const RenderListItems=()=>{
        return(
            <TouchableOpacity 
            style={{
                backgroundColor:COLORS.tags,
                margin:SIZES.padding,
                borderRadius:SIZES.radius1,
                height:80,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                paddingHorizontal:SIZES.padding*2
                }}
            >
                <Text style={{fontSize:SIZES.h4,fontWeight:'bold',color:COLORS.white}}>You have a new order!</Text>
                <View style={{
                    borderRadius:50,
                    backgroundColor:COLORS.white,
                    padding:SIZES.paddingText1*2
                }}>
                    <Image
                        source={icons.goRight}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.tags,
                            width: 25,
                            height: 25,
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const RenderCard = () => {
        return(
            <View style={{
                margin:SIZES.padding,
                borderWidth: 1,
                borderColor: COLORS.lightGray3,
                paddingTop:SIZES.padding*3
            }} >
                <Text style={{
                    backgroundColor:COLORS.primary,
                    width:130,
                    letterSpacing:4,
                    padding: SIZES.paddingText,
                    fontSize:SIZES.body5
                    }}
                >
                    PREPARING
                </Text>
                <View
                    style={{
                        paddingHorizontal:15,
                        paddingTop:20
                    }}
                    >
                    <View style={{
                        borderBottomWidth:.5,
                        borderBottomColor: COLORS.lightGray3,
                        borderStyle: 'dotted',
                        borderRadius:1,
                        paddingBottom:SIZES.padding*2,
                        paddingHorizontal:SIZES.paddingText*3
                    }}>
                        <Text style={{
                            fontSize:SIZES.body3,
                            fontWeight:'bold',
                            paddingVertical:SIZES.paddingText
                        }}>
                            #0174
                        </Text>
                        <Text style={{
                            fontSize:SIZES.body5,
                            color: COLORS.darkgray,
                        }}>
                            10:54 AM I Chicken Seekh Kebab 
                        </Text>
                    </View>
                    <View style={{
                            paddingVertical:SIZES.padding,
                            justifyContent:'center',
                            flexDirection:'row'
                        }}>
                            <View
                                style={{
                                    borderColor:COLORS.black,
                                    borderWidth:2,
                                    borderRadius:50,
                                    padding:SIZES.paddingText1
                                }}
                            >
                                <Icon
                                    name='check'
                                    color={COLORS.black} 
                                    style={{fontSize:SIZES.body4}}
                                />
                            </View>
                        <Text style={{
                            fontSize:SIZES.body3,
                            fontWeight:'bold',
                            paddingHorizontal:SIZES.padding
                        }}>
                            FOOD READY
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <RenderHeader />
            <RenderTabs />
            <RenderListItems />
            <RenderCard />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    footerText:{
        fontSize:80,
        fontWeight:'bold',
        color:'black',
        opacity:0.3,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    cont:{
        display:'flex',
        flexDirection:"row",
        padding:SIZES.padding,
        backgroundColor:COLORS.white
    },
    mainCont:{
        backgroundColor:COLORS.white,
        paddingBottom:20
    },
    button:{
        width:180,
        height:55,
        borderRadius:10,
        color:COLORS.primary,
        borderColor:COLORS.darkgray,
        borderWidth:2,
        fontSize:SIZES.h3,
        paddingTop:14,
        marginTop:20,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Home