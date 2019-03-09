const images = require("remark-images");
const emoji = require("remark-emoji");
const highlight = require("remark-highlight.js");
const exportPathMap = require("./export.config");

const withMDX = require("next-mdx-frontmatter")({
  extension: /\.(md|mdx)?$/,
  MDXOptions: {
    mdPlugins: [images, emoji, highlight]
  }
});

module.exports = withMDX({
  exportPathMap: () => {
    return exportPathMap;
  }
});
