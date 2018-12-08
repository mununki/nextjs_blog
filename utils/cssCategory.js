const cssCategory = `
#category,
#category__show {
  grid-area: category;
  background-color: #eee;
  padding: 15px 0;
}
.make-fixed-category {
  position: fixed;
  top: 87px;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "category-fixed content-fixed";
}
#container-category-fixed {
  grid-area: category-fixed;
}
#menu-close-button {
  display: none;
}
@media (max-width: 576px) {
  #category {
    display: none;
  }
  #category__show {
    grid-area: 2/1/3/2;
    z-index: 10;
    background-color: rgba(238, 238, 238, 0.97)
  }
  #menu-close-button {
    display: block;
    margin-right: 10px;
    padding: 10px;
    font-size: 2rem;
    color: #555;
    cursor: pointer;
    text-align: right;
  }
  .make-fixed-category {
    display: block;
  }
}
#category a,
#category__show a {
  display: flex;
  margin: 0;
  padding: 15px 30px;
  color: #555;
  text-decoration: none;
  justify-content: space-between;
}
#category a:hover,
#category__show a:hover {
  background-color: #ddd;
  transition: 0.5s
}

#category a#selected,
#category__show a#selected {
  color: #000;
  font-weight: bold;
}
`;

export default cssCategory;
