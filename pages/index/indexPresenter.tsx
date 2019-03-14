import PostCard from "../../components/PostCard";
import "../../style/index.scss";
import { IPost } from "../../types";

interface IProps {
  posts: IPost[];
}
export default (props: IProps) => {
  const { posts } = props;
  return (
    <div id="content">
      <div className="container">
        {posts &&
          posts.map(post => {
            return <PostCard key={post.title} post={post} />;
          })}
      </div>
    </div>
  );
};
