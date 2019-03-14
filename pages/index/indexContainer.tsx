import dayjs from "dayjs";
import postList from "../../posts/postList";
import IndexPresenter from "./indexPresenter";

export default () => {
  postList.sort(
    (a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()
  );
  const posts = postList;
  return <IndexPresenter posts={posts} />;
};
