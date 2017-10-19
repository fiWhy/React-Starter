var fs = require("fs");
var path = require("path");

var links = {
  Home: {
    href: "/",
    title: "Dashboard",
    content: "Home!"
  },
  Dashboard: {
    href: "/home",
    title: "Home",
    content: "Welcome to Dashboard!"
  }
};

module.exports.presentationTemplate = function(withStyledComponents, component) {
  return `import * as React from "react";
    import { Link } from "react-router-dom";
    ${withStyledComponents
      ? `import { Container } from "../../../styled/container";`
      : ``}

    const ${component}Presentation = () => (
        ${withStyledComponents ? `<Container>` : `<div>`}
            <h2>${component}</h2>
            <ul>
                <li><Link to="${links[component].href}">${links[component]
    .title}</Link></li>
            </ul>
            <div>
                ${links[component].content}
            </div>
        ${withStyledComponents ? `</Container>` : `</div>`}
    );
    
    export default ${component}Presentation;
    `;
};

module.exports.readCreatedFile = function(dir, pathToFile) {
  return fs.readFileSync(path.join(dir, pathToFile)).toString();
};

module.exports.removeSpaces = function(string) {
  return string.replace(/\s/g, "");
};
