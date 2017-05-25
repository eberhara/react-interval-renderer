import React from 'react';
import IntervalRenderer from '../src';

const ChildComponent = () => (
    <div>
        {new Date().toLocaleString()}
    </div>
);


export default class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.handleShouldRerenderChild = this.handleShouldRerenderChild.bind(this);
        this.handleChildDidRerender = this.handleChildDidRerender.bind(this);
    }

    handleShouldRerenderChild() {
        console.log('Called shouldComponentRerender');
        return true;
    }

    handleChildDidRerender() {
        console.log('Called componentDidRerender');
    }

    render() {
        return (
            <IntervalRenderer
                interval={500}
                shouldComponentRerender={this.handleShouldRerenderChild}
                componentDidRerender={this.handleChildDidRerender}
            >
                <ChildComponent />
            </IntervalRenderer>
        );
    }
}
