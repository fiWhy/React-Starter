import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import <%= componentName %>Presentation from "./<%= componentNameLower %>.presentation";

describe("<%= componentName %> Component Presentation", () => {
    const component = create(<<%= componentName %>Presentation />)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})