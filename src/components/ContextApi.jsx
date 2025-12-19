import axios from "axios"
import { createContext, useEffect, useState } from "react"

const apiData = createContext()
const ContextApi = ({children}) => {
    let [data, setData] = useState([])
    let getData = () => {
       axios.get("https://dummyjson.com/products").then((res)=>{
        setData(res.data.products)
       })
    }
    useEffect(() => {
        getData()
    }, [])
  return (

    <>
      <apiData.Provider value={data}>
       {children}
      </apiData.Provider>
    </>
  )
}

export { ContextApi, apiData }