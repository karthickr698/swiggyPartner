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
import { icons, COLORS, SIZES, FONTS, images } from '../constants'
import { ListItem } from 'react-native-elements'

const Menus = ({ navigation }) => {
    
    return(
        <View style={styles.container}>
            <View
                    style={{
                        backgroundColor:COLORS.white,
                        paddingVertical:SIZES.padding2*2
                    }}
                    >
                    <ListItem
                    style={{
                        borderColor:COLORS.lightGray3,
                        borderBottomWidth:1
                    }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MenuDetails')}
                            style={{
                                flexDirection:'row'
                            }}
                        >
                            <ListItem.Content>
                                <ListItem.Title>Menu Details</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem
                    style={{
                        borderColor:COLORS.lightGray3,
                        borderBottomWidth:1
                    }}
                    >
                        <TouchableOpacity style={{
                            flexDirection:'row'
                        }}>
                            <ListItem.Content
                            >
                                <ListItem.Title>Items Out of Stuck</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                            </TouchableOpacity>
                    </ListItem>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white,
        paddingVertical:SIZES.padding2*2.5,
        paddingHorizontal:SIZES.padding
    }
})

export default Menus;