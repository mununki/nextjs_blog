---
title: How to set state with data from apollo grapqhQL query
createdAt: 2018-09-08
filename: 2018-09-08-How-to-set-state-with-data-from-graphQL-query
category: ["react"]
keyword: ["react", "apollo", "graphQL"]
---

# How to set state with data from apollo grapqhQL query

by Moondaddi on 2018-09-08

---

## Prefill the form with query data

- prefill values into form or render data into DOM after query
- modify data after query

<br />

## Solution 1

### in componentDidMount()

```javascript
import React from "react";
import { Query } from "react-apollo";

class Example extends React.Component {
  state = {
    some: null
  };

  componentDidMount() {
    this._queryMe
      .query({
        query: other - query,
        variables: { some: thing }
      })
      .then(response => {
        this.setState({
          some: data.me.nickname
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Query query={some - query}>
        {({ client }) => {
          this._queryMe = client;

          return null;
        }}
      </Query>
    );
  }
}
```

### props function : onCompleted

```javascript
import React from 'react'
import { Query } from 'react-apollo'

class Example extends React.Component {
  state = {
    some: null
  }

  _queryMe = data => {
    this.setState({
      some: data
    })
  }

  render() {
    return (
      <Query
        query={some-query}
        onCompleted={data => this.\_queryMe(data)}
      >
        {() => {
          return null;
        }}
      </Query>
    )
  }
}
```

<br />

## Solution 2 (The BEST 👍)

Using HOC withApollo

```javascript
class Example extends React.Component {
  state = {
    some: null
  };

  componentDidMount() {
    this.props.client
      .query({
        query: some_query,
        variables: {
          id: 1
        }
      })
      .then(res =>
        this.setState({
          some: res
        })
      );
  }

  render() {
    return <div>...</div>;
  }
}

// using HOC
export default withApollo(Example);
```
