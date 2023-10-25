import React, { useState } from 'react'
import Input from './Input';
import './index.css';
import Item from './Item';
const App = () => {
    const [bag , updateBag] = useState([]);
    const [show , updateShow] = useState(true);
    function add(ele){
        updateBag([...bag , ele]);
        if(bag.length === 0){
            updateShow(false);
        }
    }
  return (
    <>
        {
            show ? <h1 className='alarm fw-500 lg-heading'>no task added yet ....</h1> : ""
        }
        <h1 className='text-capitalize heading md-heading container '>todo <span className='green'>app</span></h1>
        <Input
            func = {add}
        />

        <ul className="items container">
            
            {
                bag.map((ele , id)=>{
                    return <Item key = {id} name = {ele}/>
                })
            }
            
        </ul>
    </>
  )
}

export default App
