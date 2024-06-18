export const codeMirrorSample = 
`import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const CodeMirrorCodeBlock = ({ initialValue }: { initialValue?: string }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: initialValue,
      extensions: [
        keymap.of(defaultKeymap),
        javascript(),
        oneDark,
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            console.log("Content updated:", update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, [initialValue]);

  return (
    <>
      <h1>Code Mirror</h1>
      <div ref={editorRef} style={{ width: "500px" }}></div>
    </>
  );
};

export default CodeMirrorCodeBlock;
`

export const monacoEditorCodeSample =
`import { useEffect } from "react";
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
`
export const sandBoxCodeSample =
`import {
  Sandpack,
} from "@codesandbox/sandpack-react";

const SandBoxCodeBlock = ({ code }: { code: string }) => {
  return (
    <div>
      <h1>Sandpack - SandBox</h1>
      <Sandpack files={code} theme="dark" template="react" />
    </div>
  );
};

export default SandBoxCodeBlock;
`

export const prismCodeSample =
`import { Prism } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const PrismCodeBlock = ({ code }: { code: string }) => {
  return (
    <>
      <h1>Prism Block</h1>
      <Prism language="javascript" style={solarizedlight}>
        {code}
      </Prism>
    </>
  );
};

export default PrismCodeBlock;
`