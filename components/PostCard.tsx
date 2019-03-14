import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { IPost } from "../types";

interface IProps {
  post: IPost;
}

export default (props: IProps) => {
  const { post } = props;
  return (
    <div key={post.title} className="post-container">
      <div
        className="post-img-container"
        style={{
          backgroundImage: post.thumb
            ? `url(/static/images/post_img/${post.thumb})`
            : `url(/static/images/post_img/dummy_thumb.jpg)`
        }}
      />
      <div className="post-body">
        <div className="post-title">
          <Link href={`/post/${post.filename}`}>
            <a>{post.title}</a>
          </Link>
        </div>
        <div className="post-subtitle">{post.slug}</div>
        <div className="post-createdAt">
          {dayjs(post.createdAt).format("MMM D, YYYY")}
        </div>
      </div>
      <style jsx>
        {`
          .post-container {
            display: flex;
            margin: 1rem;
          }
          .post-img-container {
            min-width: 150px;
            height: 150px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          .post-body {
            display: inline-block;
            margin: 0 1rem;
          }
          .post-title {
            font-family: "Ubuntu", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 1rem 0 0.5rem 0;
          }
          .post-subtitle {
            color: grey;
          }
          .post-createdAt {
            margin: 1rem 0 0 0;
          }
          @media (max-width: 576px) {
            .post-container {
              display: block;
              margin: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};
