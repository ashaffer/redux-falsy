/**
 * redux-falsy
 */

function falsy () {
  return next => action => action && next(action)
}

/**
 * Exports
 */

export default falsy
