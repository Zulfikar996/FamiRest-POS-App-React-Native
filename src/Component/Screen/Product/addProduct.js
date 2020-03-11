import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import { addProduct } from '../../redux/action/product';
// import product from '../../redux/reducer/product';
// import Spinner from '../Spinner/Spinner';

class AddProduct extends Component{
    static navigationOptions = {
        title: "Add Product",
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
    }

    onSubmit = async() => {
        await this.props.dispatch(addProduct(this.state));

        if(!this.props.products.products.isLoading){
            this.props.navigation.navigate('Product');
        }
        
    }

    render(){
        return(
            <Container>
                {/* <Spinner isLoading={this.props.products.isLoading} /> */}
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name product" onChangeText={(text) => this.setState({ name: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="category" onChangeText={(text) => this.setState({ category: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="price" onChangeText={(text) => this.setState({ price: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="stock" onChangeText={(text) => this.setState({ stock: text })} />
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

export default connect(mapStateToProps)(AddProduct);