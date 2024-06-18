import {
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
