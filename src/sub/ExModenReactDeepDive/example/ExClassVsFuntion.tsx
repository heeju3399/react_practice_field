import React, { ReactNode, useState } from "react";
import "../example/ClassVsFuntion.css";

export default function ClassVsFuntion() {
  return (
    <>
      <div>
        <h2>hellow world</h2>
        <hr />
        <p>
          <h2>functuion</h2>
          <pre>
            {` <div className="MainOfClassVsFuntionCss">
      <h2>function style compontnt</h2>
      <p>init num : {value}</p>
      <input
        type="button"
        value={"randome"}
        onClick={() => {
          setValue(Math.random());
        }}
      />
    </div> `}
          </pre>
        </p>
        <FuncComp></FuncComp>
        <br />
        <hr />
        <br />
        <p>
          <h2>class</h2>
          <pre>
            {` <div className="MainOfClassVsFuntionCss">
        <h2>class style compontnt</h2>
        <p>init num : {this.state.number}</p>
        <input
          type="button"
          value={"randome"}
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        />
      </div>`}
          </pre>
        </p>
        <ClassComp initNumber={2}></ClassComp>
      </div>
    </>
  );
}

function FuncComp() {
  const [value, setValue] = useState(2);
  return (
    <div className="MainOfClassVsFuntionCss">
      <h2>function style compontnt</h2>
      <p>init num : {value}</p>
      <input
        type="button"
        value={"randome"}
        onClick={() => {
          setValue(Math.random());
        }}
      />
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
  };

  render(): ReactNode {
    return (
      <div className="MainOfClassVsFuntionCss">
        <h2>class style compontnt</h2>
        <p>init num : {this.state.number}</p>
        <input
          type="button"
          value={"randome"}
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        />
      </div>
    );
  }
}
