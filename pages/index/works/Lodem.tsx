import React from "react";

export default () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="img-box">
            <div
              style={{
                width: "100%",
                height: "0px",
                position: "relative",
                paddingBottom: "63.750%"
              }}
            >
              <iframe
                src="https://streamable.com/s/32a7a/bpiaja"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden"
                }}
              />
            </div>
          </div>
          <div className="sub-title">description</div>
          <div className="sub-body">
            Lodem is a E-commerce web page. This page shows many kind of music
            instuments with a beautiful layout and images. Customers can look
            around the images, descriptions of instruments. Also, Customers can
            put it in the cart and check the orders.
          </div>
          <div className="sub-body">
            The admin page features managing the instruments on sale, checking
            the orders from customers, presenting the data of visualization. The
            admin page is designed to show the entire picture of marketing and
            inventory.
          </div>
          <div className="sub-title">Github</div>
          <div className="sub-body">
            <ul>
              <li>Frontend : React | GraphQL</li>
              <li>Backend : Django | Postgres | AWS Elastic Beanstalk</li>
            </ul>
          </div>
          <div className="sub-title">Stack</div>
          <div className="stack">
            <img
              src="/static/images/works/stack_img/react.png"
              alt="react"
              width="50px"
            />
            <img
              src="/static/images/works/stack_img/django.png"
              alt="django"
              width="50px"
            />
            <img
              src="/static/images/works/stack_img/graphql.png"
              alt="graphql"
              width="50px"
            />
            <img
              src="/static/images/works/stack_img/graphene.png"
              alt="graphene"
              width="50px"
            />
            <img
              src="/static/images/works/stack_img/postgres.png"
              alt="postgres"
              width="50px"
            />
            <img
              src="/static/images/works/stack_img/aws.jpg"
              alt="aws"
              width="50px"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        .img-box {
          padding: 1rem;
        }
        .sub-title {
          font-size: 1.2rem;
          color: grey;
          margin: 1rem 0;
        }
        .stack {
          display: flex;
          flex-direction: columns;
          flex-wrap: wrap;
        }
        .stack img {
          width: 50px;
          height: 50px;
          margin: 0.3rem;
        }
      `}</style>
    </>
  );
};
