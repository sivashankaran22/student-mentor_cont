import React, { useContext, useEffect, useState } from 'react'
import { adminDBS } from '../../App'
import Base from '../../Base/base'
import { useNavigate, useParams } from 'react-router-dom'

const Editstudent = () => {

    const {studentde,setstudentde,studId,setStudId}=useContext(adminDBS)
    const{id} = useParams();
    console.log(id); 
 
    const [idx,setIdx] = useState("")
    const [name,setName] = useState("")
    const [batch,setBatch] = useState("")
    const [gender,setGender] = useState("")
    const [education,setEducation] = useState("")


    useEffect(()=>{
        const studentDetail=studentde.find(stud => stud.id === id);
        if(studentDetail){
        setIdx(studentDetail.id)
        setName(studentDetail.name)
        setBatch(studentDetail.batch)
        setGender(studentDetail.gender)
        setEducation(studentDetail.education)
        }
    },[id,studentde])

    const updateStuent = () =>{
        const studIndex = studentde.findIndex((stud)=>stud.id === id);
        const updatedStudent ={
            id,
            name,
            batch,
            gender,
            education
        }
        studentde[studIndex] = updatedStudent
        setstudentde([...studentde])
        navigate('/students')
    }

    const navigate = useNavigate()

  return (
    <Base>
    <div className='form-group'>
    <h4>Update Student Details</h4>
    <input placeholder='Enter Id of Student'type='number'value={idx} onChange={(e)=>setIdx(e.target.value)}/>
    <input placeholder='Enter Name of Student' type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
    <input placeholder='Enter Batch of Student'type='text'value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    <input placeholder='Enter Gender of Student'type='text'value={gender} onChange={(e)=>setGender(e.target.value)}/>
    <input placeholder='Enter Education of Student'type='text'value={education} onChange={(e)=>setEducation(e.target.value)}/>
    <div>
    <button onClick={updateStuent}>Update Student</button>
    </div>
   
    </div>
    </Base>
  )
}

export default Editstudent