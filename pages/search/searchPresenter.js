import Link from "next/link";
import cssPostList from "../../style/cssPostList";

export default props => {
  const { posts } = props;
  return (
    <>
      <div id="content">
        <div className="container">
          <div className="post-list">
            {posts ? (
              posts.map((post, key) => (
                <div key={key} className="post">
                  <Link
                    href={`/post/${post.category[0].toLowerCase()}/${
                      post.filename
                    }`}
                  >
                    <a>
                      <span className="post-title">{post.title}</span>
                      <span className="post-createdAt">
                        <i className="far fa-calendar-alt" />
                        {" " + post.createdAt}
                      </span>
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
      <style jsx="true">{cssPostList}</style>
    </>
  );
};
