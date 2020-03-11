import axios from 'axios';

export const getProducts = (name) => {
    if (name !== undefined){
            return{
                type: 'GET_PRODUCT',
                payload: axios({
                    method: 'GET',
                    url: `http://192.168.1.17:4500/product?name=${name}`,
                })
        }
    }
    else{
        // const page = activepage || 1
        return{
            type: 'GET_PRODUCT',
            payload: axios({
                method: "GET",
                url: `http://192.168.1.17:4500/product`,
            })
        }
    }
    
}

export const addProduct = (data) => {
    return{
        type: 'POST_PRODUCT',
        payload: axios({
            method: 'POST',
            data:data,
            url: "http://192.168.1.17:4500/product"
        })
    }
}

export const editProduct = (data, propsId) => {
    return{
        type: 'PATCH_PRODUCT',
        payload: axios({
            method: 'PATCH',
            data:data,
            url: `http://192.168.1.17:4500/product/${propsId}`
        })
    }
}

export const deleteProduct = (propsId) => {
    return{
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: 'DELETE',
            url: `http://192.168.1.17:4500/product/${propsId}`
        })
    }
}

export const filterProduct = (category, name) => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return{
        type: 'FILTER_PRODUCT',
        payload: axios({
            method: 'GET',
            url: `http://192.168.1.17:4500/product?name=${name}&category=${category}`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}