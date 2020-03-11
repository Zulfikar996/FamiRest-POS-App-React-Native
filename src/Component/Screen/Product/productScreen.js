import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, Label ,FooterTab, Button, Left, Right, Body, Icon,  Form, Item, Input, Thumbnail } from 'native-base';


// import Spinner from '../Spinner/Spinner';

import { getProducts, deleteProduct } from '../../redux/action/product';
import product from '../../redux/reducer/product';
import { TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';


class Product extends Component{

    static navigationOptions = ({ navigation }) => {
        return{
            title:null,
        headerStyle: {
            backgroundColor: 'rgb(245, 149, 84)',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
        headerRight: () => (
            <TouchableOpacity 
                style={{ backgroundColor: 'rgb(245, 149, 84)', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20, borderRadius: 15}}
                        onPress={() => navigation.navigate('AddProduct')}>
                            <Text style={{ color: "#fff" }}>Add Product</Text>
                </TouchableOpacity>
            ),
        }
    }

    state={
        name:'',
    }

    seacrhProduct = (name) =>{
        this.setState({
            name,
        })
        this.props.dispatch(getProducts(name))
    }

    componentDidMount(){
        this.getProducts();
    }

    async getProducts(){
        await this.props.dispatch(getProducts());
    }

    onRefreshing = () => {
        this.getProducts();
    }

    deleteProduct = (propsId) =>{
        this.props.dispatch(deleteProduct(propsId))
    }

    renderRow = ({item}) => {
        return(
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                    <Image source={{uri:item.image, width: 100, height: 100}} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20 , marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Rp. {item.price}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.navigate('EditProduct', {
                                product: item
                            })}>
                                <Text style={{ fontSize: 17, color: "orange" }} >Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.deleteProduct(item.id)}>
                                <Text style={{ fontSize: 17, color: "red" }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        )
    }

    render(){
        const {products} = this.props;
        let data = [{
            value: 'Food',
          }, {
            value: 'Drink',
          }];
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:'row' , height:55}}>
                    <View style={{flex:1}}>
                    <TextInput placeholder="Search" style={{ width:250 ,height: 40, fontSize:20, borderColor: 'gray', borderWidth: 1, marginTop: 10, borderRadius: 15 }} onChangeText={this.seacrhProduct} value={`${this.state.name}`} />
                    </View>
                    <View style={{width:180}}>
                        <View style={{marginTop:-15, marginLeft:15}}>
                            <Dropdown
                                label='Filter'
                                data={data}
                            />
                        </View>
                    </View>
                </View>
                <View style={{flex:1}}>
                {/* <Spinner isLoading={products.isLoading} /> */}
                <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10}}>
                    <FlatList 
                        data={products.products}
                        renderItem={this.renderRow}
                        // refreshing={products.isLoading}
                        // onRefresh={this.onRefreshing}
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

export default connect(mapStateToProps)(Product);