import React, { useContext } from 'react'
import { Cartcontext } from '../../context/context'
import style from "./Cart.module.css"
import phone from "../../iphone-12-blue.png"


function Cart() {
    const GlobalState = useContext(Cartcontext)
    console.log("GlobalState", GlobalState)
    const state = GlobalState.state
    const dispatch = GlobalState.dispatch
    const total=state.reduce((total,item)=>{
        return(total+item.price*item.quantity)
    },0)
    return (
        <div className={style.cart}>
            {state.map((item, index) => {
                console.log(item)
                return (
                    <div key={index} className={style.card}>

                        <img src={phone} alt="phone" />



                        <p>{item.phone}</p>

                        <p>{item.price * item.quantity}</p>
                        <div className={style.quantity}>
                            <button onClick={() => dispatch({ type: "increment", payload: item })}>+</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => { 
                                if (item.quantity > 1) 
                                {
                                     dispatch({ type: "dekrement", payload: item }) 
                                } else{
                                    dispatch({ type: "remove", payload: item })

                                }}}>-</button>

                        </div>
                        
                    <span onClick={() => dispatch({ type: "remove", payload: item })}> x</span>
                   
                    </div>
                    

                )


            })}
         {state.length>0 && <div className={style.total}>
            <h2>TOTAL</h2>
            <h2>{total}</h2></div>}


        </div>
    )
}

export default Cart