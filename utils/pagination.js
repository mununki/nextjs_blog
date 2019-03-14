const dayjs = require("dayjs");

const postsPerPage = 10;

const getPagination = posts => {
  posts.sort((a, b) => dayjs(b.createdAt) - dayjs(a.createdAt));
  const paginatedPostsArray = Array.from(
    { length: Math.ceil(posts.length / postsPerPage) },
    (v, i) => posts.slice(i * postsPerPage, i * postsPerPage + postsPerPage)
  ); // [[ post_4, post_3 ], [ post_2, post_1 ]]
  const paginatedPosts = paginatedPostsArray
    .reverse()
    .reduce((acc, curVal, i) => {
      acc[i + 1] = curVal;
      return acc;
    }, {}); // { 2: [ post_4, post_3 ], 1: [ post_2, post_1 ] }
  return paginatedPosts;
};

module.exports = { postsPerPage, getPagination };
