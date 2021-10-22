module.exports = function Styles (props) {
  props = props || {}
  let image = props.image || ''

  return `
<style>
.background-image {
  background-image: url(${image});
}
</style>
`
}
