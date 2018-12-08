import IndexPresenter from "./indexPresenter";
import postList from "../../posts/postList";
import moment from "moment";

export default () => {
  postList.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
  const latestPosts = postList.slice(0, 3);
  return <IndexPresenter latestPosts={latestPosts} />;
};
