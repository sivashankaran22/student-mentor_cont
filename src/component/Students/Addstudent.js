import React, { useContext, useState } from 'react'
import { adminDBS } from '../../App'
import Base from '../../Base/base'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import {useFormik} from 'formik'

export const studentValiationSchema = yup.object({
  id: yup.string().required("id please"),
  name : yup.string().required("Please enter the Name"),
  batch: yup.string().required("Please enter the batch "),
  gender: yup.string().required("Please enter the gender"),
  education:yup.string().required("Please enter the education")
})

const Addstudent = () => {

  const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
    initialValues: {
      name:"",
      batch:"",
      gender:"",
      education:""
    },
    validationSchema : studentValiationSchema,
    onSubmit :(newStudent) =>{
      console.log(newStudent);
      handleAddStudent(newStudent)
    }
  })

    const {studentde,setstudentde}=useContext(adminDBS)


    // const [id,setId] = useState("")
    // const [name,setName] = useState("")
    // const [batch,setBatch] = useState("")
    // const [gender,setGender] = useState("")
    // const [education,setEducation] = useState("")

    const handleAddStudent = async(newStudent)=>{
        // const newStudent ={
        //     id,
        //     name,
        //     batch,
        //     gender,
        //     education
        // }
        try {
          const res = await fetch(`https://batchstudent.onrender.com/api/studentdetails`,{
            method:"POST",
            body:JSON.stringify(newStudent),
            headers:{
              "Content-Type":"application/json"
            },
          })
          const sdata = await res.json();
          setstudentde([...studentde,sdata])
          navigate('/students')
        } catch (error) {
          console.log(error)
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

export default Addstudent