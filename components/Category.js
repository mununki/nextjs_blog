import Link from "next/link";
import postCounter from "../utils/postCounter";

const _checkCategory = (path, link) => {
  if (path === link) return true;
  return false;
};

const Category = props => {
  const { category } = props.router.query;

  return (
    <>
      <div
        id={`${props.isShowing === "category" ? "category__show" : "category"}`}
      >
        <div id="container-category">
          <div id="container-category-fixed">
            <div id="menu-close-button" onClick={() => props._setShowing(null)}>
              <i className="fas fa-times" />
            </div>

            <Link href="/post/react">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "react") ? "selected" : null}
              >
                <span>React</span>
                <span>{postCounter("react")}</span>
              </a>
            </Link>
            <Link href="/post/django">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "django") ? "selected" : null}
              >
                <span>Django</span>
                <span>{postCounter("django")}</span>
              </a>
            </Link>
            <Link href="/post/javascript">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "javascript") ? "selected" : null}
              >
                <span>Javascript</span>
                <span>{postCounter("javascript")}</span>
              </a>
            </Link>
            <Link href="/post/python">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "python") ? "selected" : null}
              >
                <span>Python</span>
                <span>{postCounter("python")}</span>
              </a>
            </Link>
            <Link href="/post/htmlcss">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "htmlcss") ? "selected" : null}
              >
                <span>Html CSS</span>
                <span>{postCounter("htmlcss")}</span>
              </a>
            </Link>
            <Link href="/post/backend">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "backend") ? "selected" : null}
              >
                <span>Backend</span>
                <span>{postCounter("backend")}</span>
              </a>
            </Link>
            <Link href="/post/devlogs">
              <a
                onClick={() => props._setShowing(null)}
                id={_checkCategory(category, "devlogs") ? "selected" : null}
              >
                <span>dev logs</span>
                <span>{postCounter("devlogs")}</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          #category,
          #category__show {
            grid-area: category;
            background-color: #eee;
            padding: 15px 0;
          }
          .make-fixed-category {
            position: fixed;
            top: 87px;
            left: 0;
            width: 100%;
            display: grid;
            grid-template-columns: 300px 1fr;
            grid-template-areas: "category-fixed content-fixed";
          }
          #container-category-fixed {
            grid-area: category-fixed;
          }
          #menu-close-button {
            display: none;
          }
          @media (max-width: 576px) {
            #category {
              display: none;
            }
            #category__show {
              grid-area: 2/1/3/2;
              z-index: 10;
              background-color: rgba(238, 238, 238, 0.97);
            }
            #menu-close-button {
              display: block;
              margin-right: 10px;
              padding: 10px;
              font-size: 2rem;
              color: #555;
              cursor: pointer;
              text-align: right;
            }
            .make-fixed-category {
              display: block;
            }
          }
          #category a,
          #category__show a {
            display: flex;
            margin: 0;
            padding: 15px 30px;
            color: #555;
            text-decoration: none;
            justify-content: space-between;
          }
          #category a:hover,
          #category__show a:hover {
            background-color: #ddd;
            transition: 0.5s;
          }

          #category a#selected,
          #category__show a#selected {
            color: #000;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Category;
