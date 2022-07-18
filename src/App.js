import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Product from "./components/Product";
import products from "./products.json"
import Basket from "./components/Basket";

function App() {

    const [money, setMoney] = useState(1000000);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0) 
    useEffect(() => {
        
        setTotal(basket.reduce((acc,item) => {
            return acc + (item.amount * (products.find(product => product.id === item.id).price))
        } , 0)) 

        console.log(total)
       
  
    

    },[basket])


    const resetBasket =() => {
        setBasket([])
    }
    
    
    return ( 

        <div>

            <Header
            money={money}
            total={total} />

            {products.map(item => (<Product
            money={money}
            total={total}
            key={item.id}
            basket={basket}
            setBasket={setBasket}
            item={item}
            />))}

                <Basket
                basket={basket}
                total={total}

                />
            
            {total !== 0 && (
            <button onClick={resetBasket}>Sepeti Sıfırla</button>

            )}
            


        </div>

     );
}

export default App;