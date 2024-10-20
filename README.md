# React.js Guide

This repository contains comprehensive notes on React.js, including key concepts, examples, and project references.

## Table of Contents
- [Introduction](#introduction)
- [Create React App](#create-react-app)
- [Components](#components)
- [Fragments](#fragments)
- [JSX](#jsx)
- [Props](#props)
- [State](#state)
- [Event Binding](#event-binding)
- [Methods as Props](#methods-as-props)
- [Conditional Rendering](#conditional-rendering)
- [List Rendering](#list-rendering)
- [Styling](#styling)
- [Form Handling](#form-handling)
- [Lifecycle Methods](#lifecycle-methods)
- [Components vs Pure Components](#components-vs-pure-components)
- [Refs](#refs)
- [Portals](#portals)
- [Error Boundary](#error-boundary)
- [Higher-Order Components (HOC)](#higher-order-components-hoc)
- [Render Props](#render-props)
- [Context](#context)
- [HTTP Requests](#http-requests)
- [Hooks](#hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useContext](#usecontext)
  - [useReducer](#usereducer)
  - [useCallback vs useMemo](#usecallback-vs-usememo)
  - [useRef](#useref)
  - [Custom Hooks](#custom-hooks)
- [TypeScript with React](#typescript-with-react)
- [React Router](#react-router)
  - [Setting Up React Router](#setting-up-react-router)
  - [Defining Routes](#defining-routes)
  - [Navigation with Links](#navigation-with-links)
  - [Programmatic Navigation](#programmatic-navigation)
  - [Nested Routes and Outlet](#nested-routes-and-outlet)
  - [Lazy Loading](#lazy-loading)
- [React-Redux and Redux Toolkit](#react-redux-and-redux-toolkit)
  - [Why Redux Toolkit?](#why-redux-toolkit)
  - [Basic Setup](#basic-setup)

---

## Introduction
React is an **open-source JavaScript library** for building user interfaces. It follows a **component-based architecture** and uses a **declarative approach** for UI rendering. 

- **JSX**: A syntax extension for writing JavaScript and HTML together.
- **Example**: Facebook uses React.

## Create React App
To set up a new React project:
```bash
npx create-react-app <project-name>
cd <project-name>
npm start
```

## Components
### 1. **Stateless Functional Components**
- Functions that receive **props** and return JSX.
- Example: `Greet.js`

### 2. **Stateful Class Components**
- ES6 classes with state and props.
- Example: `Welcome.js`

## Fragments
Used to group multiple elements without adding extra nodes to the DOM.
```jsx
<>
  <h1>Hi</h1>
  <h2>Hello</h2>
</>
```
> **Note**: Keys cannot be added to shorthand fragments.

## JSX
JavaScript XML (JSX) is a syntax extension that allows embedding HTML within JavaScript.

## Props
- Props are **immutable** and passed from parent to child.
- Access props using `this.props` in class components.

### Destructuring Props
```jsx
const Greet = ({ name, heroName }) => <h1>Hello {name}</h1>;
```

## State
- Managed locally within a component.
- Use `this.setState` to update state in class components.
- In functional components, use the `useState` hook.

## Event Binding
To avoid `this` context issues, use these binding techniques:
1. **In Constructor** (Recommended)
2. **Arrow Functions** in Class Property
3. **Arrow Functions** in Render (use cautiously)

## Methods as Props
A child component can invoke a parent component’s method via props.

## Conditional Rendering
Different ways to conditionally render content:
1. **If/Else Statements**
2. **Ternary Operator**
3. **Logical AND (`&&`) Operator**

## List Rendering
Use the `map` function for rendering lists. Ensure **unique keys** for each element:
```jsx
names.map((name, index) => <h1 key={index}>{name}</h1>);
```

## Styling
1. **Stylesheets**: `import './styles.css'`
2. **Inline Styling**:
   ```jsx
   const heading = { fontSize: '26px', color: 'green' };
   <h1 style={heading}>Hi</h1>;
   ```
3. **CSS Modules**: `import styles from './styles.module.css'`

## Form Handling
Manage input fields using controlled components. See the `FormHandling` project for reference.

## Lifecycle Methods
### Mounting
- `constructor()`
- `getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### Updating
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

### Unmounting
- `componentWillUnmount()`

### Error Handling
- `getDerivedStateFromError()`
- `componentDidCatch()`

## Components vs Pure Components
- **Pure Components**: Avoid unnecessary re-renders by implementing shallow comparisons.
- Use `React.memo` for functional components.

## Refs
Used to access DOM nodes or child components. To forward refs in functional components:
```jsx
const ForwardComp = React.forwardRef((props, ref) => <div ref={ref} />);
```

## Portals
Render components outside the parent DOM hierarchy using Portals.
```jsx
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
```

## Error Boundary
Handles JavaScript errors gracefully by rendering a fallback UI. Implement in class components.

## Higher-Order Components (HOC)
HOCs enhance components by wrapping them:
```jsx
const EnhancedComponent = withCounter(WrappedComponent);
```

## Render Props
Use a function as a prop to share behavior between components.

## Context
Context API provides a way to pass data through the component tree without prop drilling:
1. **Create Context**: `const UserContext = React.createContext();`
2. **Provider**: `<UserContext.Provider value="John">`
3. **Consumer**: `<UserContext.Consumer>{value => <h1>{value}</h1>}</UserContext.Consumer>`

## HTTP Requests
Use **Axios** or the **Fetch API** for HTTP requests:
```bash
npm install axios
```
```javascript
import axios from 'axios';

axios.get('/api')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

---


## Hooks
React Hooks were introduced in **React 16.8** to use state and other React features without writing class components.

### Rules of Hooks
1. Only call hooks at the **top level**.
2. Only call hooks from **React functions**—not inside loops, conditions, or nested functions.

---

### Drawbacks of Class Components
1. Requires understanding of `this` and binding event handlers.
2. No easy way to **reuse stateful logic** across components.
3. Data fetching and event subscriptions are **scattered** across lifecycle methods.
4. Harder to **break components** into smaller parts.

---

### Key Hooks

#### `useState`
- Manages local state.
- For complex objects and arrays, see the `44_hooks` project: 
  - **Objects**: `Objects.jsx`
  - **Arrays**: `Arrays.jsx`

#### `useEffect`
Used to perform **side effects** like:
- Fetching data from an API.
- Subscribing to events like WebSockets.
- Manipulating the DOM.

- **Example**: Conditional `useEffect`: `useEffect.jsx`
- **Run once**: `MouseMove.jsx`
- **Cleanup on unmount**: `CleanUp.jsx`

#### `useContext`
- Simplifies **context API usage**.
1. Create a context:  
   ```js
   const UserContext = React.createContext();
   ```
2. Provide context value:  
   ```jsx
   <UserContext.Provider value="some value">...</UserContext.Provider>
   ```
3. Retrieve value using `useContext`:  
   ```js
   const value = useContext(UserContext);
   ```
- See the **`60_use_context`** project for more details.

#### `useReducer`
- Alternative to `useState` for complex state logic.
- Syntax:  
  ```js
  useReducer(reducer, initialState);
  ```
  - **Reducer**: `(currentState, action) => newState`
- See:  
  - `61_use_reducer` project  
  - **`When_to_use_useState_useReducer`** image for comparisons.

#### `useCallback` vs. `useMemo`
- **`useCallback`**: Memoizes a **function** to avoid re-creation.  
  ```js
  const func = useCallback(() => setState(count + 1), [count]);
  ```
- **`useMemo`**: Memoizes the **result of a computation** to avoid unnecessary recalculations.  
  ```js
  const value = useMemo(() => expensiveComputation(count), [count]);
  ```

#### `useRef`
- Stores **mutable values** across renders without triggering re-renders.  
- Common use: Accessing or modifying DOM elements.

#### Custom Hooks
- Encapsulate reusable logic.  
- **Naming convention**: Start with `use` (e.g., `useCustomHook`).

---

## TypeScript with React
To create a TypeScript React project:
```bash
npx create-react-app project_name --template typescript
```

### Props with TypeScript
```ts
type GreetProps = {
  name: string;
  status?: 'loading' | 'successful' | 'error';
};

const Greet: React.FC<GreetProps> = ({ name }) => <div>Hello, {name}!</div>;
```

- Extract component props with `React.ComponentProps`:
  ```ts
  type GreetProps = React.ComponentProps<typeof Greet>;
  ```

---

## React Router
Install React Router:
```bash
npm install react-router-dom
```

### Usage
Wrap the app with `BrowserRouter`:
```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

#### Defining Routes
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NoPage />} />
</Routes>
```

#### Navigation with Links
```jsx
<nav>
  <Link to="/">Home</Link> &nbsp; <Link to="/about">About</Link>
</nav>
```

#### Programmatic Navigation
```js
const navigate = useNavigate();
navigate('/about');
navigate(-1); // Go back
```

#### Nested Routes
```jsx
<Route path="/products" element={<Products />}>
  <Route path="featured" element={<Featured />} />
  <Route path="new" element={<New />} />
</Route>
<Outlet />
```

#### Lazy Loading
```js
const LazyComponent = lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

---

## React-Redux and Redux Toolkit
Install Redux Toolkit:
```bash
npm install @reduxjs/toolkit react-redux
```

### Why Redux Toolkit?
- Reduces **boilerplate code**.
- Provides utilities for **slices, reducers**, and **middleware**.

### Basic Setup
```js
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // your reducers here
  },
});
```

---


## Projects for Reference
- **Form Handling**: Manage input states and events.
- **Portals**: Render elements outside the parent DOM hierarchy.
- **Refs Demo**: Understand the usage of refs.
- **Error Boundary**: Handle component errors gracefully.
- **Higher-Order Components**: Reuse logic across components.
- **HTTP Project**: Manage data fetching with Axios.

---

## Author
Chaitanya

This guide serves as a quick reference for React concepts and includes project-based examples for deeper understanding.
```

You can adjust any section or project reference according to your needs. This `README.md` provides a structured and professional overview of your notes.
