import React, { useState } from 'react'

const MyPracAccor = ({question,answer}) => {
  const [show,setShow]=useState(false)
  return (
    <>
     <div className='main_head'>
      <p onClick={()=>{setShow(!show)}}>➕</p>
      <h3>{question}</h3>
     </div>
     {
      show && <p>{answer}</p>
     }
    </>
  )
}

export default MyPracAccor
