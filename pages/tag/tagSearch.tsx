import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import React from "react";
import { Url, UrlObject } from "url";
import Footer from "../../components/Footer";
import HeaderAvatar from "../../components/HeaderAvatar";
import postList from "../../posts/postList";
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
    <>
      <HeaderAvatar />
      <div id="tag">
        <div className="container">
          <form onSubmit={() => handleRoute(`/tag/${useInput.value}`)}>
            <div className="input-container">
              <span id="tag-search-icon">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="tag-input"
                {...useInput}
                autoFocus
              />
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
        <style jsx>
          {`
            #tag {
              height: 100vh;
            }
            .input-container {
              margin-top: 3rem;
              position: relative;
            }

            #tag-search-icon {
              position: absolute;
              top: 1.1rem;
              margin-left: 1.5rem;
              font-size: 2rem;
              color: var(--text-link-color);
            }

            .tag-input {
              margin: 1rem 1rem;
              font-size: 2rem;
              width: 100%;
              border: none;
              font-family: var(--text-serif);
              border-bottom: 2px var(--text-link-color) solid;
              outline: none;
              padding-left: 50px;
              padding-bottom: 10px;
            }

            .tag-list-container {
              margin: 1rem;
            }

            .tag-title {
              font-size: 2rem;
              margin: 1rem 0;
            }

            .tag-item {
              display: inline-block;
              margin: 0.5rem;
              font-size: 1.2rem;
            }
          `}
        </style>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(TagSearch);
