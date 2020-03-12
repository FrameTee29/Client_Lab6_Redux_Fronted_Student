import React, { useState, useEffect, useReducer } from 'react';
import './StudentList.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import StudentCard from './StudentCard.js';

const StudentList = props => {

    const students = useSelector(state => state.student);
    const dispatch = useDispatch();

    const getStudents = async () => {
        const result = await axios.get(`http://localhost/api/students`)
        const action = { type: 'GET_STUDENT', students: result.data };
        dispatch(action)
    }

    useEffect(() => {
        getStudents()
    }, [])

    if (!students || !students.length)
        return (<h2>No student</h2>)
    return (
        <div className='bearlist-container'>
            {
                students.map((student, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <StudentCard {...student}  />
                        {/* updateBear={() => props.updateBear(student.id)} deleteStudent={() => props.deleteStudent(student.id)} */}
                    </div>
                ))
            }
        </div>
    );
}

export default StudentList;