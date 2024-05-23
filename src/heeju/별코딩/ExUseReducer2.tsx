import { useState, useReducer } from "react";
import '../../index.css';

// reducer - state 를 업데이트 하는 역할 (은행)
// dipatch - state 업데이트를 위한 요구
// action - 요구의 내용

type newStudent = {
    id: number,
    name: string,
    isHere: boolean
};

type typeState = {
    count: number;
    students: newStudent[]
}

type typeAction = {
    payload: {
        id?: number
        name: string
    };
    type: string;
}

type typeStudentComponent = {
    name: string,
    dispatch: any,
    id: number,
    isHere: boolean
};

const Action_Type = {
    addStudent: 'addStudent',
    deleteStudent: 'deleteStudent',
    markStudent: 'markStudent'
};

function reducer(state: typeState, action: typeAction): typeState {
    switch (action.type) {
        case Action_Type.addStudent:
            const name = action.payload.name;
            const newStudent2: newStudent = {
                id: Date.now(),
                name,
                isHere: false
            }
            return {
                count: state.count + 1,
                students: [...state.students, newStudent2]
            }
        case Action_Type.deleteStudent:
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id)
            }
        case Action_Type.markStudent:
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return {
                            ...student, isHere: !student.isHere
                        }
                    }
                    return student
                })
            }
        default:
            return state;
    }
}

const initialState: typeState = {
    count: 0,
    students: []
};

export default function ExUseReducer2() {
    console.log('---------------ExUseReducer2--------------')
    const [name, setName] = useState("");
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>출석부</h2>
            <p>총학생수 : {studentsInfo.count}명</p>
            <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                step={1000}
            />
            <button onClick={() => {
                dispatch({ type: Action_Type.addStudent, payload: { name: name } })
            }}>추가!</button>
            <hr />
            {studentsInfo.students.map(student => {
                return (<Student
                    key={student.id}
                    name={student.name}
                    dispatch={dispatch}
                    id={student.id}
                    isHere={student.isHere}
                ></Student>)
            })}
        </div>
    )
}

function Student({ name, dispatch, id, isHere }: typeStudentComponent) {
    console.log('***************student pass*****************')
    return (
        <div>
            <span onClick={() => {
                dispatch({ type: Action_Type.markStudent, payload: { id } })
            }}
                style={{ textDecoration: isHere ? 'line-through' : 'none', color: isHere ? 'gray' : 'black' }}>{name}</span>
            <button onClick={
                () => { dispatch({ type: Action_Type.deleteStudent, payload: { id } }) }}>삭제</button>
        </div>
    );
}