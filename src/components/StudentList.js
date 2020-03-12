import React, { useState, useEffect } from 'react';
import './StudentList.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import StudentCard from './StudentCard.js';

const StudentList = props => {

    if (!props.students || !props.students.length)
        return (<h2>No student</h2>)
    return (
        <div className='bearlist-container'>
            {
                props.students.map((student, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <StudentCard {...student} updateBear={() => props.updateBear(student.id)} deleteStudent={() => props.deleteStudent(student.id)} />
                    </div>
                ))
            }
        </div>
    );
}

export default StudentList;