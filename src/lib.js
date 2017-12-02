import React from 'react';
import text from './titles.json';
import './stylesheets/goodbye.scss';
import './stylesheets/hello.css';

export const hello = (
    <h1 id="hello"
        className="header">
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id="goodbye"
        className="footer">
        {text.goodbye}
    </h1>
)