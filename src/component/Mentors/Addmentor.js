import React, { useContext, useState } from 'react'
import { mentorDBS } from '../../App'
import { useNavigate } from 'react-router-dom'
import Base from '../../Base/base'

const Addmentor = () => {

  const {mentorde,setMentorde}=useContext(mentorDBS)


  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [batch,setBatch] = useState("")
  const [gender,setGender] = useState("")

  const handleAddMentor =()=>{
      const newMentor ={
          id,
          name,
          batch,
          gender
      }
      setMentorde([...mentorde,newMentor])
      setId("")
      setName("")
      setBatch("")
      setGender("")
      navigate('/mentors')
  }

  const navigate = useNavigate()
  return (
    <Base>
    <div className='form-group'>
        <h4>Add Mentor Details</h4>
        <input placeholder='Enter Id of Mentor'type='number'value={id} onChange={(e)=>setId(e.target.value)}/>
        <input placeholder='Enter Name of Mentor' type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='Enter Batch of Mentor'type='text'value={batch} onChange={(e)=>setBatch(e.target.value)}/>
        <input placeholder='Enter Gender of Mentor'type='text'value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <div>
        <button onClick={handleAddMentor}>Add Mentor</button>
        </div>
       
    </div>
    </Base>
  )
}

export default Addmentor