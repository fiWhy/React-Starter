import * as React from 'react';
import { Link } from "react-router-dom";

import <%= componentName %>Presentation from "./presentations/<%= componentNameLower %>.presentation";

export default class <%= componentName %> extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }
    
    render() {
        return <<%= componentName %>Presentation/>;
    }
}