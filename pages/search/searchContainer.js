import { withRouter } from "next/router";
import SearchPresenter from "./searchPresenter";
import postList from "../../posts/postList";
import moment from "moment";

const titleArray = post => {
  const titleWords = post.filename.split("-");
  return titleWords;
};

const searchContainer = props => {
  const { keyword } = props.router.query;

  let postsSearchedByCategory;
  let postsSearchedByTitle;
  let posts = [];
  if (keyword) {
    const keywordArray = keyword.split(" ");
    postsSearchedByCategory = postList.filter(
      post =>
        post.category.filter(
          item => keywordArray.filter(keyword => item === keyword).length > 0
        ).length > 0
    );
    postsSearchedByTitle = postList.filter(
      post =>
        titleArray(post).filter(
          titleWord =>
            keywordArray.filter(keyword => titleWord.toLowerCase() === keyword)
              .length > 0
        ).length > 0
    );
    posts = [...postsSearchedByCategory, ...postsSearchedByTitle];
    posts.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
  }
  return <SearchPresenter posts={posts} />;
};

export default withRouter(searchContainer);
