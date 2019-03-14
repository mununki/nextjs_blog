import "../../style/post.scss";
import { IPost } from "../../types";

interface IProps {
  post: IPost;
}

const PostPresenter = (props: IProps) => {
  const MD = require(`../../posts/${props.post.filename}.md`);

  return (
    <div id="content">
      <div className="container">
        <div className="post-card">
          <MD.default />
        </div>
      </div>
    </div>
  );
};

export default PostPresenter;
