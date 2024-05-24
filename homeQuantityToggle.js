export function homeQuantityToggle(event,id,stock){
    const currCard= document.querySelector(`#card${id}`);
    // console.log(currCard);

    const ActualQuantity= currCard.querySelector('.productQuantity');

    // console.log(ActualQuantity)

    let quantity = parseInt(ActualQuantity.getAttribute('data-quantity')) || 1;


    console.log(event);

    if(event.target.className ==='cartIncrement'){
        if(quantity < stock){
            quantity+=1;
        }
        else if(quantity === stock){
            quantity=stock;
        }
    }


    if(event.target.className==='cartDecrement'){
        if(quantity > 1){
            quantity-=1;
        }
    }


    ActualQuantity.innerText=quantity;

    ActualQuantity.setAttribute('data-quantity',quantity);
    // console.log(quantity);
    return quantity;


}


