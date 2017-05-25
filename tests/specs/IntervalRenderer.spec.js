/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import IntervalRenderer from '../../src';

describe('<IntervalRenderer />', () => {
    it('should render with no props', () => {
        const wrapper = shallow(
            <IntervalRenderer>
                <div>
                    foo
                </div>
            </IntervalRenderer>
        );
        wrapper.instance().componentDidMount();
        wrapper.instance().componentDidUpdate({});
        expect(wrapper.text()).to.equal('foo');
    });
});
