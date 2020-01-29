const { _trapcss } = require('./trapcss')

/**
 * Removes unused selectors from CSS files to achieve maximum optimisation. Can be used as an API function or with CLI.
 * @param {!_trapcss.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function trapcss(config) {
  return _trapcss(config)
}

module.exports = trapcss

/* typal types/index.xml namespace */
/**
 * @typedef {_trapcss.Config} Config `＠record` Options for the program.
 * @typedef {Object} _trapcss.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
