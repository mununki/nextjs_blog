const moment = require("moment");

const postsPerPage = 2;

const getPagination = posts => {
  posts.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
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
// paginagedPosts = {
//   '1':
//     [
//       {
//         title: 'Markdown summary',
//         createdAt: '2018-08-24',
//         filename: '2018-08-24-Markdown-summary',
//         category: [ 'devlogs' ],
//         keyword: [ 'markdown', 'summary' ],
//         md: Promise
//       },
//       {
//         title: 'First post',
//         createdAt: '2018-08-24',
//         filename: '2018-08-24-First-post',
//         category: [ 'devlogs' ],
//         keyword: [ 'first', 'post' ],
//         md: Promise
//       }
//     ],
//   '2':
//     [
//       {
//         title: 'How to connect to wireless WPA2 with Netplan',
//         createdAt: '2018-12-10',
//         filename: '2018-12-10-Netplan-how-to-connect-wpa2-linux',
//         category: [ 'devlogs' ],
//         keyword: [ 'netplan', 'linux', 'wireless' ],
//         md: Promise
//       },
//       {
//         title: 'How to highlight code in jekyll post',
//         createdAt: '2018-09-01',
//         filename: '2018-09-01-How-to-highlight-code-in-jekyll',
//         category: [ 'devlogs' ],
//         keyword: [ 'jekyll', 'blog' ],
//         md: Promise
//       }
//     ]
// }

module.exports = { postsPerPage, getPagination };
