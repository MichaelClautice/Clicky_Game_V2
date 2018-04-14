// React components are reusable code that return a React element to be rendered to the page.

// this js file uses JSX

// JSX: syntax extension to JS - similar to a template language, but it has full power of JS. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.

// the "react" pkg is how we access React: a js library for building user interfaces
// var React = require("react");
import React from "react";
// import the css styles for this component-element
import "./CharacterCard.css";

// Character card component
const CharacterCard = (props) => (
  <div
    onClick={() => props.clickCard(props)}
    className="card col-sm-2 p-2 m-4">
    <img
        className="card-img-top"
        src={props.image} alt={props.name}
    />
  </div>
);

// const CharacterCard = (props) => {
//     return (
//       <div onClick =
//         {() => props.clickCard(props)} className="card col-sm-2 p-2 m-4">

//         <img className="card-img-top" src={props.image} alt={props.name} />
//       </div>
//     );
// }

// function CharacterCard(props) {

//   return (
//         <div onClick =
//             {() => props.clickCard(props)} className="card col-sm-2 p-2 m-4">

//             <img className="card-img-top" src={props.image} alt={props.name} />
//         </div>
//     )

// };

// make this component available via export
export default CharacterCard;

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





