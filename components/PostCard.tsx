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
    </div>
  );
};
