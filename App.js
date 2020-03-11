import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider } from 'react-redux'

import store from './src/Component/redux/store'
import HomeScreen from './src/Component/Screen/Home/HomeScreen'
import LoginScreen from './src/Component/Screen/Login/LoginScreen'
import ProductScreen from './src/Component/Screen/Product/productScreen'
import AddProduct from './src/Component/Screen/Product/addProduct'
import ProductEdit from './src/Component/Screen/Product/editProduct'



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen : LoginScreen,
      navigationOptions:{
      header : null
      }
    },
    Login: {
      screen : HomeScreen,
      navigationOptions:{
      header : null
      }
    },
    Product: ProductScreen,
    AddProduct: AddProduct,
    EditProduct: ProductEdit
  }
)

const AppContainer =  createAppContainer(AppNavigator);

function App(){
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;