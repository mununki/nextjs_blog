import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeaderAbout from "../../components/HeaderAbout";
import AnyPoem from "./works/AnyPoem";
import Go from "./works/Go";
import JSlib from "./works/JSlib";
import Lodem from "./works/Lodem";
import RateLink from "./works/RateLink";
import RateLinkMobile from "./works/RateLinkMobile";
import Rust from "./works/Rust";

const workList = [
  { id: 1, name: "ratelink", alias: "RateLink" },
  { id: 2, name: "ratelinkmobile", alias: "RateLink mobile" },
  { id: 3, name: "lodem", alias: "Lodem" },
  { id: 4, name: "anypoem", alias: "Any-Poem" },
  { id: 5, name: "jslib", alias: "JS Library" },
  { id: 6, name: "rust", alias: "Rust" },
  { id: 7, name: "go", alias: "Go" }
];

const WorkIndexSM = (props: { name: string; setName: (v: string) => void }) => {
  const currentWork = workList.filter(w => w.name === props.name);
  const previousWork =
    currentWork[0].id - 1 < 1
      ? null
      : workList.filter(w => w.id === currentWork[0].id - 1);
  const nextWork =
    currentWork[0].id + 1 > 7
      ? null
      : workList.filter(w => w.id === currentWork[0].id + 1);
  return (
    <>
      <div className="container">
        {previousWork ? (
          <div
            className="index"
            onClick={() => props.setName(previousWork[0].name)}
          >
            {`←  Prev`}
          </div>
        ) : (
          <div className="index" />
        )}
        <div className="current">{currentWork[0].alias}</div>
        {nextWork ? (
          <div
            className="index"
            onClick={() => props.setName(nextWork[0].name)}
          >
            {`Next →`}
          </div>
        ) : (
          <div className="index" />
        )}
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
          }
          .current {
            flex: 1;
            text-align: center;
            padding: 0.5rem;
          }
          .index {
            flex: 1;
            text-align: center;
            cursor: pointer;
            color: var(--text-link-color);
            text-decoration: underline;
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

const useWorks = (value: string) => {
  const [name, setWork] = useState(value);

  const onClick = (v: string) => {
    setWork(v);
  };

  return { name, onClick };
};

export default () => {
  const works = useWorks("ratelink");

  return (
    <>
      <div id="about-container">
        <section className="about-greeting">
          <HeaderAbout />
          <div className="about-intro">
            <div className="title">Hi~👋 I'm a Full Stack developer</div>
            <div className="title">
              += an enthusiastic learner + open source contributor
            </div>
            <div className="subtitle">
              I design, build, deploy, launch from the concept to the
              completion.
            </div>
            <div className="subtitle">
              Reach me if you have any project or inquiries.
            </div>
          </div>
        </section>
        <section id="about-works">
          <div className="section-container">
            <div className="section-title">Recent Works</div>
            <div className="about-work-body">
              <div className="about-work-index">
                <div
                  onClick={() => works.onClick("ratelink")}
                  className={works.name === "ratelink" ? "selected" : undefined}
                >
                  RateLink
                </div>
                <div
                  onClick={() => works.onClick("ratelinkmobile")}
                  className={
                    works.name === "ratelinkmobile" ? "selected" : undefined
                  }
                >
                  RateLink Mobile
                </div>
                <div
                  onClick={() => works.onClick("lodem")}
                  className={works.name === "lodem" ? "selected" : undefined}
                >
                  Lodem
                </div>
                <div
                  onClick={() => works.onClick("anypoem")}
                  className={works.name === "anypoem" ? "selected" : undefined}
                >
                  Any-Poem 🚧
                </div>
                <div
                  onClick={() => works.onClick("jslib")}
                  className={works.name === "jslib" ? "selected" : undefined}
                >
                  JS Library
                </div>
                <div
                  onClick={() => works.onClick("rust")}
                  className={works.name === "rust" ? "selected" : undefined}
                >
                  Rust projects
                </div>
                <div
                  onClick={() => works.onClick("go")}
                  className={works.name === "go" ? "selected" : undefined}
                >
                  Go projects
                </div>
              </div>
              <div className="about-work-index-sm">
                <WorkIndexSM name={works.name} setName={works.onClick} />
              </div>
              <div className="about-work-content">
                {works.name === "ratelink" ? <RateLink /> : null}
                {works.name === "ratelinkmobile" ? <RateLinkMobile /> : null}
                {works.name === "lodem" ? <Lodem /> : null}
                {works.name === "anypoem" ? <AnyPoem /> : null}
                {works.name === "jslib" ? <JSlib /> : null}
                {works.name === "rust" ? <Rust /> : null}
                {works.name === "go" ? <Go /> : null}
              </div>
            </div>
          </div>
        </section>
        <section id="about-skillset">
          <div className="section-container">
            <div className="section-title">
              <div>Skill set</div>
            </div>
            <div id="about-skillset-body">
              <div className="webdev">
                <div className="about-skillset-title">Web development</div>
                <div className="about-skillset-subtitle">React</div>
                <div className="about-skillset-description">
                  I am fully confident to build frontend web app with React. I
                  deeply understand how React works with state, lifecycle, hooks
                  and context. I'm focusing to improve the performance and
                  better experience for users. Not only SPA, I am fully aware of
                  how important SEO is, I built a couple of SSR web app projects
                  with Next.js. Also, I'm very experienced with bundling assets
                  using webpack and transpiling modern Javascript code(ES6) with
                  babel.
                </div>
                <div className="about-skillset-subtitle">GraphQL</div>
                <div className="about-skillset-description">
                  I'm very experienced with GraphQL. I can build a backend as
                  GraphQL api with Node.js and Django, as well as a frontend to
                  communicate each other with GraphQL. I can implement to send
                  and receive a multipart data(eg. image file) with GraphQL.
                </div>
                <div className="about-skillset-subtitle">
                  Node.js and Django
                </div>
                <div className="about-skillset-description">
                  I fully understand how http requet/response works with
                  headers, cors, authorization, and json web authentication. I
                  am very experienced with Node.js and Django to build a backend
                  api or server. I know how to deploy it on AWS with docker or
                  serverless.
                </div>
                <div className="about-skillset-subtitle">Go</div>
                <div className="about-skillset-description">
                  I'm confident with building a backend application with Go. I'm
                  specially experienced with GraphQL backend with Go. And, I'm
                  enjoying to build helper tools for development by myself.
                </div>
                <div className="about-skillset-subtitle">DevOps</div>
                <div className="about-skillset-description">
                  I am well aware of AWS service architecture and how to compose
                  it for whatever it needs. I know what the pros and cons of
                  serverless architecture and how to use it. Also, I am used to
                  deploy my apps as containerized using Docker.
                </div>
              </div>
              <div className="webdev">
                <div className="about-skillset-title">
                  Mobile app development
                </div>
                <div className="about-skillset-subtitle">React Native</div>
                <div className="about-skillset-description">
                  I am very comfortable to build a mobile app with React Native
                  and Native modules if needed in case. I know how to build a
                  React Native app with Xcode and Android Studio with Native
                  modules. I really enjoying to improve the performance and give
                  a solid experience to users.
                </div>
              </div>
              <div className="systemlang">
                <div className="about-skillset-title">
                  Low level system language
                </div>
                <div className="about-skillset-subtitle">Rust</div>
                <div className="about-skillset-description">
                  I am an enthusiastic learner. I really enjoy to challenge new
                  languages and build a something new with it. I started
                  learning the Rust which is very powerful low level system
                  language. And I built a several projects with it. I'm very
                  enjoying to make an utilities to improve a process or
                  automation.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-hireme">
          <div className="section-container">
            <div className="section-title">Work with me</div>
            <div className="about-hireme-body">
              If you are looking for a developer with a communicative, punctual,
              professional mind-set, or if you have a project to work with
              someone else,
              <br /> get in touch with me.
            </div>
          </div>
          <Footer about={true} />
        </section>
      </div>
      <style jsx>
        {`
          #about-container {
            font-size: 1rem;
            line-height: 2rem;
            font-family: var(--text-san-serif);
          }
          .about-greeting {
            height: 100vh;
            min-height: 800px;
            display: flex;
            flex-direction: column;
          }
          .about-intro {
            width: 1200px;
            margin: auto;
          }
          .about-intro .title {
            font-size: 2.5rem;
            line-height: 4rem;
            padding: 0 2rem;
            word-break: break-word;
          }
          .about-intro .subtitle {
            font-size: 1.7rem;
            color: grey;
            line-height: 2.5rem;
            padding: 0 2rem;
            word-break: break-word;
            margin: 1rem 0;
          }
          #about-works {
            height: 100%;
            min-height: 100vh;
            margin-bottom: 3rem;
          }
          #about-skillset {
            height: 100%;
            min-height: 100vh;
            margin-bottom: 5rem;
          }
          #about-hireme {
            height: 100%;
          }
          .section-container {
            width: 1200px;
            margin: 0 auto;
          }
          .section-title {
            padding: 2rem;
            font-size: 1.5rem;
            color: grey;
          }
          .about-work-body {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          }
          .about-work-index {
            width: 20%;
            min-width: 200px;
            height: 100%;
          }
          .about-work-index div {
            padding: 0.5rem 2rem;
          }
          .about-work-index div:hover {
            cursor: pointer;
            color: var(--text-link-color);
          }
          .about-work-index-sm {
            display: none;
          }
          .selected {
            color: var(--text-link-color);
          }
          .about-work-content {
            height: 100%;
            padding: 1rem;
          }
          #about-skillset-body {
            padding: 0 2rem;
          }
          .about-skillset-title {
            font-size: 1.5rem;
            color: var(--text-link-color);
            margin: 2rem 0;
          }
          .about-skillset-subtitle {
            font-size: 1.3rem;
            margin: 1rem 0;
          }
          .about-skillset-description {
            color: grey;
            margin: 1rem 0;
          }
          .about-hireme-body {
            font-size: 2rem;
            padding: 0 2rem;
            line-height: 3rem;
            margin-bottom: 10rem;
          }
          @media screen and (max-width: 1200px) {
            .about-intro {
              width: 100%;
            }
            .about-intro .title {
              font-size: 2.5rem;
              line-height: 4rem;
            }
            .about-intro .subtitle {
              font-size: 1.5rem;
              line-height: 2.5rem;
            }
            .about-work-container {
              width: 100%;
            }
            .section-container {
              width: 100%;
            }
          }
          @media screen and (max-width: 576px) {
            .about-intro .title {
              font-size: 2rem;
              line-height: 3rem;
            }
            .about-intro .subtitle {
              font-size: 1.5rem;
              line-height: 2.5rem;
            }
            .about-work-container {
              width: 100%;
            }
            .about-work-body {
              flex-direction: column;
            }
            .section-container {
              width: 100%;
            }
            .about-work-index {
              display: none;
            }
            .about-work-index-sm {
              display: block;
            }
            #about-skillset-body {
              padding: 0 1rem;
            }
          }
        `}
      </style>
    </>
  );
};
