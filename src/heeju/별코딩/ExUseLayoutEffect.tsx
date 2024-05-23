import { useEffect, useLayoutEffect, useState } from "react"

export default function ExUseLayoutEffect() {
    const [count, setCount] = useState(0);
    const handleCountUpdate = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log('useEffect - count : ', count);

    }, [count]); //비동기적으로 실행됨 (블록킹 안됨 : 다른작업은 돌아가고있고 같이 돌아감), 컴포넌트가 화면에 그려질때 적절할때에 실행됨

    useLayoutEffect(() => {
        console.log('useLayoutEffect - count : ', count);
    }, [count]);
    // 동기적으로 실행됨(블록킹 됨 : 다른작업은 멈추고 이게 끝나면 넘어감) , 
    // 컴포넌트가 화면에 그려지기 전에 실행됨, 무거운작업이 안에서 돌면 멈춤현상이 일어남

    return (
        <>
            <h3>ExUseLayoutEffect</h3>
            <p>count : {count}</p>
            <button onClick={handleCountUpdate}>update</button>
        </>
    )
}