---
title: Nested Comment Reply stucture with ReactJS
createdAt: 2018-08-31
filename: 2018-08-31-Nested-Comment-Reply-sturcture-with-ReactJS
category: ["react"]
tag: ["react", "comment"]
---

# Nested Comment Reply stucture with ReactJS

by Moondaddi on 2018-08-31

---

## Nested Comment Reply structure?

![Nested Comment Structure](/static/images/post_img/2018-08-31_nested-structure.jpg)

<br />

## How-to with ReactJS

It can be resolve with loop structures with `<Comment />` and `<Comments>`

```javascript
const Comments = ({ items, postId, commentId, level, history }) => {
  if (items) {
    return items.map(item => {
      if (!item.parentComment || level !== 0) {
        return (
          <Comment
            item={item}
            postId={postId}
            parentCommentId={commentId}
            key={item.id}
            level={level}
            history={history}
          />
        );
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
};

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.item.recomment.length > 0 ? (
          <Comments
            items={data.qnaboardcomment}
            postId={this.props.postId}
            level={this.props.level + 1}
            history={this.props.history}
            commentId={this.props.item.id}
          />
        ) : null}
      </>
    );
  }
}
```
