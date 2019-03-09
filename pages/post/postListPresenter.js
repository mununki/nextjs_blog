import Link from "next/link";

const getPageNoArray = posts => {
  const pageArray = Object.keys(posts);
  return pageArray.reverse();
};

const postList = props => {
  const { category, posts } = props;
  let { page } = props;
  const pageArray = getPageNoArray(posts); // ["2", "1"]
  if (!page) {
    page = Math.max(...pageArray); // if URL doesn't have a page
  } else if (Math.max(...Object.keys(posts)) < page) {
    // if URL page is bigger than actual pages
    page = Math.max(...Object.keys(posts)); // then set page with max page no.
  }
  return (
    <>
      <div id="content">
        <div className="container">
          <div className="post-list">
            {Object.keys(posts).length > 0 ? ( // check if posts objects is empty
              posts[page].map((post, key) => (
                <div key={key} className="post">
                  <Link
                    href={`/post/${post.category}/${page}/${post.filename}`}
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
              <div>no post yet...🤔</div>
            )}
            <div>
              <ul>
                {pageArray.map((p, key) =>
                  parseInt(p, 10) === parseInt(page, 10) ? (
                    <li key={key} className="current-page">
                      {p}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link href={`/post/${category}/${p}`}>
                        <a>{p}</a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
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

export default postList;
