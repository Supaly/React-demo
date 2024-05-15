import React from "react";
import ReactDOM from "react-dom/client";


const element = <h1>this is jsx elememt inside another element </h1>

const element2 = <h5> 
{element}  another jsx Element </h5>
 const Title = () => <h1>I am using Jsx</h1>


 const Heading = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {element2}
    <h1>inside heading functional component</h1>
    </div>
 );

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Heading />);