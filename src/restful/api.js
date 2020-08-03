//引入Axios
import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:8080/'; //设置公共URL

//分类列表 api

export const categoryList = () => {
    return Axios.get('').then(res=> {
        return res.data;
    })
}