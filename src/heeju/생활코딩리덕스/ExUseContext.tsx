import { useState, useReducer, useContext, createContext, PropsWithChildren } from "react";
import './index.css';

const context = createContext<{ hello: string } | undefined>({ hello: "" });

export default function ExUseContext() {
    return (
        <>
            <h1>ExUeContext!</h1>
            {/* <context.Provider value={{ hello: 'react' }}>
                <context.Provider value={{ hello: 'java' }}>
                    <Chilldren></Chilldren>
                </context.Provider>
            </context.Provider> */}
            <ParentComponent></ParentComponent>
        </>
    )
}

function Chilldren() {
    const value = useContext(context);
    return (
        <>
            <h2>Chilldren</h2>
            <span>{value ? value.hello : ""}</span>
        </>
    )
}

// 다르게 사용법
const MyContext = createContext<{ hello: string } | undefined>(undefined);

function ContextProvider({ children, text }: PropsWithChildren<{ text: string }>) {
    return (
        <MyContext.Provider value={{ hello: text }}>{children}</MyContext.Provider>
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
    return (
        <>
            <h3>ChildComponent</h3>
            {hello}
        </>
    )
}

function ParentComponent() {
    return (
        <>
            <ContextProvider text='rea666ct?'>
                <ChildComponent></ChildComponent>
            </ContextProvider>
        </>
    )
}