import { useState, useReducer } from "react";
import './index.css';
import { useParams } from "react-router-dom";

type typeState = { count: number }
type typeAction = { type: string }
const Action_Type = {
    up: 'up',
}

function reducer(state: typeState, action: typeAction): typeState {
    console.log('reducer call ', state, action);
    switch (action.type) {
        case Action_Type.up:
            return { count: state.count + 1 };
        default:
            return state;
    }
}

export default function 유즈리덕설사용해보기() {
    const initialCount: typeState = { count: 0 };
    const [state2, dispatch2] = useReducer(reducer, initialCount);
    //아 안됨... 안에서 선언되면 props로 사용할수밖에 없음...
    return (
        <div id="container">
            <h1>Root : {state2.count}</h1>
            <div id="grid">
                <Left1 number={state2.count}></Left1>
                <Right1></Right1>
            </div>
        </div>
    )
}

function Left1(props) { return (<div><h1>Left1 : {props.number}</h1><Left2 number={props.number}></Left2></div>) }
function Left2(props) { return (<div><h1>Left2 : {props.number}</h1><Left3 number={props.number}></Left3></div>) }
function Left3(props) { return (<div><h1>Left3 : {props.number}</h1></div>) }

function Right1(props) { return (<div><h1>Right1 : </h1><Right2 onIncease={() => { props.onIncease(); }}></Right2></div>) }
function Right2(props) { return (<div><h1>Right2 : </h1><Right3 onIncease={() => { props.onIncease(); }} ></Right3></div>) }
function Right3(props) {
    return (<div><h1>Right3 : </h1><input type="button" value={"+"} /></div>)
}

