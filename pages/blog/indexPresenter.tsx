import Footer from "../../components/Footer";
import HeaderAvatar from "../../components/HeaderAvatar";
import PostCard from "../../components/PostCard";
import { IPost } from "../../types";

interface IProps {
  posts: IPost[];
}
export default (props: IProps) => {
  const { posts } = props;

  return (
    <>
      <HeaderAvatar />
      <div id="content">
        <div className="container">
          <div id="content-index">
            {posts &&
              posts.map(post => {
                return <PostCard key={post.title} post={post} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
