const PhotoCredit = require('./photo-credit.js')
module.exports = function Aside (props) {
  props = props || {}

  let path
  let env = process.env.NODE_ENV
  if (env === 'production') path = process.env.BEGIN_STATIC_EDGE // CDN
  else path = '/_static' // Handles preview and local use cases
  let defaultBg = path + '/background.jpg'

  let image = props.image || defaultBg
  let photographer = props.photographer || ''
  let service = props.service || ''
  let credit = props.credit || ''

  return `
<aside
  class="
    position-relative
    height-15
    height-100-large
    background-position-center
    background-size-cover
    flex-grow-1-large
  "
  style="background-image: url(${image});"
>
  ${PhotoCredit({
    photographer,
    service,
    credit
  })}
</aside>
  `
}
