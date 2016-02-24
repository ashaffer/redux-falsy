/**
 * Imports
 */

import test from 'tape'
import falsy from '../src'
import {applyMiddleware, createStore} from 'redux'

/**
 * Tests
 */

test('should work', t => {
  const count = {n: 0}
  const store = applyMiddleware(falsy, countActions(count))(createStore)(state => state, {})

  store.dispatch(null)
  store.dispatch(undefined)
  store.dispatch(0)
  store.dispatch('')
  store.dispatch({type: 'test'})

  t.equal(count.n, 1)
  t.end()
})

/**
 * Helpers
 */

function countActions (count) {
  return api => next => action => {
    count.n++
  }
}
