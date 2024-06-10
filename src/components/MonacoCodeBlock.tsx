import React, { useEffect } from "react";
import { Editor, Monaco } from "@monaco-editor/react";

export const MonacoCodeBlock = () => {
  function handleEditorChange(value, event) {
    console.log('Here is the current model value:', value);
  }

  useEffect(() => {
    import('monaco-editor/esm/vs/editor/editor.api').then(monaco => {
      monaco.editor.setTheme('vs-dark');
    });
  }, []);

  return (
    <Editor
      height="500px"
      width={'550px'}
      defaultLanguage="javascript"
      theme="vs-dark"
      loading
      defaultValue={`
import './styles.css'

function App() {

    return (
        <>
            <p className="read-the-docs">
                Testing
            </p>
        </>
    )
}

export default App
        `}
      onChange={handleEditorChange}
    />
  );
};
