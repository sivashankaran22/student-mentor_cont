import { useContext } from 'react'
import {adminDBS} from '../../App'
import Base from '../../Base/base'
import { useNavigate } from 'react-router-dom'


const Student = () => {
  const {studentde,setstudentde}=useContext(adminDBS)
  
  const deleteStudent = async (studentId)=>{

    try {
      const res = await fetch(`https://batchstudent.onrender.com/api/studentdetails/:_id/${studentId}`,{
        method:"DELETE"
      });
      const sdata = await res.json()
      console.log(sdata)

      if(sdata){
        const removedStudent = studentde.filter(student=>student.id !== studentId);
        setstudentde(removedStudent)
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const navigate = useNavigate(); 


  return (
    <Base title={"Launchpad"} Description={"All details Showed "}>
         
         
        <div className='stud-collection'>
          {studentde.map((stud,idx)=>(
            <div className='stud-card' key={idx}>
              <h2>{stud.name}</h2>
              <p>Id : {stud.id}</p>
              <p>Batch :{stud.batch}</p>
              <p>Gender : {stud.gender}</p>
              <p>Education : {stud.education}</p>
              <div className='nav-btn-group'>
                 <button onClick={()=>navigate(`/Editstudent/${stud.id}`)}>Edit</button>
                 <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
              </div>
            </div>  
          ))}
        </div>
        <button onClick={()=>navigate('/createstudent')} className='Btn-dash'><h4>Create Student</h4></button>
    </Base>
  )
}

export default Student