import React, { Component, Fragment } from 'react'
import { TextInput, View} from 'react-native'
import 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, Label ,FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input } from 'native-base';
// import {Icon} from 'react-native-vector-icons'

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
    Email:'',
    Password:''
  }

  onChangeEmail = (e) => {
    console.log(e)
    this.setState({
      Email:e
     })
  }

  onChangePass = (e) => {
    console.log(e)
    this.setState({
      Password:e
     })
  }

  onSubmit = (e) =>{
      this.props.navigation.nagigate("Home")
  }

  render() {
    return(
          <Container>
            {/* <Header style={{backgroundColor:'rgb(245, 149, 84)'}}>
              <Body>
                <Title style={{fontSize:25}}>Login</Title>
              </Body>
              <Right />
            </Header> */}

            <Content>
            <Form>
                <Item style={{borderBottomColor: 'transparent', marginTop: 300 }}>
                  <Label style={{marginHorizontal:20, fontSize:20}}>icon</Label>
                  <TextInput placeholder="Email" style={{ width:300 ,height: 40, fontSize:16, borderColor: 'gray', borderWidth: 1, marginHorizontal: 4, marginTop: 4, borderRadius: 15 }} onChangeText={this.onChangeEmail} />
                </Item>

                <Item style={{borderBottomColor: 'transparent'}}>
                  <Label style={{marginHorizontal:20, fontSize:20 }}>icon</Label>
                  <TextInput name="Password" placeholder="Password" style={{ width:300 ,height: 40, fontSize:16, borderColor: 'gray', borderWidth: 1, marginHorizontal: 4, marginTop: 4, borderRadius: 15 }} onChangeText={this.onChangePass} />
                </Item>

                <Button primary style={{width:160, marginLeft:140, marginTop: 30, justifyContent:'center', backgroundColor:'rgb(245, 149, 84)', borderRadius: 15}}><Text> Login </Text></Button>

              </Form>
            </Content>
            <Footer>
              <FooterTab style={{backgroundColor:'rgb(245, 149, 84)'}}>
              </FooterTab>
            </Footer>
          </Container>
    );
  }
}

export default LoginScreen