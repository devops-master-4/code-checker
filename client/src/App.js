import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import jsBeautify from "js-beautify";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Component = (props) => {
  const [code, setCode] = useState("");

  return (
    <div className="">
      <div className="flex-container">
        <div className="textarea-container">
          <textarea
            className="textarea"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            id="code"
          />
        </div>
        <div className="buttons-container">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigator.clipboard.writeText(
                jsBeautify(code, { indent_size: 2, space_in_empty_paren: true })
              );
            }}
          >
            Copy to clipboard
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const code = document.getElementById("code").value;
              const blob = new Blob([code], { type: "text/plain" });
              const anchor = document.createElement("a");
              anchor.download = "code.js";
              anchor.href = window.URL.createObjectURL(blob);
              anchor.target = "_blank";
              anchor.style.display = "none"; // just to be safe!
              document.body.appendChild(anchor);
              anchor.click();
              document.body.removeChild(anchor);
            }}
          >
            Download
          </button>
        </div>
        <div className="syntax-highlighter-container">
          <SyntaxHighlighter
            className="syntax-highlighter"
            language="javascript"
            style={dark}
          >
            {jsBeautify(code, { indent_size: 2, space_in_empty_paren: true })}
          </SyntaxHighlighter>
        </div>
      </div>
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
