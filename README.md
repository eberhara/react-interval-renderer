# react-interval-renderer

[![build status](https://travis-ci.org/eberhara/react-interval-renderer.svg?branch=master)](https://travis-ci.org/eberhara/react-interval-renderer)
[![Coverage Status](https://coveralls.io/repos/github/eberhara/react-interval-renderer/badge.svg?branch=master)](https://coveralls.io/github/eberhara/react-interval-renderer?branch=master)
[![NPM version](http://img.shields.io/npm/v/react-interval-renderer.svg)](https://www.npmjs.org/package/react-interval-renderer)

**React component that renders its children every x milliseconds**

This is a react component that renders its children every x milliseconds! Please take a look at its props:
- **interval:** Milliseconds to rerender _(default 1000)_
- **shouldComponentRerender:** Callback function to return a boolean value _(optional)_
- **componentDidRerender:** Callback function after the component finished each render _(optional)_

Besides thos props, it also expects **valid React elements** as its children.
See it working at [eberhara.github.io/react-interval-renderer](https://eberhara.github.io/react-interval-renderer/).


## Installation

```bash
npm i --save react-interval-renderer
```

## Usage

```javascript
import IntervalRenderer from 'react-interval-renderer';

...

render() {
	return (
		<IntervalRenderer
			interval={100}						
			shouldComponentRerender={() => true}
			componentDidRerender={() => ()}
		>
			// ... here goes your children components
		</IntervalRenderer>
	);
}
```
Take a look at [examples folder](./examples) for a complete example.


## License

MIT License

Copyright (c) 2017 Andre Eberhardt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
