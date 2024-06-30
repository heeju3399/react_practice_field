import { useEffect, useState } from "react";
//상태관리

const url = 'https://jsonplaceholder.typicode.com';

export default function ExUseCustomHook2() {
    const [data, setData] = useState(null);
    const fetchUrl = (type: string) => {
        fetch(url + '/' + type)
            .then(res => res.json())
            .then((res) => setData(res));
    }

    console.log(data);
    useEffect(() => {
        fetchUrl("users");
    }, []);
    return (
        <>
            <h3>ExUseCustomHook2 - fetch</h3>
            <span></span>
            <button onClick={() => { fetchUrl("users") }}>users</button>
            <button onClick={() => { fetchUrl("posts") }}>posts</button>
            <button onClick={() => { fetchUrl("todos") }}>todos</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}


//

