import { useState, memo } from "react"
//메모는 해당 값이 변경될때 다시 렌더링됨
//유즈 콜백도 비슷함!
const Child = memo(({ name, age }: any) => {
    console.log('child page pass')
    return (
        <div style={{ border: '2px solid red', padding: '10px' }}>
            <h5>자녀</h5>
            <p>name  : {name}</p>
            <p>age  : {age}</p>
        </div>
    )
});

export default function 컴퓨넌트최적화() {
    console.log('++++++++++rendering++++++++++');
    const [childAge, setChildAge] = useState(0);
    const [parentAge, setParentAge] = useState(0);
    const incrementParentAge = () => {
        setParentAge(parentAge + 1)
    }
    const incrementChildtAge = () => {
        setChildAge(childAge + 1)
    }

    return (
        <>
            <h3>컴퓨넌트최적화</h3>
            <div style={{ border: '2px solid navy', padding: '10px' }}>
                <h4>부모</h4>
                <p>age: {parentAge}</p>
                <button onClick={incrementParentAge}>부모나이증가</button>
                <button onClick={incrementChildtAge}>자뇨나이증가</button>
                <Child name={'길동이'} age={childAge} />
            </div>
        </>
    )
}




