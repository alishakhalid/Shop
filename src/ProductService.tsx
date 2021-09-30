import axios from "axios";
import { FormValues } from "./Content/AddProduct";
import { ProductType } from "./TypeProduct";

const API = axios.create({
  baseURL: "http://localhost:3003/",
});

export const getAllProducts = () => {
  return API.get("products");
};
export const getSingleProducts = (id: string) => {
  return API.get("products/" + id);
};

//post
export const addProduct = (data: FormValues) => {
  return API.post("/products", data);
};
