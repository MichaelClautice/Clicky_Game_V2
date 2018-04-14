// React components are reusable code that return a React element to be rendered to the page.

// this js file uses JSX

// JSX: syntax extension to JS - similar to a template language, but it has full power of JS. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.

// the "react" pkg is how we access React: a js library for building user interfaces

import React from "react";
// import the css styles for this component-element
import "./Navbar.css";

// Navbar component
const Navbar = (props) => (

  <nav className="navbar fixed-top navbar-dark navbar-custom p-3">

    <span className="navbar-brand">Clicky Game</span>

    <span className="navbar-text text-white">{props.message}</span>

    <span className="navbar-text text-white">Score: {props.score}, Top Score: {props.topScore}</span>

  </nav>

);
// make this component available via export
export default Navbar;
// here is the directory created by "Create_React_App"
// my-app
// ├── README.md
// ├── node_modules
// ├── package.json
// ├── .gitignore
// ├── public
// │   └── favicon.ico
// │   └── index.html
// │   └── manifest.json
// └── src
//     └── App.css
//     └── App.js
//     └── App.test.js
//     └── index.css
//     └── index.js
//     └── logo.svg
//     └── registerServiceWorker.js