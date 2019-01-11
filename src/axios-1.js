import axios from 'axios';

const instance = axios.create({
    baseURL:`https://burgerapp-order.firebaseio.com/`
});

export default instance;