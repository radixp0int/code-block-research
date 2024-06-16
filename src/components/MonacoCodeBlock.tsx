import { useEffect } from "react";
import { Editor } from "@monaco-editor/react";

const MonacoCodeBlock = ({ code }: { code: string }) => {
  function handleEditorChange(value: unknown) {
    console.log("Here is the current model value:", value);
  }

  useEffect(() => {
    import("monaco-editor/esm/vs/editor/editor.api").then((monaco) => {
      monaco.editor.setTheme("vs-dark");
    });
  }, []);

  return (
    <>
      <h1>Monaco Editor</h1>
      <Editor
        height="500px"
        width={"550px"}
        defaultLanguage="javascript"
        theme="vs-dark"
        loading
        defaultValue={code}
        onChange={handleEditorChange}
      />
    </>
  );
};

export default MonacoCodeBlock;
