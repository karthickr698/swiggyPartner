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
import { Checkbox } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';



import { icons, COLORS, SIZES, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Overlay } from 'react-native-elements';
import { Avatar } from 'react-native-paper';

const Suggestion = ({ route, navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    const ItemList=()=>{
        return (
            <View style={{ paddingHorizontal:SIZES.padding,backgroundColor:COLORS.white }}>
                <Text style={{ fontSize:SIZES.body5,color:COLORS.darkgray,paddingHorizontal:SIZES.padding,paddingVertical:SIZES.padding }}>you can select max 4 alternatives</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox.Android status="unchecked" />
                    <Text style={{
                        borderWidth:1,
                        width:14.5,
                        borderColor:'#b32d00',
                        padding:2,
                        height:16,
                        marginTop:SIZES.padding
                        }}
                    >
                        <Icon
                            name='circle'
                            color='#b32d00'
                            />
                    </Text>
                    <Text style={{paddingVertical:SIZES.paddingText1*3,color:COLORS.black,paddingHorizontal:SIZES.padding,fontSize:SIZES.body4}}>Chicken Seekh Kebab</Text>
                    <Text style={{paddingVertical:SIZES.paddingText1*4,paddingHorizontal:SIZES.paddingText,fontSize:SIZES.body5,color:COLORS.darkgray}}>
                        <Icon
                            name='inr'
                            color={COLORS.darkgray} 
                            style={{fontSize:SIZES.body5}}
                        />
                        360
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Checkbox.Android status="unchecked" />
                    <Text style={{
                        borderWidth:1,
                        width:14.5,
                        borderColor:'#b32d00',
                        padding:2,
                        height:16,
                        marginTop:SIZES.padding
                        }}
                    >
                        <Icon
                            name='circle'
                            color='#b32d00'
                            />
                    </Text>
                    <Text style={{paddingVertical:SIZES.paddingText1*3,color:COLORS.black,paddingHorizontal:SIZES.padding,fontSize:SIZES.body4}}>Chicken Seekh Kebab</Text>
                    <Text style={{paddingVertical:SIZES.paddingText1*4,paddingHorizontal:SIZES.paddingText,fontSize:SIZES.body5,color:COLORS.darkgray}}>
                        <Icon
                            name='inr'
                            color={COLORS.darkgray} 
                            style={{fontSize:SIZES.body5}}
                        />
                        360
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Checkbox.Android status="unchecked" />
                    <Text style={{
                        borderWidth:1,
                        width:14.5,
                        borderColor:COLORS.tags,
                        padding:2,
                        height:16,
                        marginTop:SIZES.padding
                        }}
                    >
                        <Icon
                            name='circle'
                            color={COLORS.tags}
                            />
                    </Text>
                    <Text style={{paddingVertical:SIZES.paddingText1*3,color:COLORS.black,paddingHorizontal:SIZES.padding,fontSize:SIZES.body4}}>Chicken Seekh Kebab</Text>
                    <Text style={{paddingVertical:SIZES.paddingText1*4,paddingHorizontal:SIZES.paddingText,fontSize:SIZES.body5,color:COLORS.darkgray}}>
                        <Icon
                            name='inr'
                            color={COLORS.darkgray} 
                            style={{fontSize:SIZES.body5}}
                        />
                        360
                    </Text>
                </View>
            </View>
        )
    }

    return(
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:SIZES.padding*2,paddingVertical:SIZES.padding*3,backgroundColor:COLORS.lightGray3}}>
                <View>
                    <Text style={{fontSize:SIZES.body4,fontWeight:'bold',paddingVertical:SIZES.paddingText}}>Suggest alternatives</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{borderWidth:1,width:18,borderColor:'#b32d00',padding:3,height:20,marginTop:SIZES.paddingText1}}>
                            <Icon
                                name='circle'
                                color='#b32d00'
                            />
                        </Text>
                        <Text style={{paddingHorizontal:SIZES.paddingText*2,fontSize:SIZES.body4,color:COLORS.black}}>
                            Chicken Seekh Kebab
                        </Text>
                    </View>
                    <Text style={{fontSize:SIZES.body4,paddingRight:SIZES.padding,paddingVertical:SIZES.paddingText}}>
                        <Icon
                            name='inr'
                            color={COLORS.black} 
                            style={{fontSize:SIZES.body4}}
                        />
                        360.00
                    </Text>
                </View>
                <Icon
                    name='times'
                    color={COLORS.black} 
                    style={{fontSize:SIZES.body1,paddingVertical:SIZES.padding*2}}
                />
            </View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{paddingHorizontal:SIZES.padding}}
                inputStyle={{fontSize:SIZES.body4}}
            />
            <ItemList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Suggestion;