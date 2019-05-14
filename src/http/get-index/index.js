const Main = require('@architect/views/main.js')
exports.handler = async function Index () {
  // Customize this site by changing the data below
  let body = Main({
    title: '',
    fullname: 'Sofia Sovebusg',
    occupation: 'Artist & Photographer',
    location: 'San Francisco, Ca',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    email: 'Your email here',
    twitter: 'Your twitter username here',
    linkedin: 'Your linkedin username here',
    instagram: 'Your instagram username here',
    facebook: 'Your instagram username here',
    image: ''
  })

  return {
    type: 'text/html; charset=utf8',
    body
  }
}
