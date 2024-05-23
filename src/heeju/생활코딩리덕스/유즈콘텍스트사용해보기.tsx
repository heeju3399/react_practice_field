// 그냥 값을 내려줄뿐인데 쓸필요가 있을까?
//  use 메모를 사용한다고 함


import { useState, useReducer, useContext, createContext, PropsWithChildren } from "react";
import './index.css';

type typeState = { count: number }
type typeAction = { type: string }
const Action_Type = {
    up: 'up',
}

const MyContext = createContext<{ hello: number } | undefined>(undefined);

function ContextProvider({ children, count }: PropsWithChildren<{ count: number }>) {
    return (
        <MyContext.Provider value={{ hello: count }}>{children}</MyContext.Provider>
    )
}

function useMyContext() {
    const context = useContext(MyContext)
    if (context === undefined) {
        throw new Error('useMyContext 는 contextprovider 내부에서만 사용할수 있습니다.',)
    }
    return context
}

function ChildComponent() {
    const { hello } = useMyContext();
    const [number, setNumber] = useState(1);

    return (
        <>
            <div id="container">
                <h3>ChildComponent hello : {hello}</h3>
                <h1>Root : {number}</h1>
                <div id="grid">

                    <Left1 number={number}></Left1>
                    <Middle1></Middle1>
                    <Right1 onIncease={() => {
                        setNumber(number + 1);
                    }
                    }></Right1>
                </div>
            </div>
        </>
    )
}

function ParentComponent() {
    return (
        <>
            <ContextProvider count={990}>
                <ChildComponent></ChildComponent>
            </ContextProvider>
        </>
    )
}

export default function 유즈콘텍스트사용해보기() {
    //const { hello } = useMyContext();
    return (
        <ParentComponent ></ParentComponent>
        // <div id="container">

        //     <div id="grid">
        //         <ParentComponent >
        //             {/* <Left1 number={number}></Left1>
        //             <Middle1 onIncease={() => {
        //                 setNumber(number + 1);
        //             }
        //             }></Middle1>
        //             <Right1 onIncease={() => {
        //                 setNumber(number + 1);
        //             }
        //             }></Right1> */}
        //         </ParentComponent>
        //     </div>
        // </div>
    )
}

function Left1(props: any) { return (<div><h1>Left1 : {props.number}</h1><Left2 number={props.number}></Left2></div>) }
function Left2(props: any) { return (<div><h1>Left2 : {props.number}</h1><Left3 number={props.number}></Left3></div>) }
function Left3(props: any) { return (<div><h1>Left3 : {props.number}</h1></div>) }

function Middle1() { return (<div><h1>Middle1 : </h1><Middle2></Middle2></div>) }
function Middle2() { return (<div><h1>Middle2 : </h1><Middle3></Middle3></div>) }
function Middle3() {
    const { hello } = useMyContext();
    return (<div><h1>Middle3 : </h1><input type="button" value={'헐 그냥 값을 내려줄뿐'} />{hello}</div>)
}

function Right1(props: any) { return (<div><h1>Right1 : </h1><Right2 onIncease={() => { props.onIncease(); }}></Right2></div>) }
function Right2(props: any) { return (<div><h1>Right2 : </h1><Right3 onIncease={() => { props.onIncease(); }} ></Right3></div>) }
function Right3(props: any) { return (<div><h1>Right3 : </h1><input type="button" value={"+"} onClick={() => { props.onIncease() }} /></div>) }


