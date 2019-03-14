import { withRouter, WithRouterProps } from "next/router";
import postList from "../../posts/postList";
import PostPresenter from "./postPresenter";

const PostContainer = (props: WithRouterProps<{ filename?: string }>) => {
  if (props.router && props.router.query && props.router.query.filename) {
    const { filename } = props.router.query;
    const post = postList.filter(p => p.filename === filename);

    if (post.length > 0) {
      // found the post with same filename
      return <PostPresenter post={post[0]} />;
    } else {
      // can't find the post with same filename
      return <div>404!</div>;
    }
  } else {
    // wrong route
    return <div>404!</div>;
  }
};

export default withRouter(PostContainer);
