import { useEffect, useState } from "react";
//상태관리
const baseUrl = 'https://jsonplaceholder.typicode.com';
//커스텀 하기
function useFetchCustom(url: string, initType: string) {
    const [data, setData] = useState([]);
    const fetchUrl = (type: string) => {
        fetch(url + '/' + type)
            .then(res => res.json())
            .then((res) => setData(res));
    }

    console.log(data);
    useEffect(() => {
        fetchUrl(initType);
    }, []);

    return { data }
}

//기본적인 방법
// export default function ExUseCustomHook2Custom() {
//     const { data, fetchUrl } = useFetchCustom(baseUrl, "users");
//     return (
//         <>
//             <h3>ExUseCustomHook2 - fetch</h3>
//             <span></span>
//             <button onClick={() => { fetchUrl("users") }}>users</button>
//             <button onClick={() => { fetchUrl("posts") }}>posts</button>
//             <button onClick={() => { fetchUrl("todos") }}>todos</button>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </>
//     );
// }

//응용법 음... 이게 응용법?
export default function ExUseCustomHook2Custom() {
    const { data: userData } = useFetchCustom(baseUrl, "users");
    const { data: postData } = useFetchCustom(baseUrl, "posts");
    const { data: todosData } = useFetchCustom(baseUrl, "todos");
    return (
        <>
            <h3>ExUseCustomHook2 - fetch</h3>
            <span></span>
            <h2>users</h2>
            {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
            <h2>postData</h2>
            {postData && <pre>{JSON.stringify(postData, null, 2)}</pre>}
            <h2>todosData</h2>
            {todosData && <pre>{JSON.stringify(todosData, null, 2)}</pre>}

        </>
    );
}

