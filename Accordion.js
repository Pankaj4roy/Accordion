import React, { useState } from 'react'
import { questions } from './api';
import "./accordion.css"
import Myaccordion from "./Myaccordion"

const Accordion=()=>{
  const[data,setData]=useState(questions);
  return(
    <>
    <section className='main_div'>
      <h1 id='know'>React Interview Questions</h1>
 {
  data.map((value)=>{
    const {id,question,answer}=value; // yaha par hm id question and answer ko value k sath equate kara die islie hme value.id likhne ki need nhi hai.in response to objects are not valid as react child
return <Myaccordion key={id} {...value}/>
})
 }
 </section>
    </>
  )
}
export default  Accordion;