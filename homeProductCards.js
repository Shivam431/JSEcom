import {homeQuantityToggle} from "./homeQuantityToggle"

const productTemplate = document.querySelector("#productTemplate")
const productContainer= document.querySelector("#productContainer");


export const showProductContainer= (products)=>{

    // console.log(products);
    if(!products){
        return false;
    }

    products.forEach((currEle) => {
        const {id,name,category,brand,price,stock,description,image}= currEle;
        const productClone= document.importNode(productTemplate.content,true);

        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`)
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".productStock").textContent=stock;
        // productClone.querySelector(".productDescription").textContent=brand;
        productClone.querySelector(".productPrice").textContent=price;
        productClone.querySelector(".productActualPrice").textContent=price;


        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            homeQuantityToggle(event,id,stock)
        })
        productContainer.append(productClone);
    });
}