const postList = require("../posts/postList");
const pagination = require("../utils/pagination");

// pagination = { postsPerPage, getPagination }

const exportPathMap = {
  "/": { page: "/" },
  "/tag": { page: "/tag" },
  "/post": { page: "/post" },
  "/about": { page: "/about" }
};

const getUniqueTags = () => {
  const tags = postList.reduce((acc, cur) => {
    return [...new Set([...acc, ...cur.tag])];
  }, []);
  return tags;
};

const getAllFilenames = () => {
  let filenames = [];
  postList.map(post => filenames.push(post.filename));
  return filenames;
};

const assertFilenamesAsPath = () => {
  return new Promise((resolve, reject) => {
    const filenames = getAllFilenames();
    const result = filenames.map(
      filename =>
        (exportPathMap[`/post/${filename}`] = {
          page: "/post",
          query: { filename: `${filename}` }
        })
    );
    resolve(result);
  });
};

const assertTagsAsPath = () => {
  return new Promise((resolve, reject) => {
    const tags = getUniqueTags();
    const result = tags.map(
      tag =>
        (exportPathMap[`/tag/${tag}`] = {
          page: "/tag",
          query: { tag: `${tag}` }
        })
    );
    resolve(result);
  });
};

const generateExportPath = async () => {
  await assertFilenamesAsPath();
  await assertTagsAsPath();
  return exportPathMap;
};

module.exports = generateExportPath;
