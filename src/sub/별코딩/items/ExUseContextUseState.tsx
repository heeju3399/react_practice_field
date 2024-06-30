import { useState } from "react";
import "./star.css";
type useStateType = {
  isDark: boolean;
  setIsDark?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ExUseContextUseState() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Page isDark={isDark} setIsDark={setIsDark}></Page>
    </>
  );
}

function Page(props: useStateType) {
  return (
    <div className="page">
      <Header isDark={props.isDark}></Header>
      <Content isDark={props.isDark}></Content>
      <Footer isDark={props.isDark} setIsDark={props.setIsDark}></Footer>
    </div>
  );
}

function Content(props: useStateType) {
  return (
    <>
      <div
        className="content"
        style={{
          backgroundColor: props.isDark ? "black" : "lightgray",
          color: props.isDark ? "white" : "black",
        }}
      >
        <p>길동님 좋은하루 되세요!</p>
      </div>
    </>
  );
}

function Header(props: useStateType) {
  return (
    <>
      <header
        className="header"
        style={{
          backgroundColor: props.isDark ? "black" : "lightgray",
          color: props.isDark ? "white" : "black",
        }}
      >
        <h2>ExUseContextUseState</h2>
      </header>
    </>
  );
}

function Footer(props: useStateType) {
  const toggleTheme = () => {
    if (props.setIsDark != null) {
      console.log("props:", props.setIsDark);
      props.setIsDark(!props.isDark);
    }
  };
  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundColor: props.isDark ? "black" : "lightgray",
        }}
      >
        <button className="button" onClick={toggleTheme}>
          Dark Mode
        </button>
      </footer>
    </>
  );
}
