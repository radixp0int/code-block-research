import "./App.css";
import CodeMirrorCodeBlock from "./components/CodeMirrorCodeBlock";
import MonacoCodeBlock from "./components/MonacoCodeBlock";
import PrismCodeBlock from "./components/PrismCodeBlock";
import SandBoxCodeBlock from "./components/SandBoxCodeBlock";
import { monacoEditorCodeSample, codeMirrorSample, sandBoxCodeSample, prismCodeSample } from "./components/code-samples";

function App() {

  return (
    <div className="gap">

      <div>
        <MonacoCodeBlock code={monacoEditorCodeSample} />
      </div>

      <div>
        <CodeMirrorCodeBlock initialValue={codeMirrorSample} />
      </div>

      <div>
        <SandBoxCodeBlock code={sandBoxCodeSample} />
      </div>

      <div>
        <PrismCodeBlock code={prismCodeSample} />
      </div>
    </div>
  );
}

export default App;
