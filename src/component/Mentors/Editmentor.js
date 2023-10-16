import React, { useContext, useEffect, useState } from 'react'
import Base from '../../Base/base'
import { mentorDBS } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';

const Editmentor = () => {

  const {mentorde,setMentorde}=useContext(mentorDBS)
    const{id} = useParams();
    console.log(id); 
 
    const [idx,setIdx] = useState("")
    const [name,setName] = useState("")
    const [batch,setBatch] = useState("")
    const [gender,setGender] = useState("")


    useEffect(()=>{
        const mentorDetail=mentorde.find(ment => ment.id === id);
        if(mentorDetail){
        setIdx(mentorDetail.id)
        setName(mentorDetail.name)
        setBatch(mentorDetail.batch)
        setGender(mentorDetail.gender)
        }
    },[id,mentorde])

    const updateMentor = () =>{
        const mentIndex = mentorde.findIndex((ment)=>ment.id === id);
        const updatedMentor ={
            id,
            name,
            batch,
            gender
        }
        mentorde[mentIndex] = updatedMentor
        setMentorde([...mentorde])
        navigate('/mentors')
    }

    const navigate = useNavigate()
  return (
    <Base>
    <div className='form-group'>
    <h4>Update Mentor Details</h4>
    <input placeholder='Enter Id of Mentor'type='number'value={idx} onChange={(e)=>setIdx(e.target.value)}/>
    <input placeholder='Enter Name of Mentor' type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
    <input placeholder='Enter Batch of Mentor'type='text'value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    <input placeholder='Enter Gender of Mentor'type='text'value={gender} onChange={(e)=>setGender(e.target.value)}/>
    <div>
    <button onClick={updateMentor}>Update Mentor</button>
    </div>
   
    </div>
    </Base>
  )
}

export default Editmentor