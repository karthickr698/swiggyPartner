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

const MenuDetails = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const Topbar = () => {
        return(
            <View style={{
                backgroundColor:COLORS.white,
                flexDirection:'row',
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{
                            width:25,
                            height:25,
                            marginHorizontal:SIZES.padding2,
                            marginVertical:SIZES.padding2*2
                        }}
                        source={icons.leftarrow}
                    />
                </TouchableOpacity>
                <View style={{
                        paddingVertical:SIZES.padding2,
                    }}>
                    <Text style={{
                        fontSize:SIZES.h4,
                        fontWeight:'bold'
                    }}>
                        Menu Details
                    </Text>
                    <Text style={{color:COLORS.darkgray}}>
                        Test 20_CHD-Sector 70, North Mohali
                    </Text>
                </View>
            </View>
        )
    }
    const Searchflat = ({ navigation }) => {
        const [visible, setVisible] = useState(false);
        const [Click, setClick] = useState(false);

        const toggleOverlay = () => {
            setVisible(!visible);
        };
        const handleClick = () => {
            setClick(!Click);
        };
        const list = [
            {
              title: 'Appointments',
            },
            {
              title: 'Trips',
            },
        ]

        const data = [
            {
                title: 'Appointments',
            },
            {
            title: 'Trips',
            },
            {
            title: 'a',
            },
            {
            title: 'b',
            },
            {
            title: 'v',
            },
            {
            title: 'f',
            },
            {
                title: 'vs',
                },
                {
                title: 'ff',
                },
        ]
          const [isSwitchOn, setIsSwitchOn] = React.useState(false);
        
          const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

          const [checked, setChecked] = React.useState('first');

        const renderItem = ({ item }) => {
            return (
                <View>
                    <View style={{flexDirection:'row',paddingVertical:SIZES.padding}}>
                        <View style={{marginVertical:SIZES.paddingText}}>
                            <Text style={{borderWidth:1,width:18,borderColor:'#b32d00',padding:3,height:20,marginTop:SIZES.paddingText1}}>
                                <Icon
                                    name='circle'
                                    color='#b32d00'
                                    />
                            </Text>
                        </View>
                        <View style={{paddingHorizontal:SIZES.padding2,width:'77%'}} >
                            <Text style={{fontSize:SIZES.body4,fontWeight:'bold',paddingVertical:SIZES.paddingText}}>Suggest alternatives</Text>
                            <Text style={{fontSize:SIZES.body4,color:COLORS.darkgray}}>
                                Chicken Seekh Kebab
                            </Text>
                            <Text style={{fontSize:SIZES.body4,paddingRight:SIZES.padding,paddingVertical:SIZES.paddingText,color:COLORS.darkgray}}>
                                <Icon
                                    name='inr'
                                    color={COLORS.darkgray} 
                                    style={{fontSize:SIZES.body4}}
                                />
                                360.00
                            </Text>
                        </View>
                        <View >
                            <Switch
                                color={COLORS.tags}
                                style={{ transform: [{ scaleX: 1.2
                                    }, { scaleY: 1.2 }] }}
                                value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                    </View>
                    <Divider />
                </View>
            )
        }
        
        return(
            <View>
                <View style={{
                    marginTop:SIZES.padding2*3,
                    marginVertical:SIZES.padding
                }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{paddingHorizontal:SIZES.padding}}
                        inputStyle={{fontSize:SIZES.body4}}
                    />
                </View>
                <View>
                <ListItem
                    style={{
                        borderColor:COLORS.lightGray3,
                        borderBottomWidth:1
                    }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection:'row'
                            }}
                            onPress={toggleOverlay}
                        >
                            <ListItem.Content>
                                <ListItem.Title>Select Dish Category</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron Component={()=>
                                <Icon
                                    name='chevron-down'
                                    color={COLORS.black} 
                                    style={{fontSize:SIZES.body4}}
                                />
                            }/>
                        </TouchableOpacity>
                    </ListItem>
                </View>
                <Overlay overlayStyle={{minWidth:'90%',height:'30%'}} isVisible={visible} onBackdropPress={toggleOverlay}>
                    {
                        list.map((item, i) => (
                            <TouchableOpacity key={item.title}>
                            <Text
                                style={{
                                    paddingVertical:SIZES.padding,
                                    fontSize:SIZES.h4
                                }}>{item.title}</Text>
                                <Divider/>
                            </TouchableOpacity>
                        ))
                    }
                </Overlay>
                <TouchableOpacity
                    onPress={handleClick}
                >

                    <View style={{
                        flexDirection:'row',
                        backgroundColor:COLORS.white,
                        paddingVertical:SIZES.padding2,
                        paddingHorizontal:SIZES.padding*2,
                        marginTop:SIZES.padding,
                        width:'100%',
                        justifyContent:"space-between"
                    }}
                    >
                        <Text>
                            Items
                        </Text>
                        <Text>
                            Available
                        </Text>
                    </View>
                </TouchableOpacity>
                <Overlay overlayStyle={{paddingHorizontal:SIZES.padding2*2,marginHorizontal:SIZES.padding2*2,paddingBottom:0,minHeight:'30%'}} isVisible={Click} onBackdropPress={handleClick}>
                    <View>
                            <View>
                                <Text style={{
                                    color:COLORS.lightGray4,
                                    fontSize:SIZES.h5,
                                    paddingVertical:SIZES.padding2
                                }}>
                                    confirm that <Text style={{
                                    color:COLORS.black,
                                    fontSize:SIZES.h4,
                                    fontWeight:'bold'
                                }}>
                                    Veg Hyderabadi Biryani
                                </Text> is out of stock for the below time frame.</Text>
                                <Divider/>
                                <Text style={{
                                    paddingTop:SIZES.padding2
                                }} >
                                    You will not reccive order for this item till
                                </Text>
                                <Text style={{
                                    color:COLORS.primary
                                }}>6 hours from now</Text>
                                <View>
                                    <View style={{
                                        flexDirection:'row',
                                        marginTop:SIZES.padding2*2,
                                        borderWidth:1,
                                        marginBottom:SIZES.paddingText1,
                                        borderColor:COLORS.lightGray3
                                    }}>
                                        <RadioButton
                                            color="gray"
                                            value="first"
                                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('first')}
                                        />
                                        <Text style={{
                                            paddingVertical:SIZES.paddingText1*3
                                        }}>End of day</Text>
                                    </View>
                                    <View style={{
                                        flexDirection:'row',
                                        marginTop:SIZES.padding,
                                        borderWidth:1,
                                        marginBottom:SIZES.paddingText1,
                                        borderColor:COLORS.lightGray3
                                    }}>
                                        <RadioButton
                                            color="gray"
                                            value="second"
                                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('second')}
                                        />
                                        <Text style={{
                                            paddingVertical:SIZES.paddingText1*3
                                        }}>6 Hours</Text>
                                    </View>
                                    <View style={{
                                        flexDirection:'row',
                                        marginTop:SIZES.padding,
                                        borderWidth:1,
                                        marginBottom:SIZES.paddingText1,
                                        borderColor:COLORS.lightGray3
                                    }}>
                                        <RadioButton
                                            color="gray"
                                            value="third"
                                            status={ checked === 'third' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('third')}
                                        />
                                        <Text style={{
                                            paddingVertical:SIZES.paddingText1*3
                                        }}>5 Hours</Text>
                                    </View>
                                    <View style={{
                                        flexDirection:'row',
                                        marginTop:SIZES.padding,
                                        borderWidth:1,
                                        marginBottom:SIZES.paddingText1,
                                        borderColor:COLORS.lightGray3
                                    }}>
                                        <RadioButton
                                            color="gray"
                                            value="fourth"
                                            status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                                            onPress={() => setChecked('fourth')}
                                        />
                                        <Text style={{
                                            paddingVertical:SIZES.paddingText1*3
                                        }}>Custom Time</Text>
                                        <View
                                            style={{
                                                paddingHorizontal:SIZES.padding2*2,
                                                paddingVertical:SIZES.padding2,
                                                marginLeft:'40%'
                                            }}>
                                        <Icon
                                            style={{
                                                marginLeft:SIZES.padding2
                                            }}
                                            name='calendar-o'
                                            color={COLORS.black} 
                                            style={{fontSize:SIZES.h3}}
                                        />
                                        </View>
                                    </View>
                                        <Text style={{
                                            paddingVertical:SIZES.padding2
                                        }}>
                                            *You can an item out of stock for a maximum of 12 days
                                        </Text>
                                        <Divider/>
                                        <View style={{
                                            flexDirection:'row',
                                            justifyContent:'space-between',
                                            marginTop:SIZES.padding2*2,
                                        }}>
                                            <TouchableOpacity>
                                                <Text style={{
                                                    backgroundColor:COLORS.tags,
                                                    padding:SIZES.padding2,
                                                    borderRadius:SIZES.radius1,
                                                    color:COLORS.white,
                                                    fontSize:SIZES.h4
                                                }}>Confirm</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={{
                                                    padding:SIZES.padding2,
                                                    borderRadius:SIZES.radius1,
                                                    color: 'red',
                                                    fontSize:SIZES.h4
                                                }}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                            </View>
                    </View>
                </Overlay>
                <View style={{
                        backgroundColor:COLORS.white,
                        marginTop:SIZES.padding*2,
                        paddingVertical:SIZES.padding,
                        paddingHorizontal:SIZES.padding*2
                    }}>
                    <Text>
                        Biryani
                    </Text>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={true}
                        keyExtractor={item => `${item.title}`}
                        renderItem={renderItem}
                    />
                </View>
                
            </View>
        )
    }

    const renderData=[{id:1}]
      

    return (
        <SafeAreaView style={styles.container}>
            <Topbar/>
            <FlatList
                data={renderData}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={()=>
                    <View style={{width:'100%'}}>
                        <Searchflat/>
                    </View>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.lightGray,
        paddingTop:SIZES.padding2*2.5,
    }
})

export default MenuDetails;