import { useState, useEffect } from 'react'
export default function ExUseEffect() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const handle = () => { setCount(count + 1); }
    const handleinputchange = (e: any) => { setName(e.target.value); }
    useEffect(() => {
        console.log("count 동작될때 동작됨" + count);
    }, [count])
    // 여기에 식별자를 넣으면 여기에 넣은 스테이트가 호출될때 동작하게 됨!
    useEffect(() => {
        console.log("마운트 될때 1번만!" + count);
    }, [])
    // 마운트 될때 한번만 호출됨

    return (
        <>
            <h2>ExUseEffect</h2>
            <h2>hellow</h2>
            <button onClick={handle}>upup</button>
            <span>count : {count}</span>
            <hr />
            <input type="text" onChange={handleinputchange} /><hr />
            <span>{name}</span>
        </>
    )
}

