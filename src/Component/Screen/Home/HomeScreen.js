import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { getProducts } from '../../redux/action/product';
import { connect } from 'react-redux';


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

    componentDidMount(){
        this.getProducts();
    }

    async getProducts(){
        await this.props.dispatch(getProducts());
    }

    onRefreshing = () => {
        this.getProducts();
    }

    renderRow = ({item}) => {
        return(
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                    <Image source={{uri:item.image, width: 100, height: 100}} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20 , marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Rp. {item.price}</Text>
                        <Text style={{ fontSize: 13 , marginLeft: 10, marginBottom: 5 }}>Stock: {item.stock}</Text>
                    </View>
                </View>
        )
    }

    render(){ 
        const {products} = this.props
        return(
            <View style={{flex:1}}>
                <View style={{ height:54, flexDirection:'row'}}>
                    <View style={{backgroundColor:'rgb(245, 149, 84)', flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity 
                                style={{borderRadius:15, backgroundColor: 'rgb(245, 149, 84)', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20, height:43}} >
                                    <Text style={{ color: "#fff", fontSize:15 }}>Category</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'rgb(245, 149, 84)', flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity 
                                style={{borderRadius:15, backgroundColor: 'rgb(245, 149, 84)', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20, height:43}}
                                onPress={() => this.props.navigation.navigate('Product')}>
                                    <Text style={{ color: "#fff", fontSize:15 }}>Product</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'rgb(245, 149, 84)', flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity 
                                style={{borderRadius:15, backgroundColor: 'rgb(245, 149, 84)', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20, height:43}}
                                onPress={() => this.props.navigation.navigate('Home')}>
                                    <Text style={{ color: "#fff", fontSize:15 }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor: '#e4b7362e'}}>
                <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10}}>
                    <FlatList 
                        data={products.products}
                        renderItem={this.renderRow}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps) (HomeScreen);