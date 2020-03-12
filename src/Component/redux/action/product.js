import axios from 'axios';
import {API_URL} from 'react-native-dotenv'

export const getProducts = (name, category) => {
    if (name !== undefined || category!== undefined) {
        return {
            type: 'GET_PRODUCT',
            payload: axios({
                method: 'GET',
                url: `${API_URL}/product?name=${name}&category=${category}`,
            })
        }
    }
    else {
        // const page = activepage || 1
        return {
            type: 'GET_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${API_URL}/product`,
            })
        }
    }

}

export const addProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios({
            method: 'POST',
            data: data,
            url: `${API_URL}/product`
        })
    }
}

export const editProduct = (data, propsId) => {
    return {
        type: 'PATCH_PRODUCT',
        payload: axios({
            method: 'PATCH',
            data: data,
            url: `${API_URL}/product/${propsId}`
        })
    }
}

export const deleteProduct = (propsId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: 'DELETE',
            url: `${API_URL}/product/${propsId}`
        })
    }
}

export const filterProduct = (category, name) => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return {
        type: 'FILTER_PRODUCT',
        payload: axios({
            method: 'GET',
            url: `${API_URL}/product?name=${name}&category=${category}`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}