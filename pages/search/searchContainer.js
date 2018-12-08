import { withRouter } from "next/router";
import SearchPresenter from "./searchPresenter";
import postList from "../../posts/postList";
import moment from "moment";

const searchContainer = props => {
  const { keyword } = props.router.query;
  const keywordArray = keyword.split(" ");

  let posts;
  if (keyword) {
    posts = postList.filter(
      post =>
        post.category.filter(
          item => keywordArray.filter(keyword => item === keyword).length > 0
        ).length > 0
    );
  }
  posts.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
  return <SearchPresenter posts={posts} />;
};

export default withRouter(searchContainer);
