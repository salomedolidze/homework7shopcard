import { createContext, useReducer } from "react";

export const Cartcontext=createContext()

export const Context=({children})=>{
    const reducer =(state,action)=>
    {

switch(action.type){

    case"add":
   
    const tempstate=state.filter((item)=>action.payload._id===item._id)
   if(tempstate.length>0){
    return state
   } else {

    return   [...state,action.payload]

   }
case "increment":
  
    const tempstate1=state.map((item)=>{

        if(item._id===action.payload._id){
            return {...item, quantity:item.quantity+1}

        } else{
            return item
        }


    })
    return tempstate1

    case "dekrement":
        const tempstate2=state.map((item)=>{
          

            if(item._id===action.payload._id){
                return {...item, quantity:item.quantity-1}
    
            } else{
                return item
            }
    
    
        })
        return tempstate2

    case "remove":
        const tempstate3=state.filter((item)=>{
            return item._id !== action.payload._id
        })
        return tempstate3



    default:
         return state
}
    }

    const [state,dispatch]=useReducer(reducer,[])

    const info={state,dispatch,reducer}
return<Cartcontext.Provider value={info}>
    {children}
</Cartcontext.Provider>
}