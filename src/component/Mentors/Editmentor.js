import React, { useContext} from 'react'
import Base from '../../Base/base'
import { mentorDBS } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { mentorValiationSchema } from './Addmentor';


const Editmentor = () => {
  
    // testing
    const {mentorde,setMentorde}=useContext(mentorDBS)
    const{id} = useParams(); 
    const mentorDetail=mentorde.find(ment => ment.id === id);

  const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
    initialValues: {
      id: mentorDetail.id,
      name: mentorDetail.name,
      batch: mentorDetail.batch,
      gender: mentorDetail.gender
    },
    validationSchema : mentorValiationSchema,
    onSubmit :(updatedMentor) =>{
      console.log(updatedMentor);
      updateMentor(updatedMentor)
    }
  })

  // const {mentorde,setMentorde}=useContext(mentorDBS)
  //   const{id} = useParams();
  //   console.log(id); 
 
    // const [idx,setIdx] = useState("")
    // const [name,setName] = useState("")
    // const [batch,setBatch] = useState("")
    // const [gender,setGender] = useState("")


    // useEffect(()=>{
    //     const mentorDetail=mentorde.find(ment => ment.id === id);
    //     if(mentorDetail){
    //     setIdx(mentorDetail.id)
    //     setName(mentorDetail.name)
    //     setBatch(mentorDetail.batch)
    //     setGender(mentorDetail.gender)
    //     }
    // },[id,mentorde])

    const updateMentor = async (updatedMentor) =>{
    try {
      //  const updatedMentor ={
      //         id,
      //         name,
      //         batch,
      //         gender
      //   }
        const res = await fetch(`https://batchstudent.onrender.com/api/mentordetails/:_id/${id}`,{
           method:"PUT",
           body:JSON.stringify(updatedMentor),
           headers:{
             "Content-Type":"application/json"
           }
        });
        const mdata = await res.json();
        const mentIndex = mentorde.findIndex((ment)=>ment.id === id);
               
        mentorde[mentIndex] = mdata
        setMentorde([...mentorde])
        navigate('/mentors')

    } catch (error) {
       console.log(error);
    }


    }

    const navigate = useNavigate()
  return (
    <Base>
       <form onSubmit={handleSubmit}>
    <div className='form-group'>
        <h4>Add Mentor Details</h4>
        <input placeholder='Enter Id of Mentor'type='number'value={values.id} onChange={handleChange} onBlur={handleBlur} name='id'/>
        {touched.id && errors.id ? <div style={{color:"crimson"}}>{errors.id}</div> :""}
        <input placeholder='Enter Name of Mentor' type='text'value={values.name} onChange={handleChange} onBlur={handleBlur} name='name'/>
        {touched.name && errors.name ? <div style={{color:"crimson"}}>{errors.name}</div> :""}
        <input placeholder='Enter Batch of Mentor'type='text'value={values.batch} onChange={handleChange} onBlur={handleBlur} name='batch'/>
        {touched.batch && errors.batch ? <div style={{color:"crimson"}}>{errors.batch}</div> :""}
        <input placeholder='Enter Gender of Mentor'type='text'value={values.gender} onChange={handleChange} onBlur={handleBlur} name='gender'/>
        {touched.gender && errors.gender ? <div style={{color:"crimson"}}>{errors.gender}</div> :""}
        <div>
        <button type='submit'>Add Mentor</button>
        </div>
       
    </div>
    </form>
    </Base>
  )
}

export default Editmentor