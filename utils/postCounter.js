import postList from "../posts/postList";

const postCounter = category => {
  let posts;
  if (category) {
    posts = postList.filter(
      post => post.category.filter(item => item === category).length > 0
    );
  }
  return posts.length;
};

export default postCounter;
