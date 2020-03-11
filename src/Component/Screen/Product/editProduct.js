import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import { editProduct } from '../../redux/action/product';
import product from '../../redux/reducer/product';
// import Spinner from '../Spinner/Spinner';

class ProductEdit extends Component{
    static navigationOptions = {
        title: "Edit Product",
        headerStyle: {
            backgroundColor: 'rgb(245, 149, 84)',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

    state = {
        name: '',
        category: 0,
        price:'-',
        stock:'-',
        image:' ',
    };

    componentDidMount(){
        const product = this.props.navigation.getParam("product");

        this.setState({
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock,
            image: product.image
        });
    }

    onSubmit = async() => {
        const product = this.props.navigation.getParam("product");
        await this.props.dispatch(editProduct(this.state, product.id));

        if(!this.props.products.products.isLoading){
            this.props.navigation.navigate('Product');
        }
        
    }

    render(){
        console.log(this.state);
        return(
            <Container>
                {/* <Spinner isLoading={this.props.products.isLoading} /> */}
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name Product" onChangeText={(text) => this.setState({ name: text })} value={`${this.state.name}`} />
                        </Item>
                        <Item>
                            <Input placeholder="category" onChangeText={(text) => this.setState({ category: text })} value={`${this.state.category}`} />
                        </Item>
                        <Item>
                            <Input placeholder="price" onChangeText={(text) => this.setState({ price: text })} value={`${this.state.price}`} />
                        </Item>
                        <Item>
                            <Input placeholder="stock" onChangeText={(text) => this.setState({ stock: text })} value={`${this.state.stock}`} />
                        </Item>
                    </Form>
                    <Button primary style={{ margin: 10 }} onPress={this.onSubmit}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductEdit);