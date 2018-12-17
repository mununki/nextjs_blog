import Link from "next/link";
import cssPostList from "../../style/cssPostList";

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
      <style jsx="true">{cssPostList}</style>
    </>
  );
};

export default postList;
