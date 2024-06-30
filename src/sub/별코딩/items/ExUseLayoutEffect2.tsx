import { useEffect, useLayoutEffect, useRef, useState } from "react"

function getNumbers() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

export default function ExUseLayoutEffect2() {
    const [numbers, setNum] = useState([0]);
    const ref = useRef(null);
    useEffect(() => {
        const nums = getNumbers();
        setNum(nums);
    }, [])
    useLayoutEffect(() => {
        if (numbers.length === 0) {
            return;
        }
        for (let i = 0; i < 3000000; i++) { } // 성능 떨구기
        ref.current.scrollTop = ref.current.scrollHeight; // 15번부터 보이고 싶다면
    }, [numbers]);

    return (
        <>
            <h3>ExUseLayoutEffect2</h3>
            <button onClick={() => { setNum([]) }}>reset</button>
            <div
                ref={ref}
                style={{
                    height: "300px",
                    border: "1px solid blue",
                    overflow: "scroll"
                }}>
                {numbers.map((num, idx) => (<p key={idx}>{num}</p>))}
                <hr />
            </div>
        </>
    )
}