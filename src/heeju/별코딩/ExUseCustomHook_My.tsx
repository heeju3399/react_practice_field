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
    useEffect(() => {
        fetchUrl(initType);
    }, []);

    return { data, fetchUrl }
}

export default function ExUseCustomHook2My() {
    // 이것저것 해보려고 했지만 안됨...
    const { data, fetchUrl } = useFetchCustom(baseUrl, "users");
    return (
        <>
            <h3>ExUseCustomHook2 - fetch</h3>
            <button onClick={() => { fetchUrl("users") }}>users</button>
            <button onClick={() => { fetchUrl("posts") }}>posts</button>
            <button onClick={() => { fetchUrl("todos") }}>todos</button>
            {/* //map? */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}


