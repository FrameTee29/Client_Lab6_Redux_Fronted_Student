import React from 'react';
import './InputForm.css';

const InputForm = props => {
    const { data, onChange } = props;
    return (
        <div className='form-container'>
            <h2>Add Student</h2>
            <table>
                <tbody>
                    <tr>
                        <td>SID</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => onChange({ ...data, sid: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Firstname</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => onChange({ ...data, firstname: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Lastname</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => onChange({ ...data, lastname: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => onChange({ ...data, weight: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Height</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => onChange({ ...data, height: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Level</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => onChange({ ...data, level: e.target.value })} />
                        </td>
                    </tr>

                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => onChange({ ...data, img: e.target.value })} /> <br />
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={() => props.addStudent()}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm;