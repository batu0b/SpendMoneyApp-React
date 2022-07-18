import React from "react";

function Product({ item, basket, setBasket,total,money }) {
  const basketSayi = basket.find((itemBasket) => itemBasket.id === item.id);

  const addBasket = (item) => {
    const checkBasket = basket.find((basketItem) => basketItem.id === item.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((basketItem) => basketItem.id !== item.id),
        checkBasket
      ]);
    } else {
      setBasket([
        ...basket,
        {
          ...item,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = (item) => {
    const currentBasket = basket.find(basketItem=> basketItem.id === item.id)
    const basketWithoutCurrent = basket.filter(basketItem => basketItem.id !== item.id)
    currentBasket.amount -=1

    if(currentBasket.amount === 0){
        setBasket([...basketWithoutCurrent])
    }
    else{
        setBasket([...basketWithoutCurrent,currentBasket])


    }




  }

  return (
    <div>
      <div className="product">
        <h4>{item.title} </h4>
        <div className="price-i">${item.price} </div>
        <div className="actions">
          <button disabled={!basketSayi} onClick={() => removeBasket(item)}>Sat</button>
          <span className="amount">
            {basketSayi && basketSayi.amount || 0}
          </span>
          <button disabled={total + item.price > money} onClick={() => addBasket(item)}>Satın al</button>
        </div>
        <style jsx>
          {`
            .product {
              padding: 10px;
              background: #fff;
              border: 1px solid black;
              margin: 10px;
            }
          `}{" "}
        </style>
      </div>
    </div>
  );
}

export default Product;
