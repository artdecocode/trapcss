import { c } from 'erte'

/**
 * @type {_trapcss.trapcss}
 */
export default async function trapcss(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('trapcss called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').trapcss} _trapcss.trapcss
 */
