import React from 'react'
import Base from '../Base/base'
import { useNavigate } from 'react-router-dom'

const Dasboard = () => {
    const navigate = useNavigate()
  return (
    <Base>
    <h2>Hi There this is check</h2>
    <div>
    <button onClick={()=>navigate('/students')}  variant="contained" className='Btn-dash1' ><h1>Yes I'M Student</h1></button>
    <button onClick={()=>navigate('/mentors')}  variant="contained" className='Btn-dash1' ><h1> I am Mentor</h1></button>
    </div>
    </Base>
  )
}

export default Dasboard