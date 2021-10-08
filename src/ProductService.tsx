import axios from "axios";
import { ProductType } from "./TypeProduct";

const API = axios.create({
  baseURL: "http://localhost:8080/lipkit",
});

export const getAllProducts = () => {
  return API.get("/");
};
export const getSingleProducts = (id: string) => {
  return API.get("/" + id);
};

//post
export const addProduct = (data: ProductType) => {
  return API.post("/", data);
};
