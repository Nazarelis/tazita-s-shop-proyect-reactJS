import './ItemCount.css';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

const ItemCount =({initial, stock, onAdd}) =>{

    const [cantElements,setCantElements] = useState(parseInt(initial));

    function increment(){
        setCantElements(cantElements + 1)
        console.log(cantElements)
      };
    
      function decrement(){
        if (cantElements > 0) {
          setCantElements(cantElements - 1);
          console.log(cantElements);
        } else {
          setCantElements(1);
        }
      };

      useEffect(() => {
        setCantElements(parseInt(initial));
      },[initial])

    return(
    <div className='counter' >
        <div className='button-inc-dec'>

            <div>
                <Button className='button' onClick={decrement} disabled={cantElements <= 1}>-</Button>
            </div>
            <div>
                <h3> {cantElements} </h3>
            </div>
            <div>
                <Button className='button' onClick={increment} disabled={cantElements >= stock }>+</Button>

            </div>
        </div>
        <div>
            <Button className='buttonCart' disabled={stock<=0} onClick={() => onAdd(cantElements)}>Agregar al carrito</Button>
        </div>
    </div>


    );
};

export default ItemCount;