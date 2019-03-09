import Link from "next/link";

export default props => {
  const { posts } = props;
  return (
    <>
      <div id="content">
        <div className="container">
          <div className="post-list">
            {posts.length > 0 ? (
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
      <style jsx="true">{`
        ul {
          list-style-type: none;
          padding: 0;
          text-align: center;
          margin-bottom: 0;
        }
        ul li {
          display: inline-block;
          padding: 2px 10px;
          margin: 0px 5px;
        }
        ul li a {
          color: #aaa;
          text-decoration: none;
        }
        ul li a:hover {
          color: #000;
        }
        .current-page {
          color: #000;
          border-bottom: 3px solid #343d46;
        }
        .container {
          height: calc(100vh - 282px);
        }
        .post-list {
          background-color: #fff;
          border: 1px solid #eee;
          padding: 20px;
          margin-bottom: 50px;
          border-radius: 5px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .post {
          padding: 10px;
        }
        .post a {
          display: flex;
          color: black;
          justify-content: space-between;
          text-decoration: none;
        }
        .post a .post-title {
          font-size: 1.2rem;
        }
        .post a .post-title:hover {
          font-size: 1.2rem;
          text-decoration: underline;
        }
        .post a .post-createdAt {
          width: 150px;
          color: #999;
          font-size: 0.8rem;
          vertical-align: baseline;
          text-align: right;
        }
      `}</style>
    </>
  );
};
