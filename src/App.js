import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './components/StudentList';
import { useSelector, useDispatch } from 'react-redux';
import InputForm from './components/InputForm'

function App() {

  const [students, setStudents] = useState({})
  const [formData, setData] = useState({
    sid: 0,
    firstname: '',
    lastname: '',
    weight: 0,
    height: 0,
    level: '',
    img: '',
  });

  const { sid, firstname, lastname, weight, height, level, img } = formData;

  const getStudents = async () => {
    const result = await axios.get(`http://localhost/api/students`)
    setStudents(result.data)
  }

  const addStudent = async () => {
    const result = await axios.post(`http://localhost/api/students/`, {
      sid, firstname, lastname, weight, height, level, img
    })
    console.log(result.data)
    getStudents()
  }

  const deleteStudent = async (id) => {
    const result = await axios.delete(`http://localhost/api/students/${id}`)
    console.log(result.data)
    getStudents()
  }

  const updateStudent = async (id) => {
    console.log(sid,firstname,lastname,weight,height,level,img);
    const result = await axios.put(`http://localhost/api/students/${id}`, {
      sid,firstname,lastname,weight,height,level,img
    })
    console.log('Student id update: ', result.data)
    getStudents()
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div>
      <StudentList  deleteStudent={deleteStudent} updateStudent={updateStudent}/>
      <InputForm data={formData} onChange={setData} addStudent={addStudent}/>
    </div>

  );
}

export default App;
