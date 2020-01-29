/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _trapcss = {}
/**
 * Options for the program.
 * @record
 */
_trapcss.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_trapcss.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_trapcss.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Removes unused selectors from CSS files to achieve maximum optimisation. Can be used as an API function or with CLI.
 * @typedef {function(!_trapcss.Config): !Promise<string>}
 */
_trapcss.trapcss
