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
          <div className="post-list">
            {posts.length > 0 ? (
              posts.map(post => <PostCard key={post.title} post={post} />)
            ) : (
              <div>No result...</div>
            )}
          </div>
        </div>
        <style jsx>
          {`
            #content {
              min-height: 100vh;
            }
          `}
        </style>
      </div>
      <Footer />
    </>
  );
};
