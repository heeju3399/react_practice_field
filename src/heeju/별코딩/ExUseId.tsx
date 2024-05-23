import { useId } from "react"

export default function ExUseId() {
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
    // 자바스크립트의 고유 아이디 만드는 법은 여러가지가 있다. 
    // Math.random()  ,, uuid 등으로 사용함
    // 왜 useId 사용할까?
    return (
        <div>
            <label htmlFor={`${id}-name`}>NAME : </label>
            <input type="text" name="oksk" id={`${id}-name`} />
            <br />
            <label htmlFor={`${id}-age`}>AGE : </label>
            <input type="text" name="oksk" id={`${id}-age`} />
            <hr />
            <span>id-name : {`${id}-name`}</span>
            <span>id-age : {`${id}-age`}</span>
        </div>
    )

}
