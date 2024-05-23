import { useState } from "react";
//상태관리
//input3개를 처리하려면 3개씩 똑같은 코드를 쳐야하는데 하나로 할순 없을까? 그래서 처리 커스텀 훅?!
function useInput(initialValue: any, submitAction: any) {
    <p></p>//훅의 규칙은 use를 넣어주어야 한다는 것임
    const [inputValue, setInputValue] = useState(initialValue);
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = () => {
        alert(inputValue);
        setInputValue("");
        submitAction(inputValue);
    };
    return [inputValue, handleChange, handleSubmit];
};
function display(message: string) {
    alert(message);
}
//상태관리
export default function ExUseCustomHook() {
    const [inputVlue, handleChange, handleSubmit] = useInput('안녕ㅋ', display);
    return (
        <>
            <h3>ExUseCustomHook</h3>
            <input type="text" value={inputVlue} onChange={handleChange} />
            <button onClick={handleSubmit}>확인</button>
        </>
    );
}




