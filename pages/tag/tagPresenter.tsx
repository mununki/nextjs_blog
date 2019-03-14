import Link from "next/link";
import PostCard from "../../components/PostCard";
import { IPost } from "../../types";

interface IProps {
  posts: IPost[];
}

export default (props: IProps) => {
  const { posts } = props;
  return (
    <div id="content">
      <div className="container">
        <div className="post-list">
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.title} className="post">
                <Link href={`/post/${post.filename}`}>
                  <a>
                    <PostCard post={post} />
                  </a>
                </Link>
              </div>
            ))
          ) : (
            <div>No result...</div>
          )}
        </div>
      </div>
    </div>
  );
};
