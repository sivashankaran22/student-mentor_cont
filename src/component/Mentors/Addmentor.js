import React, { useContext, useState } from 'react'
import { mentorDBS } from '../../App'
import { useNavigate } from 'react-router-dom'
import Base from '../../Base/base'
import * as yup from "yup"
import {useFormik} from 'formik'

export const mentorValiationSchema = yup.object({
  id: yup.string().required("id please"),
  name : yup.string().required("Please enter the Name"),
  batch: yup.string().required("Please enter the batch "),
  gender: yup.string().required("Please enter the gender")
})

const Addmentor = () => {

  const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
    initialValues: {
      name:"",
      batch:"",
      gender:""
    },
    validationSchema : mentorValiationSchema,
    onSubmit :(newMentor) =>{
      console.log(newMentor);
      handleAddMentor(newMentor)
    }
  })

  const {mentorde,setMentorde}=useContext(mentorDBS)


  // const [id,setId] = useState("")
  // const [name,setName] = useState("")
  // const [batch,setBatch] = useState("")
  // const [gender,setGender] = useState("")

  const handleAddMentor =async(newMentor)=>{
      // const newMentor ={
      //     id,
      //     name,
      //     batch,
      //     gender
      // }
      try {
        const res = await fetch(`https://batchstudent.onrender.com/api/mentordetails`,{
          method:"POST",
          body:JSON.stringify(newMentor),
          headers:{
            "Content-Type":"application/json"
          },
        })
        const mdata = await res.json();
        setMentorde([...mentorde,mdata])
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

export default Addmentor