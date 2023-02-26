import React, { useState } from 'react'
import { createContext } from 'react'


export const datas = createContext();
const Details = (props) => {

    const [Data, setData] = useState([
        {img: 'https://media.istockphoto.com/id/1327143786/photo/apple-pencil-2nd-generation-next-to-its-box.jpg?s=612x612&w=0&k=20&c=3RSFPQefeV9RIM74zrXF5DpM1jK239e-BK9WB7wzVzE=', 
        name: 'Apple pencil', 
        offer: '7000'},
        {img: 'https://media.istockphoto.com/id/1327143786/photo/apple-pencil-2nd-generation-next-to-its-box.jpg?s=612x612&w=0&k=20&c=3RSFPQefeV9RIM74zrXF5DpM1jK239e-BK9WB7wzVzE=', 
        name: 'Apple pencil',  
        offer: '8000'}
    ])

  return (
    <div>
        <datas.Provider value={[Data,setData]}>
            {props.children}
        </datas.Provider>
        
    </div>
  )
}

export default Details;
