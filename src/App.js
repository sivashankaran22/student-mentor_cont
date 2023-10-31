import { createContext, useEffect, useState } from 'react';
import './App.css';
import Student from './component/Students/Student';
import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dasboard';
import Addstudent from './component/Students/Addstudent';
import Editstudent from './component/Students/Editstudent';
import Mentor from './component/Mentors/Mentor';
import Addmentor from './component/Mentors/Addmentor';
import Editmentor from './component/Mentors/Editmentor';
import About from './component/Common/About';
import Help from './component/Common/Help';
import Nopage from './component/Common/Nopage';

export const adminDBS = createContext(null);
export const mentorDBS = createContext(null);

function App() {
  // student state
  const [studentde,setstudentde]= useState([]);
  const [studId,setStudId]=useState("")

  useEffect(() =>{
    const getStudentDetails = async() => {
      const res = await fetch(`https://batchstudent.onrender.com/api/studentdetails`,{
        method: "GET",
      });
      const sdata = await res.json();
      setstudentde(sdata);
    }
     getStudentDetails()
  },[])
  // mentor state
  const [mentorde,setMentorde]= useState([]);
  const [mentId,setMentId]=useState("")

  useEffect(() =>{
    const getMentorDetails = async() => {
      const res = await fetch(`https://batchstudent.onrender.com/api/mentordetails`,{
        method: "GET",
      });
      const mdata = await res.json();
      setMentorde(mdata);
    }
     getMentorDetails()
  },[])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'element={<Dasboard/>}/>
        
        {/* Student datas */}

        <Route exact path ="/students" element ={
          <adminDBS.Provider value={{studentde,setstudentde,studId,setStudId}}>
           <Student/>
          </adminDBS.Provider>}/>
        <Route exact path ='/createstudent' element={
           <adminDBS.Provider value={{studentde,setstudentde,studId,setStudId}}>
           <Addstudent/>
          </adminDBS.Provider>}/>
        <Route exact path ='/Editstudent/:id' element={
           <adminDBS.Provider value={{studentde,setstudentde,studId,setStudId}}>
           <Editstudent/>
          </adminDBS.Provider>}/>

          {/* Mentor datas */}

        <Route exact path='/mentors'element={  
           <mentorDBS.Provider value={{mentId,mentorde,setMentId,setMentorde}}>
           <Mentor/>
           </mentorDBS.Provider>}/>
        <Route exact path='/Creatementor'element={  
           <mentorDBS.Provider value={{mentId,mentorde,setMentId,setMentorde}}>
           <Addmentor/>
           </mentorDBS.Provider>}/>
        <Route exact path='/Editmentor/:id'element={  
           <mentorDBS.Provider value={{mentId,mentorde,setMentId,setMentorde}}>
           <Editmentor/>
           </mentorDBS.Provider>}/>

           {/* Common */}

        <Route exact path='/about'element={<About/>}/>
        <Route exact path='/help'element={<Help/>}/>
        <Route exact path="*" element={<Nopage/>}/>

      </Routes>
    </div>
  );
}

export default App
