module.exports = function Aside (props) {
  props = props || {}
  let image = props.image || '_static/bg.png'
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
</aside>
  `
}
