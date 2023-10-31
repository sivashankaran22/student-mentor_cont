import React, { useContext} from 'react'
import { adminDBS } from '../../App'
import Base from '../../Base/base'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { studentValiationSchema } from './Addstudent'

const Editstudent = () => {
   
  // testing
  const {studentde,setstudentde,studId,setStudId}=useContext(adminDBS)
  const{id} = useParams();
  const studentDetail=studentde.find(stud => stud.id === id);
 

  const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
    initialValues: {
      id : studentDetail.id,
      name:studentDetail.name,
      batch:studentDetail.batch,
      gender:studentDetail.gender,
      education: studentDetail.education
    },
    validationSchema : studentValiationSchema,
    onSubmit :(updatedStudent) =>{
      console.log(updatedStudent);
      updateStuent(updatedStudent)
    }
  })

    // const {studentde,setstudentde,studId,setStudId}=useContext(adminDBS)
    // const{id} = useParams();
    // const studentDetail=studentde.find(stud => stud.id === id);
    // console.log(studentDetail);
    // console.log(id); 
 
    // const [idx,setIdx] = useState("")
    // const [name,setName] = useState("")
    // const [batch,setBatch] = useState("")
    // const [gender,setGender] = useState("")
    // const [education,setEducation] = useState("")
  
   
    // useEffect(()=>{
    //     const studentDetail=studentde.find(stud => stud.id === id);
      
    //     // if(studentDetail){
    //     // values.id = studentDetail.id
    //     // values.name = studentDetail.name
    //     // values.batch = studentDetail.batch
    //     // values.gender = studentDetail.gender
    //     // values.education = studentDetail.education
    //     // }
    // },[id,studentde, values])

    const updateStuent = async (updatedStudent) =>{

      try {
      //   const updatedStudent ={
      //     id,
      //     name,
      //     batch,
      //     gender,
      //     education
      // }
      const res = await fetch(`https://batchstudent.onrender.com/api/studentdetails/:_id/${id}`,{
        method:"PUT",
        body:JSON.stringify(updatedStudent),
        headers:{
          "Content-Type":"application/json"
        }
      });
       const sdata = await res.json()
       console.log(sdata);
       const studIndex = studentde.findIndex((stud)=>stud.id === id);
       
       studentde[studIndex] = sdata
       setstudentde([...studentde])
       navigate('/students')
      } catch (error) {
        console.log(error);
      }
  
    }

    const navigate = useNavigate()

  return (
    <Base>
     <form onSubmit={handleSubmit}>
     <div className='form-group'>
        <h4>Add Student Details</h4>
        <input placeholder='Enter Id of Student'type='number'value={values.id} onChange={handleChange} onBlur={handleBlur} name='id'/>
        {touched.id && errors.id ? <div style={{color:"crimson"}}>{errors.id}</div> :""}
        <input placeholder='Enter Name of Student' type='text'value={values.name} onChange={handleChange} onBlur={handleBlur} name='name'/>
        {touched.name && errors.name ? <div style={{color:"crimson"}}>{errors.name}</div> :""}
        <input placeholder='Enter Batch of Student'type='text'value={values.batch} onChange={handleChange} onBlur={handleBlur} name='batch'/>
        {touched.batch && errors.batch ? <div style={{color:"crimson"}}>{errors.batch}</div> :""}
        <input placeholder='Enter Gender of Student'type='text'value={values.gender} onChange={handleChange} onBlur={handleBlur} name='gender'/>
        {touched.gender && errors.gender ? <div style={{color:"crimson"}}>{errors.gender}</div> :""}
        <input placeholder='Enter Education of Student'type='text'value={values.education} onChange={handleChange} onBlur={handleBlur} name='education'/>
        {touched.education && errors.education ? <div style={{color:"crimson"}}>{errors.education}</div> :""}
        <div>
        <button type='submit' >Add Student</button>
        </div>
        
    </div>
    </form>
    </Base>
  )
}

export default Editstudent