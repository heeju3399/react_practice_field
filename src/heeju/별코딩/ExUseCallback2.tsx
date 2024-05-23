import { useCallback, useEffect, useState } from "react"

export default function ExUseCallback2() {
    console.log(' 렌더링!!');
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    // const createBoxStyle = () => { //size가 바뀌었을때만 호출되도록 하기!!
    //     return {
    //         backgroundColor: 'pink',
    //         width: `${size}px`,
    //         height: `${size}px`,
    //     }
    // };

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        }
    }, [size]);

    return (
        <div style={{ color: isDark ? "balck" : "white" }}>oksk
            <h3>ExUseCallback2</h3>
            <input
                type="number"
                onChange={(e) => setSize(parseInt(e.target.value))}
            /><button onClick={() => { setIsDark(!isDark) }}>전환!{isDark.toString()}</button>
            <hr />
            <Box createBoxStyle={createBoxStyle}></Box>
        </div>
    )
}

function Box({ createBoxStyle }) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        console.log('박스 키우기!');
        setStyle(createBoxStyle);
    }, [createBoxStyle])
    return (
        <div style={style}></div>
    );
}



