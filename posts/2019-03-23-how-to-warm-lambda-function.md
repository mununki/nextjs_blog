---
title: How to warm your lambda function properly
createdAt: 2019-03-23
filename: 2019-03-23-how-to-warm-lambda-function
category: ["backend"]
tag: ["aws", "lambda"]
thumb: 2019-03-23_thumb.jpg
slug: Keep your lambda warm always
---

# How to warm your lambda function properly

by moondaddi on 23 Mar 2019

---

It is fascinating to use a serverless framework like AWS lambda. It allows you to focus only codes and logic, not maintaining server or backend anymore. I deployed my service, `RateLink`([link](https://www.rate-link.com)), on AWS Lambda. It consists of the frontend web app and the backend GraphQL API. The Frontend web app is made of Next.js which is SSR framework with React. And the backend is a GraphQL node backend which is made of Express.js.

Right after I deployed it, I realized that it took almost 10 sec to see the web page. It happens to only very first-time access, after that everything seems fine. I found that it is so called `cold start` of lambda.

I googled it and found some remedies for the cold start. But, none of them works for my case. Because my Next.js app is quite big and needs to fetch a lot of data from the backend(which is also having a `cold start`) to render the whole page from the cold stage.

> Lambda goes to the cold stage after approx. 5 minutes idling.

Here's what I tried.

### 1. AWS Cloudwatch Event 👎

AWS Cloudwatch can invoke the lambda function in several ways. I try to make a periodical event to invoke my frontend and backend. But no gains. Because of how AWS Cloudwatch to invoke the lambda function. AWS Cloudwatch sends JSON data to the lambda function. But my frontend is a web app and my backend is a GraphQL API which respond to an HTTP request. JSON data is not enough to wake my frontend or backend app. JSON data will be carried with an event in lambda runtime. But none of my apps are responding to that event.

### 2. Route53 health check 😱

AWS Route53 has a feature to check the endpoint status, which is called a health check. You can turn it on to check the health of any endpoints. It pings the endpoint and checks the response status code. I found it works fine. It took about 2-3 sec to see the page rendered in first access. But the problem is the health check period is not adjustable. You can choose only 10 sec. or 30 sec. 10 sec means almost sending a ping per every sec, and 30 sec means ping per 2-3 sec. In calculating with it, it will send a ping almost 1.3M times per month (30pings/min \* 60min \* 24hrs \* 30days = 1,296,000 pings/mon)😱

### 3. Lambda Warmer 👍

I made another lambda function to wake other lambdas up and keep it warm in every 5 min. Here are my code and serverless.yml.

```js
// handler.js

const https = require("https");

const warming = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        console.log("warmed! :", res.statusCode);
        resolve(res);
      })
      .on("error", e => {
        console.log("got error :", e.message);
        reject(e);
      });
  });
};

module.exports.warmer = async (event, context, callback) => {
  try {
    await warming("https://www.rate-link.com/rates");
    context.succeed();
  } catch (e) {
    context.done();
  }
};
```

```yml
// serverless.yml

service: warmer

provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  region: ap-northeast-2
  profile: {your profile}
  memorySize: 128
  timeout: 15s

functions:
  warmer:
    handler: handler.warmer
    events:
    - schedule: rate(5 minutes)

```

Since node8.10 in lambda runtime, `async/await` is available. I've made a request function warming and it returns a Promise. Then handler.warmer can call the warming function and it makes await till both frontend and backend app are running and respond to the request.

## Conclusion

In the case of invoking a lambda function, you can use AWS Cloudwatch event for it. It means your lambda function takes an event in lambda runtime and run the function with it and return context or callback. But you have a web app on lambda function which doesn't depend on normal events, you need to send an HTTP request to your web app on lambda. It is not much help to send a JSON data to your apps to keep warm.
