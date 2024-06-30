import { useEffect, useState } from "react";
import List from "./List.tsx";

function WeatherData() {
  const weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=35.10&lon=128.85&lang=kr&units=metric&appid=b11f6bf8317ebc0626f0d7fd87c2bd6e";
  const [todos, setTodos] = useState([]);
  useEffect(() => {}, []);

  function clickBtn() {
    getWetherData();
  }

  async function getWetherData() {
    await fetch(weatherURL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTodos(response);
      });
  }

  return (
    <>
      <br />
      <span>날씨 데이터 가져오기</span>
      <button onClick={clickBtn}>get weather</button>
      <hr />
      <ul>
        <li>부산날씨</li>
        <List todos={todos} />
      </ul>
    </>
  );
}

export default WeatherData;
