import { Component, ReactNode } from "react";
import "./example.css";
import { Typography } from "@mui/material";

export default function ClassComponent() {
  return (
    <>
      <Typography>{`<button onClick={() => this.setState({ city: "Busan" })}>`}</Typography>
      <Typography>위식으로 함</Typography>
      <MyComp name={"이름1"}></MyComp>
      <hr />
      <br />
      <Typography>
        <pre>
          {`
        constructor(props) {
        super(props);
        this.state = {
          city: "OSAKA",
        };
        this.handleClisk2 = this.handleClisk2.bind(this);
        }
        handleClisk2() {
        this.setState({ city: "handleClisk2" });
        }
        `}
        </pre>
      </Typography>
      <Typography>위식으로 함</Typography>
      <MyComp2 name={"이름2"}></MyComp2>
    </>
  );
}

class MyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "LA",
      city2: "LA2",
      address0: "DeaGu",
    };
  }

  render(): ReactNode {
    const name1 = this.props.name;
    const { city } = this.state;
    return (
      <div className="oksk">
        <h1>hellow wordl</h1>
        <p>name1 : {name1}</p>
        <p>city1 : {city}</p>
        <p>name2 : {this.props.name}</p>
        <p>city2 : {this.state.city2}</p>
        <p>name99 : {this.props.name}</p>
        <p>address00 : {this.state.address0}</p>
        <button onClick={() => this.setState({ city: "Busan" })}>
          chant city
        </button>
      </div>
    );
  }
}

class MyComp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "OSAKA",
    };
    this.handleClisk2 = this.handleClisk2.bind(this);
    console.log("I am constructor");
  }
  // 라이프 사이클!!
  componentDidMount(): void {
    console.log("I am componentDidMount");
  }
  componentDidUpdate(): void {
    console.log("I am componentDidUpdate");
  }

  handleClisk2() {
    this.setState({ city: "handleClisk2" });
  }

  render(): ReactNode {
    console.log("I am render");
    const name1 = this.props.name;
    const { city } = this.state;
    return (
      <div className="oksk">
        <h1>hellow wordl</h1>
        <p>city : {city}</p>
        <button onClick={this.handleClisk2}>chant city</button>
      </div>
    );
  }
}
