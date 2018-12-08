const cssPostList = `
.container {
  height: calc(100vh - 282px)
}
.post{
  padding: 10px;
}
.post a {
  display: flex;
  color: black;
  justify-content: space-between;
  text-decoration: none;
}
.post a .post-title {
  font-size: 1.2rem;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}
.post a .post-createdAt {
  width: 150px;
  color: #999;
  font-size: 0.8rem;
  vertical-align: baseline;
  text-align: right;
}
#latest {
  color: #2c3e50;
}
#pinned {
  color: #e74c3c;
}
`;

export default cssPostList;
