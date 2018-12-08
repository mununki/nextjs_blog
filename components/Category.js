import Link from "next/link";
import cssCategory from "../utils/cssCategory";
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
      <style jsx="true">{cssCategory}</style>
    </>
  );
};

export default Category;
