import { useEffect, useRef, useState } from "react"

export default function ExUseRef() {
    const [render, setRenderer] = useState(0);
    let countVar = 0;
    const countRef = useRef(0);
    console.log("render!");
    // let 과 ref의 차이점은 렌더링될때 초기화 안되는것임
    const doRendering = () => {
        setRenderer(render + 1);
    }
    const increaseRef = () => {
        countRef.current = countRef.current + 1; console.log("ref : ", countRef.current);
    }
    const increaseLet = () => {
        countVar = countVar + 1; console.log("Let! : ", countVar);
    }
    const printResult = () => {
        console.log(`최종값 ! ref : ${countRef.current} ,, let : ${countVar}`);
    }
    // 로그인 //
    //const inputRef2 = useRef<undefined | null>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    // input은 이렇게 사용해야함

    useEffect(() => {
        inputRef2.current && inputRef2.current.focus();
        if (inputRef2.current != null) { // if 문에 넣어야 널 익셉션 없어짐
            inputRef2.current.focus();
        }
    }, []);// []은 마운트될때 한번만 튐

    const login = () => {
        if (inputRef2.current) {
            alert(`하이 ${inputRef2.current.value}!`);
            inputRef2.current.focus();
        }
    }

    return (
        <>
            <h2>ExUseRef</h2>
            <p>ReF : {countRef.current}</p>
            <p>Let : {countVar}</p>
            <button onClick={doRendering}>RENDER</button>
            <button onClick={increaseRef}>ref UPUP</button>
            <button onClick={increaseLet}>Let UPUP</button>
            <button onClick={printResult}>result!</button>
            <hr />
            <h2>로그인!</h2>
            <div>
                <input ref={inputRef2} type="text" placeholder="usename" />
                <button onClick={login}>LOGIN</button>
            </div>
        </>
    )
}