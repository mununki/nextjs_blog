const cssPostList = `
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin-bottom: 0;
}
li {
  display: inline-block;
  padding: 0 10px;
}
.container {
  height: calc(100vh - 282px)
}
.post-list {
  background-color: #fff;
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
}
.post a .post-title:hover {
  font-size: 1.2rem;
  text-decoration: underline;
}
.post a .post-createdAt {
  width: 150px;
  color: #999;
  font-size: 0.8rem;
  vertical-align: baseline;
  text-align: right;
}
`;

export default cssPostList;
