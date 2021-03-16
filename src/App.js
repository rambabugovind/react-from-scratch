import React from 'react';
import { hot } from 'react-hot-loader/root';

const _App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export const App = hot(_App);