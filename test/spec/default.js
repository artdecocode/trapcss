import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import trapcss from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof trapcss, 'function')
  },
  // async 'calls package without error'() {
  //   await trapcss()
  // },
  // async 'gets a link to the fixture'({ fixture }) {
  //   const text = fixture`text.txt`
  //   const res = await trapcss({
  //     text,
  //   })
  //   ok(res, text)
  // },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T