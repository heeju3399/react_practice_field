import { useEffect, useMemo, useState } from "react";


export default function ExUseMemo2() {

    const [num, setNum] = useState(0);
    const [isKore, setIsKorea] = useState(true);

    // const location = isKore ? '한국' : '외국';
    //
    // useEffect(() => {
    //     console.log('useEffect pass', location);
    // }, [location]);
    //location에 있는 값이 변하지 않으면 useEffect는 렌더링이 되더라도 동작하지 않는다 ->

    // const location = {
    //     country: isKore ? '한국' : '외국'
    // };
    // useEffect(() => {
    //     console.log('useEffect pass', location);
    // }, [location]);
    // 하지만 객체나 배열이면 무조건 바뀜 배열이나 객체는 보기에는 같더라도 메모리상에 주소가 바뀐다고 함
    // 안바뀌게 하려면 useMemo에 넣어주면 됨

    const location = useMemo(() => {
        return {
            country: isKore ? '한국' : '외국'
        }
    }, [isKore]);

    useEffect(() => {
        console.log('useEffect pass', location);
    }, [location]);
    // iskorea 가 바뀌어야 유즈메모가 작동하니 안바뀌면 location은 값이 그대로 그러면 useEffect도 안바뀜!

    return (
        <>
            <h3>ExUseMemo2</h3>
            <h4>하루에 몇끼 먹어요??</h4>
            <span>{num}끼!</span>
            <input
                type="number"
                onChange={(e) => setNum(parseInt(e.target.value))}
            />
            <hr />
            <h4>어느 나라에 있어요?</h4>
            <p>나라 : {location.country}</p>
            <button onClick={() => { setIsKorea(!isKore) }}>{location.country}행 비행기 타자</button>
        </>
    )
}