import makeTestSuite from '@zoroaster/mask'
import trapcss from '../../src'

const T = makeTestSuite([
  'test/result/@keyframes.scss',
  'test/result/@font-face.scss'], {
  getResults() {
    const css = this.preamble
    const prepend = this.input

    const { css: out } = trapcss({
      html: '<div></div>',
      css: prepend + css,
    })
    return out.replace(prepend, '')
  },
})

const fontfaceCustomProps = makeTestSuite(
  'test/result/fontface-custom-props.scss', {
    getResults() {
      const prepend = this.preamble
      const css = this.input

      const { css: out } = trapcss({
        html: '<div></div>',
        css: this.doPrepend === false ? css : (prepend + css),
      })
      return out
    },
    jsProps: ['doPrepend'],
  })

T['@font-face (custom props)'] = fontfaceCustomProps

export default T

export const customProps = makeTestSuite(
  'test/result/custom-props.scss', {
    getResults() {
      const [,html] = /content: '(.+?)'/.exec(this.html)
      const { css } = trapcss({
        html,
        css: this.input,
      })
      return css
    },
  })

export const alternate = makeTestSuite(
  'test/result/alternate.scss', {
    getResults() {
      const { css } = trapcss({
        html: '<div/>',
        css: this.input,
        keepAlternate: true,
      })
      return css
    },
  })