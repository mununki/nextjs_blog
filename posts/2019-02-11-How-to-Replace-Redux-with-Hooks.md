---
title: How to replace the React Redux with Hooks
createdAt: 2019-02-11
filename: 2019-02-11-How-to-Replace-Redux-with-Hooks
category: ["react"]
tag: ["hooks", "redux"]
thumb: 2019-02-11_thumb.png
slug: React release the game-changer departing from Class programming way.
---

# How to replace the Redux with React Hooks

by moondaddi on 2019-02-11

---

## React Hooks release

The React team released the React Hooks on version 16.8.0. (https://reactjs.org/docs/hooks-intro.html)

The Hooks are the new feature which can lead you not to use `class` anymore in your React app. There are, mainly, three basic hooks, `useState`, `useEffect` and `useContext`. Literally, `useState` is the state hook which allows you to use state in functional component. And `useEffect` is the effect hook which is working like lifecycle API, such as `componentDidMount()`, `componentWillUnmount()` and `componentDidUpdate()`. Lastly, `useContext` is the hook of `Context` created by `React.createContext()`.

Additionally, there are more hooks `useReducer`, `useCallback`, `useMemo`, `useRef`, etc.

## [React Redux](https://react-redux.js.org/introduction/quick-start)

The React Redux is the tool which let you manage the global state in centralized store and use the global state in any component inside the app. It enables you(especially, team size) to control the global state in encapsulated way.

## React Hooks instead of React Redux

It is possible to replace the React Redux with React Hooks successfully without losing any good purpose of using React Redux with less code and more maintainability.

### Create the store (initValue + reducer)

```javascript
// HooduxStore.js

const initValue = {
  isLogin: false,
  token: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLogin":
      return { isLogin: action.payload };
    case "setToken":
      return { token: action.payload };
    default:
      throw new Error("wrong action.type");
  }
};
```

### Wrap the top level component(eg. App.js) with Context

```javascript
// App.js

const MyContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initValue);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Header />
      <LogIn />
    </MyContext.Provider>
  );
};
```

> You can use the context wrapper component in higher order if you like.

### Pull and use `state` and `dispatch`

```javascript
// Login.js

const { state, dispatch } = useContext(MyContext);

const handleLogin = () => {
  dispatch({ type: "setLogin", payload: true });
};

return <div>{state.isLogin ? "You are logged in" : "Not logged in"}</div>;
```

## Conclusion

`useReducer` make a lot easier to pull and use the `state` and `dispatch` instead of using `connect()` in React Redux. If you're familiar with it, you know how it works. In React Redux,every single component, you want to use `state` or `dispatch`, needs to be connected. But with `useReducer`, you need to call it just once in component if you want it to be.
