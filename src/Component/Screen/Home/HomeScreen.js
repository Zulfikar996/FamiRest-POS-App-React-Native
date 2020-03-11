import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class HomeScreen extends Component{
    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: 'rgb(245, 149, 84)',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

    render(){ 
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Home Screen</Text> */}
                <TouchableOpacity 
                        style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                        onPress={() => this.props.navigation.navigate('Product')}>
                            <Text style={{ color: "#fff" }}>Product</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                        onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: "#fff" }}>Login</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

export default HomeScreen;