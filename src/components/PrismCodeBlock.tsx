import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PrismCodeBlock = ({ code }: { code: string }) => {
  return (
    <>
      <h1>Prism Block</h1>
      <Prism language="javascript" style={atomDark}>
        {code}
      </Prism>
    </>
  );
};

export default PrismCodeBlock;
