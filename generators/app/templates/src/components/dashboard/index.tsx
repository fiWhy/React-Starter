import * as React from 'react';
import { Link } from "react-router-dom";

import DashboardPresentation from "./presentations/dashboard";

export default class Dashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }
    
    render() {
        return <DashboardPresentation/>;
    }
}