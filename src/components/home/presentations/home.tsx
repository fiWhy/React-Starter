import * as React from 'react';
import { Link } from "react-router-dom";

const HomePresentation = () => (
     <div>
        <h2>Home</h2>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
        </ul>
        <div>
            Home!
        </div>
    </div>
);

export default HomePresentation;