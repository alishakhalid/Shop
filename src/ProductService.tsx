import axios from 'axios';

    const API = axios.create({
        baseURL: "http://localhost:3003/"
    })

    export const getAllProducts = () => {
        return API.get("products");
    }
    export const getSingleProducts = (id: string) => {
        return API.get("products/" + id);
    }

