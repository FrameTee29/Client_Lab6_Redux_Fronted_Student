import React from 'react';
import './InputForm.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const InputForm = props => {
    const { data, onChange } = props;

    const dispatch = useDispatch();
    const form = useSelector(state => state.form);
    const students = useSelector(state => state.student);

    const addStudent = async () => {
      await axios.post(`http://localhost/api/students/`,form)
      dispatch({
        type: 'ADD_STUDENT', student: {
            ...form
        }
    })
      }

    return (
        <div className='form-container'>
            <h2>Add Student</h2>
            <table>
                <tbody>
                    <tr>
                        <td>SID</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_SID', sid: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Firstname</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_FIRSTNAME', firstname: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Lastname</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_LASTNAME', lastname: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: 'CHANGE_WEIGHT', weight: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Height</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: 'CHANGE_HEIGHT', height: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Level</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_LEVEL', level: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={() => addStudent()}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm;