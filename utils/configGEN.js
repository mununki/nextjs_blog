const postList = require("../posts/postList");

const exportPathMap = {
  "/": { page: "/" },
  "/about": { page: "/about" }
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
  const filenames = getAllFilenamesWithCategory();
  filenames.map(
    post =>
      (exportPathMap[`/post/${post.category}/${post.filename}`] = {
        page: "/post",
        query: { category: `${post.category}`, filename: `${post.filename}` }
      })
  );
};

const generateExportPath = () => {
  assertCategoryPath();
  assertFilenamesPath();
  return exportPathMap;
};

module.exports = generateExportPath;
