import React, {useEffect, useState} from 'react'
import axios from 'axios';
import CardUtensils from '../cardUtensils/CardUtensils';


const CardList = () => {
    
    const [utensils, setUtensils] = useState([]);
    

    useEffect(() => {
        axios("https://my-json-server.typicode.com/Nazarelis/api_reposteria/utensilios").then(res => setUtensils(res.data))
    }, [])

  return (
    <div>
        <h1>CardList</h1>
        {utensils.map((utensil) => {
            return(
                <div>
                    <CardUtensils key={utensil.id} data={utensil}/>
                </div>
            )
        })}
    </div>
  )
}

export default CardList