module.exports.presentationTemplate = function(withStyledComponents, component) {
	return `import * as React from "react";
    import { Link } from "react-router-dom";
    
    const ${component}Presentation = () => (
          <div>
            <h2>${component}</h2>
            <div>
              ${component} works!
            </div>
          </div>
    );
    
    export default ${component}Presentation;
    `;
};
