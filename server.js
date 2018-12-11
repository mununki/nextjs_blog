const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/search/:keyword", (req, res) => {
      const actualPage = "/search";
      const queryParams = {
        keyword: req.params.keyword
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/post/:category/:filename", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        category: req.params.category,
        filename: req.params.filename
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/post/:category", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        category: req.params.category
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
