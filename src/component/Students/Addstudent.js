import React, { useContext, useState } from 'react'
import { adminDBS } from '../../App'
import Base from '../../Base/base'
import { useNavigate } from 'react-router-dom'

const Addstudent = () => {

    const {studentde,setstudentde}=useContext(adminDBS)


    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [batch,setBatch] = useState("")
    const [gender,setGender] = useState("")
    const [education,setEducation] = useState("")

    const handleAddStudent =()=>{
        const newStudent ={
            id,
            name,
            batch,
            gender,
            education
        }
        setstudentde([...studentde,newStudent])
        setId("")
        setName("")
        setBatch("")
        setGender("")
        setEducation("")
        navigate('/students')
    }

    const navigate = useNavigate()
  return (
    <Base>
    <div className='form-group'>
        <h4>Add Student Details</h4>
        <input placeholder='Enter Id of Student'type='number'value={id} onChange={(e)=>setId(e.target.value)}/>
        <input placeholder='Enter Name of Student' type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='Enter Batch of Student'type='text'value={batch} onChange={(e)=>setBatch(e.target.value)}/>
        <input placeholder='Enter Gender of Student'type='text'value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <input placeholder='Enter Education of Student'type='text'value={education} onChange={(e)=>setEducation(e.target.value)}/>
        <div>
        <button onClick={handleAddStudent}>Add Student</button>
        </div>
       
    </div>
    </Base>
  )
}

export default Addstudent