import dynamic from "next/dynamic";
import codeHighlighting from "../../utils/codeHighlight";

export default props => {
  const MD = dynamic(props.post[0].md);

  return (
    <div id="content">
      <div className="container">
        <MD />
        <style>{codeHighlighting}</style>
      </div>
    </div>
  );
};
