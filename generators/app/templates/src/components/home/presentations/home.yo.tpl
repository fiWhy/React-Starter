import * as React from "react";
import { Link } from "react-router-dom";
<% if(styledComponents) { %>import { Container } from "../../../styled/container";<% } %>

const HomePresentation = () => (
    <% if(styledComponents) { %><Container><% } %><% if(!styledComponents) { %><div><% } %>
        <h2>Home</h2>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
        </ul>
        <div>
            Home!
        </div>
    <% if(styledComponents) { %></Container><% } %><% if(!styledComponents) { %></div><% } %>
);

export default HomePresentation;