import Link from "next/link";
import cssPostList from "../../style/cssPostList";

const postList = props => {
  const { category, posts } = props;
  return (
    <>
      <div id="content">
        <div className="container">
          <div className="post-list">
            {posts.length > 0 ? (
              posts.map((post, key) => (
                <div key={key} className="post">
                  <Link href={`/post/${category}/${post.filename}`}>
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
              <div>no post yet...🤔</div>
            )}
          </div>
        </div>
      </div>
      <style jsx="true">{cssPostList}</style>
    </>
  );
};

export default postList;
