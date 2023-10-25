import React, { useState } from 'react'

const Input = ({func}) => {
  const [data , updateData] = useState("");
  function submitData(e){
    e.preventDefault();
    if(data){
      func(data);

      updateData("");
    }else{
      alert("enter the task first bro ...");
    }
  }
  function trigger(e){
    updateData(e.target.value);
  }
  return (
    <>
        <div className="input-field container">
            <form onSubmit={submitData}>
                <input
                    className='text-capitalize fw-300' 
                    type="text" 
                    placeholder='enter your task here ...'
                    name="data"
                    value={data}
                    onChange={trigger}
                    />
                <input type="submit" value="add me" className='text-capitalize fw-300' />
            </form>
        </div>
    </>
  )
}

export default Input
