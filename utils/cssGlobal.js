const cssGlobal = `
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 300;
  line-height: 160%;
}
#layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "header header" "category content" "footer footer";
}
#footer {
  grid-area: footer;
  background-color: #eee;
}
#content {
  grid-area: content;
  display: grid;
  grid-template-columns: minmax(auto, 100px) 1fr minmax(auto, 100px);
  grid-template-areas: "left-span container right-span";
  padding: 50px 0px;
}
@media (max-width: 576px) {
  #layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "content" "footer";
  }
  #content {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "container";
    padding: 50px 0px;
  }
  img {
    width: 100%;
  }
}
.container {
  grid-area: container;
  padding: 20px 10px 20px 10px;
  min-width: 0;
}

.add-padding-for-fixed-header {
  padding: 90px 10px 20px 10px;
}
`;

export default cssGlobal;
