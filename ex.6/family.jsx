import React from 'react';
import Member from './member';

export default props => (
    <div>
        <h1>Members family</h1>
        { React.cloneElement(props.children, {...props}) }
    </div>
);