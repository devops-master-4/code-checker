import logo from "./logo.svg";
import "./App.css";
import jsBeautify from "js-beautify";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// const Component = (props) => {
//   //const codeString = "(num) => num + 1";
//   return (
//     <SyntaxHighlighter language="javascript" style={docco}>

//     </SyntaxHighlighter>
//   );
// };

const Component = (props) => {
  const [code, setCode] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <textarea
        style={{
          width: "100%",
          height: "50vh",
        }}
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      <SyntaxHighlighter language="javascript" style={dark}>
        {jsBeautify(code, { indent_size: 2, space_in_empty_paren: true })}
      </SyntaxHighlighter>
      {/* Copy the formttatedd code to clipboard */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            jsBeautify(code, { indent_size: 2, space_in_empty_paren: true })
          );
        }}
      >
        Copy to clipboard
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Component />
    </div>
  );
}

export default App;
