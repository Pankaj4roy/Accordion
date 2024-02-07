import React, { useState } from 'react'
import { questions } from './api'
import MyPracAccor from './MyPracAccor'

const Practice = () => {
  const[data,setData]=useState(questions)
  return (
    <>
      <div className="main_div">
        <h1>React Interview Questions</h1>
        {
          data.map((value)=>{
            const {id,question,answer}=value
            return <MyPracAccor key={id} {...value}/>
          })
        }
      </div>
    </>
  )
}

export default Practice
