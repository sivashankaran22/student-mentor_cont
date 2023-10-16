import React from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../../Base/base'

const Nopage = () => {
    const navigate = useNavigate()
  return (
    <Base title={"Wrong URL 404 Error"} Description={"We can not find your location sorry"}>
        <button onClick={()=>navigate('/')}>Please Click here to navigate</button>
    </Base>
  )
}

export default Nopage