import React from "react";


function BasketItem({basketItem}) {
    return (    
        <div>

            {basketItem.title} x {basketItem.amount}


        </div>
      );
}

export default BasketItem;