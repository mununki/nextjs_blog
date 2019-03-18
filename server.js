const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/post/:filename", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        filename: req.params.filename
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/tag/:tag", (req, res) => {
      const actualPage = "/tag";
      const queryParams = {
        tag: req.params.tag
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/blog", (req, res) => {
      app.render(req, res, "/blog");
    });

    server.get("/", (req, res) => {
      app.render(req, res, "/");
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
