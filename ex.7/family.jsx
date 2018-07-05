import React from 'react';
import { childrenWithProps } from '../resources/reactUtils';

export default props => (
    <div>
        <h1>Members family</h1>
        
        { childrenWithProps(props) }
    </div>
);