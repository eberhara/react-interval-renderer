import React from 'react';
import PropTypes from 'prop-types';

class IntervalRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.handleTick = this.handleTick.bind(this);
    }

    componentDidMount() {
        const {
            interval,
        } = this.props;
        this.countdown = setInterval(this.handleTick, interval);
    }

    componentDidUpdate() {
        const {
            componentDidRerender,
        } = this.props;
        componentDidRerender();
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    handleTick() {
        const {
            shouldComponentRerender,
        } = this.props;

        if (shouldComponentRerender()) {
            this.forceUpdate();
        }
    }

    renderChildren(children) {
        return React.Children.map(
            children,
            child => React.cloneElement(child, {
                __renderTime: +new Date(),
            })
        );
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <div
                style={{
                    height: 'inherit',
                    width: 'inherit',
                }}
            >
                {this.renderChildren(children)}
            </div>
        );
    }
}

IntervalRenderer.propTypes = {
    children: PropTypes.node.isRequired,
    interval: PropTypes.number,
    shouldComponentRerender: PropTypes.func,
    componentDidRerender: PropTypes.func,
};

IntervalRenderer.defaultProps = {
    interval: 1000,
    shouldComponentRerender: () => true,
    componentDidRerender: f => f,
};

export default IntervalRenderer;
