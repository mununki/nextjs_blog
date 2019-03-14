import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import React from "react";
import { Url, UrlObject } from "url";
import postList from "../../posts/postList";
import "../../style/tag.scss";
import { useHandleInput } from "../../utils/useHandleInput";

const TagSearch = (props: WithRouterProps<{}>) => {
  const useInput = useHandleInput("");
  const handleRoute = (route: string | UrlObject | Url) => {
    if (props.router) {
      props.router.push(route);
    }
  };
  const getUniqueTags = () => {
    const tags = postList.reduce((acc: string[], cur) => {
      return [...new Set([...acc, ...cur.tag])];
    }, []);
    return tags;
  };

  return (
    <div id="tag">
      <div className="container">
        <form onSubmit={() => handleRoute(`/tag/${useInput.value}`)}>
          <div className="input-container">
            <span id="tag-search-icon">
              <i className="fas fa-search" />
            </span>
            <input type="text" className="tag-input" {...useInput} autoFocus />
          </div>
        </form>
        <div className="tag-list-container">
          <div className="tag-title">🗄</div>
          {getUniqueTags().map(tag =>
            !useInput.value || tag.includes(useInput.value) ? (
              <div key={tag} className="tag-item">
                <Link href={`/tag/${tag}`}>
                  <a>{tag}</a>
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(TagSearch);
