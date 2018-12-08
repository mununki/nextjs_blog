import { withRouter } from "next/router";
import PostPresenter from "./postPresenter";
import PostListPresenter from "./postListPresenter";
import postList from "../../posts/postList";
import moment from "moment";

const PostContainer = props => {
  const { category, filename } = props.router.query;
  let posts = postList;
  if (category) {
    posts = postList.filter(
      post => post.category.filter(item => item === category).length > 0
    );
  }
  if (filename) {
    const post = posts.filter(post => post.filename === filename);
    return <PostPresenter category={category} post={post} />;
  } else {
    posts.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
    return <PostListPresenter category={category} posts={posts} />;
  }
};

export default withRouter(PostContainer);
