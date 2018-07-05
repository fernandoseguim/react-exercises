import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Seguim'>
        <Member firstName='Fernando' />
        <Member firstName='Sergio' />
        <Member firstName='Gabriela' />
    </Family>
, document.getElementById('app'))
