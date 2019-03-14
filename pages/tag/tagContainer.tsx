import dayjs from "dayjs";
import { withRouter, WithRouterProps } from "next/router";
import postList from "../../posts/postList";
import TagPresenter from "./tagPresenter";
import TagSearch from "./tagSearch";

const tagContainer = (props: WithRouterProps<{ tag?: string }>) => {
  if (props.router && props.router.query && props.router.query.tag) {
    const { tag } = props.router.query;

    const posts = postList.filter(
      post => post.tag.filter(t => t === tag).length > 0
    );

    posts.sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix());

    if (posts.length > 0) {
      return <TagPresenter posts={posts} />;
    } else {
      return <div>404!</div>;
    }
  } else {
    return <TagSearch />;
  }
};

export default withRouter(tagContainer);
