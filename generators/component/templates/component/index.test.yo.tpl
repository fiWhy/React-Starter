import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import <%= componentName %> from "./";

describe("<%= componentName %> Component", () => {
    const component = create(<<%= componentName %> />)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})