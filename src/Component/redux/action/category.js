import axios from 'axios';

export const getCategory = () => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return{
        type: 'GET_CATEGORY',
        payload: axios({
            method: "GET",
            url: "http://192.168.1.17:4500/category",
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const addCategory = (data) => {
    return{
        type: 'POST_CATEGORY',
        payload: axios({
            method: "POST",
            data:data,
            url: "http://192.168.1.17:4500/category"
        })
    }
}


export const deleteCategory = (propsId) => {
    return{
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: 'DELETE',
            url: `http://192.168.1.17:4500/category/${propsId}`
        })
    }
}

export const editCategory = (data, propsId) => {
    return{
        type: 'PATCH_CATEGORY',
        payload: axios({
            method: 'PATCH',
            data:data,
            url: `http://192.168.1.17:4500/category/${propsId}`
        })
    }
}