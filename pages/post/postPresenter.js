import dynamic from "next/dynamic";
import codeHighlighting from "../../style/codeHighlight";

export default props => {
  const MD = require(`../../posts/${props.post[0].filename}.md`).default;

  return (
    <div id="content">
      <div className="container">
        <div className="post-card">
          <MD />
        </div>
        <style>{codeHighlighting}</style>
      </div>
    </div>
  );
};
