package com.example.backendShop.product;

import javax.persistence.*;

@Entity
public class Product {

    @Id
    int id;
    private String img;
    private String product_name;
    private String description;
    private int price;

    public Product(){

    }

    public Product(int id, String img, String product_name, String description, int price) {
        this.id = id;
        this.img = img;
        this.product_name = product_name;
        this.description = description;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
