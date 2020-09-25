import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [html, setHtml] = useState("<h1>Hi</h1>");
  const [css, setCss] = useState("h1{color: red}");
  const [js, setJs] = useState("document.body.style.background='green'");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`);
  }, [html, css, js]);

  return (
    <div className="App">
      <div>
        <textarea
          value={html}
          placeholder="html"
          onChange={(e) => setHtml(e.target.value)}
        />

        <textarea
          value={css}
          placeholder="css"
          onChange={(e) => setCss(e.target.value)}
        />

        <textarea
          value={js}
          placeholder="js"
          onChange={(e) => setJs(e.target.value)}
        />
      </div>
      <div>
        <iframe srcDoc={srcDoc} />
      </div>
    </div>
  );
}
