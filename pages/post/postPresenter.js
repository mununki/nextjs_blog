const PostPresenter = props => {
  const MD = require(`../../posts/${props.post[0].filename}.md`);

  return (
    <div id="content">
      <div className="container">
        <div className="post-card">
          <MD.default />
        </div>
      </div>
    </div>
  );
};

export default PostPresenter;
