
# redux-falsy

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Drop falsy values that have been dispatched into redux. This may be a candidate for the simplest redux middleware possible.

## Installation

    $ npm install redux-falsy

## Usage

All it does is drop falsy actions from continuing into your middleware stack. This is useful in environments where you are using the return values of things as your actions, as in [vdux](https://github.com/vdux/vdux). The source code of this module is all the documentation you should need:

```javascript
function falsy () {
  return next => action => action && next(action)
}
```

Put it at the top of your middleware stack to avoid them getting into any of your middlewares.

## License

MIT
