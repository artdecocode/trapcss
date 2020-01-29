import trapcss from '../src'

(async () => {
  const res = await trapcss({
    text: 'example',
  })
  console.log(res)
})()