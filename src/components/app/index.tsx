import * as React from 'react';
import { AppService } from "./services/app.service";

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {}
    
    render() {
        return this.props.children;
    }
}