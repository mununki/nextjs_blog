import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FooterAvatar from "../../components/HeaderAvatar";
import { IPost } from "../../types";

interface IProps {
  post: IPost;
}

const PostPresenter = (props: IProps) => {
  const MD = require(`../../posts/${props.post.filename}.md`);

  return (
    <>
      <Header />
      <div id="content">
        <div className="container">
          <div className="post-content">
            <MD.default />
          </div>
        </div>
      </div>
      <FooterAvatar />
      <Footer />
    </>
  );
};

export default PostPresenter;
