import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, total }) {
  return (
    <div>
      {basket.map((basketItem) => (
        <BasketItem basketItem={basketItem} />
      ))}


        {total !== 0 && (
            <div>Total: ${total} </div>
        )}

      
    </div>
  );
}

export default Basket;
