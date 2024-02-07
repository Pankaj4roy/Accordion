import React, { useState } from 'react'
import { questions } from './api';

const Myaccordion = ({question,answer}) => {
    const [click,setClick]=useState(false)

  return (
    <>
    <div className='main_head'>
    <p onClick={()=>setClick(!click)} className='pad'> {click ? "➖" :"➕"}</p>   
    <h3> { question}</h3>
    </div>
    {
       click && <p  className='ans'> {answer}</p> // Agar click ki value true hai tabhi answer dikhana chahunga.Click ki value true tabhi hogi jab + me click hoga
    } 
    </>
  )
}

export default Myaccordion;
//line 10- onclick me hm function call krk usko define kr skte hai jaise pehle krte the.OR New way to set onclick-> Arrow function lagaya mhi to infinite loop me chala jaiga.onclick bolta hai ki initially click ki value false hai and !click means true.Agar true hai to ans dikha do