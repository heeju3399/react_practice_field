import { useRef } from "react";

export default function UseRef3() {

    const inputEl = useRef(null);
    const onBtnClick = () => {
        // input 박스에 포커스!
        inputEl.current.focus();
    }

    return (
        <>
            <div>
                <input ref={inputEl} type="text" />
                <button onClick={onBtnClick} >클릭시 인풋박스에 포커스 주어짐!!</button>
            </div>

        </>
    )
}