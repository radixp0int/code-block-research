import React from "react";
import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

// type Props = {}

export function SandBoxCodeBlock() {
  const files = {
    "/App.js": `
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
        `,
  };

  return (
    <div>
      <h1>Sandpack Example</h1>
      <Sandpack files={files} theme="dark" template="react" />
    </div>
  );
}
