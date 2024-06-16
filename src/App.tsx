import "./App.css";
import CodeMirrorCodeBlock from "./components/CodeMirrorCodeBlock";
import MonacoCodeBlock from "./components/MonacoCodeBlock";
import SandBoxCodeBlock from "./components/SandBoxCodeBlock";

function App() {
  const code = `import './styles.css'\n\nfunction App() {\n  return (\n    <>\n      <p className="read-the-docs">\n        Testing\n      </p>\n    </>\n  )\n}\n\nexport default App`;
  return (
    <div className="gap">

      <div>
        <MonacoCodeBlock code={code} />
      </div>

      <div>
        <CodeMirrorCodeBlock initialValue={code} />
      </div>

      <div>
        <SandBoxCodeBlock code={code} />
      </div>
    </div>
  );
}

export default App;
