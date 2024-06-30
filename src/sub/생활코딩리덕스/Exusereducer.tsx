import { useState, useReducer } from "react";

// reducer - state 를 업데이트 하는 역할
// dipathch - state를 업데이트 콜
// action - 요구의 내용

type State2 = { count: number }
type Action2 = {
    type: string;
    payload: State2;
    draja?: string;
}

const Action_Type = {
    up: 'up',
    down: 'down',
    reset: 'reset'
}

function reducer(state: State2, action: Action2): State2 {
    console.log('reducer pass ', state, action);
    switch (action.type) {
        case Action_Type.up:
            return { count: state.count + action.payload.count };
        case Action_Type.down:
            return {
                count: state.count - action.payload.count
            };
        case Action_Type.reset:
            return init(action.payload || { count: 0 });
        default:
            return state;
    }
}
function init(initialCount: State2) {
    return initialCount
}

export default function ExUseReDucer() {

    const initialCount: State2 = { count: 0 };
    const [number, setNumber] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <div>
            <h2> useReducer Bank</h2>
            <p> 잔고 : {state.count} 원</p>
            <input
                type="number"
                value={number}
                onChange={(e) => { setNumber(parseInt(e.target.value)) }}
                step={1000} />
            <button onClick={() => dispatch({ type: Action_Type.up, payload: { count: number } })}>++++</button>
            <button onClick={() => dispatch({ type: Action_Type.down, payload: { count: number } })}>----</button>
            <button onClick={() => dispatch({ type: Action_Type.reset, payload: { count: 0 }, draja: "oksk" })}>reset</button>
        </div>
    )
}
