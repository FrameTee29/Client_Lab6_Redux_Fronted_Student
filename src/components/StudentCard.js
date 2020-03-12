import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import './StudentCard.css';

const StudentCard = props => {
    console.log("props show" + JSON.stringify(props))
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
                    <div onClick={props.updateBear}>Update</div>
                    <div onClick={props.deleteBear}>Delete</div>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;