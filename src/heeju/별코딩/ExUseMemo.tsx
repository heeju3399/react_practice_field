import { useMemo, useState } from "react";

const 어려운계산기 = (number: number): number => {
    console.log('어려운계산기 pass');
    for (let i = 0; i < 1000000000; i++) { }
    return number + 20000;
}
const 쉬운계산기 = (number: number): number => {
    console.log('쉬운계산기 pass');
    return number + 1;
}

export default function ExUseMemo() {
    // 이함수가 랜더링 되면 
    const [hardNum, setHardNum] = useState(0);
    const [easyNum, setEasyNum] = useState(0);
    //const hardSum = 어려운계산기(hardNum);
    const hardSum = useMemo<number>(() => {
        return 어려운계산기(hardNum)
    }, [hardNum]);// hardNum이 변경되어야 함수를 호출함 변경안되면 그대로!
    const easySum = 쉬운계산기(easyNum);
    // 쉬운 계산기만 돌리려고 하면 하드도 같이 돌아감
    // 쉬운계산기만 돌릴수 없을까? 여기서 사용하는것이 메모!

    return (
        <>
            <h3>ExUseMemo</h3>
            <h4>어려운계산기</h4>
            <input
                type="number"
                //value={num}
                onChange={(e) => setHardNum(parseInt(e.target.value))}
            />
            <div></div>
            <span>{hardNum} + 20000 = {hardSum}</span>

            <h4>쉬운계산기</h4>
            <input
                type="number"
                //value={num}
                onChange={(e) => setEasyNum(parseInt(e.target.value))}
            />
            <div></div>
            <span>{easyNum} + 1 = {easySum}</span>
        </>
    )
}