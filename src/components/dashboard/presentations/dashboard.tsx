import * as React from 'react';
import { Link } from "react-router-dom";
import { Container } from "../styled/container";

const DashboardPresentation = () => (
     <Container>
        <h2>Dashboard</h2>
        <ul>
            <li><Link to="/home">Home</Link></li>
        </ul>
        <div>
            Welcome to dashboard!
        </div>
    </Container>
);

export default DashboardPresentation;