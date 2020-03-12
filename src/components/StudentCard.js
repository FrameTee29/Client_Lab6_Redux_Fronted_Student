import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import './StudentCard.css';

const StudentCard = props => {
   
    const form = useSelector(state => state.form)
    const dispatch = useDispatch();

    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost/api/students/${props.id}`)
        dispatch({ type: 'DELETE_STUDENT', sid: props.id })
      }

      const updateStudent = async () => {
        await axios.put(`http://localhost/api/students/${props.id}`, form)
        dispatch({ type: 'UPDATE_STUDENT', sid:props.id , students: {...form,sid:props.id} })
    }
    return (
        <div>
            <div className='bearcard-container'>
                <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                    <p className='bearcard-sid'>sid:{props.sid}</p>
                    <p className='bearcard-weight'>weight:{props.weight}</p>
                    <p className='bearcard-height'>height:{props.height}</p>
                    <p className='bearcard-level'>level:{props.level}</p>
                    <p className='bearcard-name'>{props.firstname} {props.lastname}</p>
                </div>
                <div className='bearcard-actions'>
                    <div onClick={updateStudent}>Update</div>
                    <div onClick={deleteStudent}>Delete</div>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;