import React, { Component, Fragment } from 'react'
import { TextInput, View, TouchableOpacity, ImageBackground, StyleSheet, Image, AsyncStorage} from 'react-native'
import 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, Label ,FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input} from 'native-base'
import axios from 'axios'

import logomail from '../../../../image/person.png'
import logopass from '../../../../image/lock.png'
import logo from '../../../../image/FamiRest.png'
import {API_URL} from 'react-native-dotenv'

class LoginScreen extends Component{
    static navigationOptions = {
        title: "Login",
        headerStyle: {
            backgroundColor: 'rgb(245, 149, 84)',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

  state={
    email:'',
    password:''
  }

  componentDidMount(){
    if(AsyncStorage.getItem('token')){
        this.props.navigation.navigate('Home');
    }
}

  onChangeEmail = (e) => {
    console.log(e)
    this.setState({
      email:e
     })
  }

  onChangePass = (e) => {
    console.log(e)
    this.setState({
      password:e
     })
  }

  onSubmit = (e) => {
    console.log({API_URL})
    axios
        .post(`${API_URL}/user/login`, this.state)
        .then(res => {
            console.log(res.data);
            AsyncStorage.setItem('token', res.data.token);
            AsyncStorage.setItem('user-id', res.data.id);
            AsyncStorage.setItem('Status', res.data.Status );
            AsyncStorage.setItem('isAuth', true);
            this.props.navigation.navigate('Login');
        })
        .catch(err => {
            console.log(err);
        })
}

  render() {
    console.disableYellowBox=true
    return(
          <Container>
            <ImageBackground source={logo} style={{flex:1, backgroundColor:'#dfbc6c', width:null, height:300, justifyContent:'center', alignItems:'center'}} >
            <Content>
            <Form style={{marginRight:20}}>
                <Item style={{borderBottomColor: 'transparent', marginTop: 300 }}>
                  <Image source={logomail} />
                  <TextInput placeholder="Email" style={{ width:300 ,height: 40, fontSize:16, borderColor: 'gray', borderWidth: 1, marginHorizontal: 4, marginTop: 4, borderRadius: 15 }} onChangeText={this.onChangeEmail} />
                </Item>

                <Item style={{borderBottomColor: 'transparent'}}>
                <Image source={logopass} />
                  <TextInput secureTextEntry={true} name="Password" placeholder="Password" style={{ width:300 ,height: 40, fontSize:16, borderColor: 'gray', borderWidth: 1, marginHorizontal: 4, marginTop: 4, borderRadius: 15 }} onChangeText={this.onChangePass} />
                </Item>

                <Button primary style={{width:160, marginLeft:120, marginTop: 30, justifyContent:'center', backgroundColor:'rgb(245, 149, 84)', borderRadius: 15}} onPress={this.onSubmit}><Text> Login </Text></Button>
              </Form>
            </Content>
            <Footer>
              <FooterTab style={{backgroundColor:'rgb(245, 149, 84)'}}>
              </FooterTab>
            </Footer>
            </ImageBackground>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputcontainer: {
    marginTop: 20,
    fontSize: 20
  }
})

export default LoginScreen