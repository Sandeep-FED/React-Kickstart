// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Created with react"
// );
// console.log(heading);

// // This comes from the second file
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // rendering the heading
// root.render(heading);

// Create the following type of parent-child in react
{
  /* <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>; */
}

// createElement takes three arguments
// 1st argument is basically the element that you want to create
// 2nd is the object to hold attributes
// 3rd is the children / the content you want to see.

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Welcome to the component!"),
//     React.createElement("h1", {}, "H2 tag!"),
//   ])
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// Create the following structure:
{
  /* <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
  <div id="child">
    <div id="child"></div>
  </div>
</div>; */
}

const nestedParent = React.createElement("div", { id: "mainParent" }, [
  React.createElement(
    "div",
    { id: "mainParent1stChild" },
    React.createElement("h1", { id: "childElement" }, "Child of 1st div")
  ),
  React.createElement(
    "div",
    { id: "mainParent2ndChild" },
    React.createElement("div", { id: "mainParent2ndChild" }, "")
  ),
]);

const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(nestedParent);
