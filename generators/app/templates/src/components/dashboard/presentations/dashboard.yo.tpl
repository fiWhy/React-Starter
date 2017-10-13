import * as React from 'react';
import { Link } from "react-router-dom";
<% if(styledComponents) { %>import { Container } from "../styled/container";<% } %>

const DashboardPresentation = () => (
    <% if(styledComponents) { %><Container><% } %><% if(!styledComponents) { %><div><% } %>
        <h2>Dashboard</h2>
        <ul>
            <li><Link to="/home">Home</Link></li>
        </ul>
        <div>
            Welcome to dashboard!
        </div>
    <% if(styledComponents) { %></Container><% } %><% if(!styledComponents) { %></div><% } %>
);

export default DashboardPresentation;