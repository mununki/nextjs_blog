import Link from "next/link";
import cssPostList from "../../utils/cssPostList";

export default props => {
  const { latestPosts, pinnedPosts } = props;
  return (
    <>
      <div id="content">
        <div className="container">
          <div>
            <h2>
              Latest Posts <i id="latest" className="fas fa-shipping-fast" />
            </h2>
            {latestPosts &&
              latestPosts.map((post, key) => (
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
              ))}
          </div>
          <div>
            <h2>
              Pinned Posts <i id="pinned" className="fas fa-thumbtack" />
            </h2>
            {pinnedPosts ? (
              latestPosts.map((post, key) => (
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
              <div className="post">...</div>
            )}
          </div>
        </div>
      </div>
      <style jsx="true">{cssPostList}</style>
    </>
  );
};
