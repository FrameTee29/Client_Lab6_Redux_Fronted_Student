import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './components/StudentList';
import { useSelector, useDispatch } from 'react-redux';
import InputForm from './components/InputForm'

function App() {


  return (
    <div>
      <StudentList   />
      <InputForm />
    </div>

  );
}

export default App;
