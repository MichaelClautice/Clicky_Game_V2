// React components are reusable code that return a React element to be rendered to the page.

// this js file uses JSX

// JSX: syntax extension to JS - similar to a template language, but it has full power of JS. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.

// the "react" pkg is how we access React: a js library for building user interfaces
import React from "react";
// import the css styles for this component-element
import "./Footer.css";

// Footer component element
const Footer = (props) =>
(
    <div class="footer-copyright py-3 text-center text-white">
Copywrite 2018 &copy; Michael Clautice
    </div>
);
// make this component available via export
export default Footer;

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