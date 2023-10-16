import React, { useContext } from 'react'
import Base from '../../Base/base'
import { useNavigate } from 'react-router-dom'
import { mentorDBS } from '../../App'

const Mentor = () => {

    const {mentorde,setMentorde}=useContext(mentorDBS)
  
    const deletementor = (mentorId)=>{
      const removedMentor = mentorde.filter(mentor=>mentor.id !== mentorId);
      setMentorde(removedMentor)
    }
    
    const navigate = useNavigate(); 

  return (
    <Base title={"Launchpad"} Description={"All details Showed "}>
         
         
    <div className='stud-collection'>
      {mentorde.map((ment,idx)=>(
        <div className='stud-card' key={idx}>
          <h2>{ment.name}</h2>
          <p>Id : {ment.id}</p>
          <p>Batch :{ment.batch}</p>
          <p>Gender : {ment.gender}</p>
          <div className='nav-btn-group'>
             <button onClick={()=>navigate(`/Editmentor/${ment.id}`)}>Edit</button>
             <button onClick={()=>deletementor(ment.id)}>Delete</button>
          </div>
        </div>  
      ))}
    </div>
    <button onClick={()=>navigate('/creatementor')} className='Btn-dash'><h4>Create Mentor</h4></button>
</Base>
  )
}

export default Mentor