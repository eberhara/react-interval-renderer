import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Basic from '../../examples/Basic';
import Complete from '../../examples/Complete';

storiesOf(' > IntervalRenderer', module)
    .add('Basic', () => <Basic />)
    .add('Complete', () => <Complete />);
