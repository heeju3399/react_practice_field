import { useEffect, useId, useRef } from "react"
// 자바스크립트의 고유 아이디 만드는 법은 여러가지가 있다.
// Math.random()  ,, uuid 등으로 사용함
// 왜 useId 사용할까?
// :r0: 쌍저 사이에 있는것이 장점 


export default function ExUseId2() {
    return (
        <>
            <h3>ExUseId</h3>
            <MyInput />
            <hr />
            <MyInput />
        </>
    )
}

function MyInput() {
    const id = useId();
    const ref = useRef(null);
    console.log('id : ', id);
    useEffect(() => {
        const element = document.querySelector('#btn');
        const ele2 = ref.current;
        console.log('btn ele : ', element)
        console.log('btn ele22 : ', ele2)
    }, [])

    return (
        <div>
            <label htmlFor={`${id}-name`}>NAME : </label>
            <input type="text" name="oksk" id={`${id}-name`} />
            <br />
            <label htmlFor={`${id}-age`}>AGE : </label>
            <input type="text" name="oksk" id={`${id}-age`} />
            <hr />
            <button id="btn">btn</button>
            <input type="text" id={id} ref={ref} />
            <span>id-name : {`${id}-name`}</span>
            <span>id-age : {`${id}-age`}</span>
        </div>
    )

}
