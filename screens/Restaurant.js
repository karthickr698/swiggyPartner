import React,{useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Platform
} from "react-native";
import { Header,Divider } from 'react-native-elements';

import { icons, COLORS, SIZES, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Overlay } from 'react-native-elements';
import { Avatar } from 'react-native-paper';


const Restaurant = ({ route, navigation }) => {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const LeftComponent=()=>{
        return(
            <Icon
                name='long-arrow-left'
                color={COLORS.white}
                size={25} 
                style={{
                    paddingLeft:10
                }} 
            />
        )
    }

    const CenterComponent=()=>{
        return(
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:COLORS.white,fontSize:SIZES.body2}}>#16694-69<Text style={{color:COLORS.tags}}>-0174</Text></Text>
                    <Text style={{
                        fontWeight:'bold',
                        color:COLORS.white,
                        backgroundColor:COLORS.tags,
                        height:30,
                        paddingVertical:3,
                        paddingHorizontal:10,
                        marginLeft:SIZES.padding
                    }}>
                        NEW
                    </Text>
                </View>
                <View style={{flexDirection:'row',paddingVertical:SIZES.padding*2}}>
                    <Text style={{color:COLORS.darkgray,fontSize:SIZES.body5}}>10 : 54 AM | 1 items for</Text>
                    <Icon
                        name='inr'
                        color={COLORS.darkgray} 
                        style={{paddingHorizontal:SIZES.paddingText,paddingTop:SIZES.paddingText}}
                    />
                    <Text style={{color:COLORS.darkgray,fontSize:SIZES.body5}}>360</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header
                    placement="left"
                    leftComponent={<LeftComponent />}
                    centerComponent={ <CenterComponent /> }
                    rightComponent={{ text:'HELP', style:{color: '#fff',fontWeight:'bold',fontSize:SIZES.body3} }}
                    containerStyle={{
                        backgroundColor: COLORS.header,
                        paddingHorizontal:SIZES.padding*2,
                        paddingTop:SIZES.padding*5
                    }}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:SIZES.padding*2,paddingTop:SIZES.padding*2}}>
                <Text style={{fontSize:SIZES.h3,fontWeight:'bold'}}>Chicken Seekh Kebab</Text>
                <Text style={{fontSize:SIZES.h3,fontWeight:'bold',paddingRight:SIZES.padding}}>x 1</Text>
            </View>
            <Text style={{paddingHorizontal:SIZES.padding*2,paddingVertical:SIZES.padding,fontSize:SIZES.body3,color:COLORS.darkgray}}>kebabs</Text>
            <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding*2}}>
                <Text style={{borderWidth:1,width:18,borderColor:'#b32d00',padding:3,height:20}}>
                    <Icon
                        name='circle'
                        color='#b32d00'
                    />
                </Text>
                <Text style={{paddingHorizontal:SIZES.paddingText*3,fontSize:SIZES.body3,color:COLORS.darkgray}}>
                    <Icon
                        name='inr'
                        color={COLORS.darkgray} 
                        style={{fontSize:SIZES.body3}}
                    />
                    360
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{width:'40%'}}></View>
                <Text style={{fontWeight:'bold',fontSize:SIZES.body3}}>Bill Total</Text>
                <Text style={{fontWeight:'bold',fontSize:SIZES.body3,paddingRight:SIZES.padding}}>
                    <Icon
                        name='inr'
                        color={COLORS.black} 
                        style={{fontSize:SIZES.body3}}
                    />
                    360.00
                </Text>
            </View>
            <Text style={{paddingHorizontal:SIZES.padding}}>
                <Divider style={{ backgroundColor: 'blue' }} />;
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:SIZES.padding}}>
                <Text style={{width:'40%',fontSize:SIZES.body3,color:COLORS.darkgray}}>Item total</Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray}}>1 item</Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray,paddingRight:SIZES.padding}}>
                    <Icon
                        name='inr'
                        color={COLORS.darkgray}
                    />
                    360.00
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:SIZES.padding}}>
                <Text style={{width:'70%',fontSize:SIZES.body3,color:COLORS.darkgray}}>Packing charges</Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray}}></Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray,paddingRight:SIZES.padding}}>
                    <Icon
                        name='inr'
                        color={COLORS.darkgray}
                    />
                    0
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:SIZES.padding}}>
                <Text style={{width:'67%',fontSize:SIZES.body3,color:COLORS.darkgray}}>GST</Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray}}></Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray,paddingRight:SIZES.padding}}>
                    <Icon
                        name='inr'
                        color={COLORS.darkgray} 
                    />
                    0
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:SIZES.padding}}>
                <Text style={{width:'60%',fontSize:SIZES.body3,color:COLORS.darkgray}}>Discount</Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray}}></Text>
                <Text style={{fontSize:SIZES.body3,color:COLORS.darkgray,paddingRight:SIZES.padding}}>
                    <Icon
                        name='inr'
                        color={COLORS.darkgray} 
                    />
                    0.00
                </Text>
            </View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={{paddingHorizontal:SIZES.padding*3}}>
                    <Icon
                        name='clock-o'
                        size={45}
                        color={COLORS.darkgray}
                        style={{textAlign:'center',paddingVertical:SIZES.padding*2}} 
                    />  
                    <Text style={{textAlign:'center',color:COLORS.darkgray,fontWeight:'bold'}}>How long will this take to prepare?</Text>
                    <View style={{padding:3,flexDirection:'row',borderWidth:1,borderColor:COLORS.tags,borderRadius:SIZES.radius,justifyContent:'space-between',marginVertical:SIZES.padding*2}}>
                        <TouchableOpacity>
                            <Avatar.Icon size={55} icon="plus" style={{backgroundColor: COLORS.tags}} />
                        </TouchableOpacity>
                        <Text style={{paddingHorizontal:SIZES.padding*3,paddingVertical:SIZES.padding,fontWeight:'bold',fontSize:SIZES.body2}}>17 MINS</Text>
                        <TouchableOpacity>
                            <Avatar.Icon size={55} icon="plus" style={{backgroundColor: COLORS.tags}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor:COLORS.tags}}>
                    <Text style={{textAlign:'center',paddingVertical:SIZES.paddingText*2,fontSize:SIZES.body4,fontWeight:'bold',color:COLORS.white}}>Done</Text>
                </TouchableOpacity>
            </Overlay>
            <View 
                style={{
                    position:'absolute',
                    bottom:0,
                    flexDirection:'row',
                    width:'100%',
                    height:60,
                }}
            >
                <TouchableOpacity 
                    style={{
                        backgroundColor:COLORS.darkgray,
                        width:'50%',
                    }}
                    onPress={toggleOverlay}
                >
                    <Text style={{textAlign:'center',paddingTop:SIZES.paddingText*3,fontSize:SIZES.body4,fontWeight:'bold'}}>MARK OUT OF STOCK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:COLORS.tags,width:'50%'}}>
                    <Text style={{textAlign:'center',paddingTop:SIZES.paddingText*3,fontSize:SIZES.body4,fontWeight:'bold',color:COLORS.white}}>CONFIRM NOW</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant;