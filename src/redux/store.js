import { createStore, combineReducers, applyMiddleware } from "../../node_modules/redux";
import logger from 'redux-logger';

const initialform = {
    sid: 0,
    firstname: '',
    lastname: '',
    weight: 0,
    height: 0,
    level: '',
    img: ''
}

const formReducer = (data = initialform, action) => {
    switch (action.type) {
        case 'CHANGE_SID':
            return { ...data, sid: action.sid }
        case 'CHANGE_FIRSTNAME':
            return { ...data, firstname: action.firstname }
        case 'CHANGE_LASTNAME':
            return { ...data, lastname: action.lastname }
        case 'CHANGE_WEIGHT':
            return { ...data, weight: action.weight }
        case 'CHANGE_HEIGHT':
            return { ...data, height: action.height }
        case 'CHANGE_LEVEL':
            return { ...data, level: action.level }
        case 'CHANGE_IMG':
            return { ...data, img: action.img }
        default: return data;
    }

}


const StudentReducer = (students = [], action) => {
    switch (action.type) {
        case 'GET_STUDENT':
            return action.students;
        case 'ADD_STUDENT':
            return [...students, action.student]
        case 'DELETE_STUDENT':
            return students.filter(student => +student.sid !== +action.sid)
        case 'UPDATE_STUDENT':
            return students.map(student => {
                if (+student.sid === +action.sid)
                    return action.student;
                else
                    return student;
            })
    }
    return students;
}

const reducers = combineReducers({
    student: StudentReducer,
    form: formReducer,
})


export const store = createStore(reducers, applyMiddleware(logger));