import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Seguim'>
        <Member firstName='Fernando' />
    </Family>
, document.getElementById('app'))
