export default function List({ todos }) {
  if (todos == "") {
    return <></>;
  } else {
    return (
      <>
        <li>
          위도 : {todos.coord.lon} / 경도 : {todos.coord.lat}
        </li>
        <li>날씨 : {todos.weather[0].description}</li>
        <li>현제온도 : {todos.main.temp}</li>
        <li>최고온도 : {todos.main.temp_max}</li>
        <li>최저온도 : {todos.main.temp_min}</li>
        <li>바람 : {todos.wind.speed}</li>
        <li>구름 : {todos.clouds.all}</li>
      </>
    );
  }
}
