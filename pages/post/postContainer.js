import { withRouter } from "next/router";
import PostPresenter from "./postPresenter";
import PostListPresenter from "./postListPresenter";
import postList from "../../posts/postList";
import { getPagination } from "../../utils/pagination";

const PostContainer = props => {
  const { category, filename, page } = props.router.query;
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
    const paginatedPosts = getPagination(posts);
    return (
      <PostListPresenter
        category={category}
        posts={paginatedPosts}
        page={page}
      />
    );
  }
};

export default withRouter(PostContainer);
