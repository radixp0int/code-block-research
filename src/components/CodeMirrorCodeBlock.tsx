// src/CodeMirrorComponent.jsx
import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const CodeMirrorCodeBlock = ({ initialValue }: { initialValue: string }) => {
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
