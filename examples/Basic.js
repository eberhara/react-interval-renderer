import React from 'react';
import IntervalRenderer from '../src';

const ChildComponent = () => (
    <div>
        {new Date().toLocaleString()}
    </div>
);

export default () => (
    <IntervalRenderer interval={100}>
        <ChildComponent />
    </IntervalRenderer>
);
