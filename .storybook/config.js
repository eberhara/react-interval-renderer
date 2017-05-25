import { configure } from '@kadira/storybook';

function loadStories() {
	/* eslint-disable global-require */
    require('./stories/IntervalRenderer.js');
    /* eslint-enable global-require */
}

configure(loadStories, module);
