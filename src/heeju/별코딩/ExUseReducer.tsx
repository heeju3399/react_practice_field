import { useState, useReducer } from "react";
import '../../index.css';

// reducer - state 를 업데이트 하는 역할 (은행)
// dipatch - state 업데이트를 위한 요구
// action - 요구의 내용
type typeState = { payload: number }
type typeAction = {
    payload: number;
    type: string;
}

const Action_Type = {
    deposit: 'deposit',
    withdraw: 'withdraw'
};

function reducer(state: typeState, action: typeAction): typeState {
    console.log('reducer call ', state, action);
    switch (action.type) {
        case Action_Type.deposit:
            return ({ payload: state.payload + action.payload })
        case Action_Type.withdraw:
            return ({ payload: state.payload - action.payload })
        default:
            return state;
    }
}

export default function ExUseReducer() {
    const [num, setNum] = useState(0);
    const initialCount: typeState = { payload: 1000 };
    const [money, dispatch2] = useReducer(reducer, initialCount);

    return (
        <div>
            <h2>useReducer 은행에 오신것을 환영합니다.</h2>
            <p>잔고 : {money.payload}원</p>
            <input
                type="text"
                value={num}
                onChange={(e) => { setNum(parseInt(e.target.value)) }}
                step={1000}
            />
            <button onClick={() => { dispatch2({ type: 'deposit', payload: num }) }}>예금</button>
            <button onClick={() => { dispatch2({ type: 'withdraw', payload: num }) }}>출금</button>
        </div>
    )
}

