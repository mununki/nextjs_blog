const postList = require("../posts/postList");
const pagination = require("../utils/pagination");

// pagination = { postsPerPage, getPagination }

const exportPathMap = {
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/search": { page: "/search" }
};

const getUniqueCategory = () => {
  let categories = [
    "react",
    "django",
    "javascript",
    "python",
    "htmlcss",
    "devlogs"
  ];
  return categories;
};

const getAllFilenamesWithCategory = () => {
  let filenames = [];
  postList.map(post =>
    filenames.push({ filename: post.filename, category: post.category[0] })
  );
  return filenames;
};

const assertCategoryPath = () => {
  const uniqueCategories = getUniqueCategory();
  uniqueCategories.map(
    category =>
      (exportPathMap[`/post/${category}`] = {
        page: "/post",
        query: { category: `${category}` }
      })
  );
};

const assertFilenamesPath = () => {
  const filenames = getAllFilenamesWithCategory(); // [ { category: 'react', filename: '2018-01-01-post' }, ... ]
  getUniqueCategory().map(category => {
    posts = postList.filter(
      post => post.category.filter(item => item === category).length > 0
    );
    const paginatedPosts = pagination.getPagination(posts);
    Object.keys(paginatedPosts).map(pageNo => {
      exportPathMap[`/post/${category}/${pageNo}`] = {
        page: "/post",
        query: {
          category: `${category}`,
          page: `${pageNo}`
        }
      };
      paginatedPosts[pageNo].map(post => {
        exportPathMap[`/post/${post.category}/${pageNo}/${post.filename}`] = {
          page: "/post",
          query: {
            category: `${post.category}`,
            page: `${pageNo}`,
            filename: `${post.filename}`
          }
        };
      });
    });
  });
};

const generateExportPath = () => {
  assertCategoryPath();
  assertFilenamesPath();
  return exportPathMap;
};

module.exports = generateExportPath;
