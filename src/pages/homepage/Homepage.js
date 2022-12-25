// import "./Homepage.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Cartcontext } from "../../context/context"
import style from "./Homepage.module.css"
import phone from "../../iphone-12-blue.png"
import Button from '@mui/material/Button';

const Homepage = () => {
    const [data, setdata] = useState([])

    const getData = async () => {
        const response = await axios.get("http://localhost:3001/users")
        setdata(response.data.data)

    }
    console.log(data)

    useEffect(() => {
        getData()
    }, [])

    const GlobalState = useContext(Cartcontext)
    const dispatch = GlobalState.dispatch
    console.log(GlobalState)
    return (
        <div className={style.container}>

            {data.map((item, index) => {

                return (

                 
                    <div className={style.card} key={index}>
                        <div className={style.imagebox}>
                            <img src={phone} alt="phone" />
                        </div>

                        <h3>{item.phone}</h3>
                        <h4>{item.model}</h4>
                        <span> $ {item.price}</span>
                        <Button variant="contained" color="success" fullWidth onClick={() => dispatch({ type: "add", payload: item })}>
                            ADD TO CARD
                        </Button>

                    </div>
                )
            })}
        </div>
    )
}
export default Homepage