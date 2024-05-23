import { useCallback, useEffect, useState } from "react"

export default function ExUseCallback() {
    const [num, setNum] = useState(0);
    // const someFun = () => {
    //     console.log(`some fun: num: ${num} `);
    //     return;
    // }
    // useEffect(() => {
    //     console.log('some fun 변경됨!');
    // }, [someFun])
    // 함수는 렌더링 되면서 주소값이 바뀜 그래서 useEffect가 호출됨! 안되게 하려면? useCallBack

    const someFun = useCallback(() => { //메모리제이션된걸 사용한다고 함..
        console.log(`some fun: num: ${num} `);
        return;
    }, [num])
    useEffect(() => {
        console.log('some fun 변경됨!');
    }, [someFun])
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <h3>ExUseCallback</h3>
            <input
                type="number"
                onChange={(e) => setNum(parseInt(e.target.value))}
            />
            <button onClick={() => { setToggle(!toggle) }}>드가자 값 : {toggle.toString()}</button>
            <br />
            <button onClick={someFun}>cll some fun</button>
        </>
    )
}