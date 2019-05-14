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
    // Remove the text from any social media link to remove the icon from your page.
    // i.e. twitter: '' etc.
    twitter: 'Your twitter username here',
    linkedin: 'Your linkedin username here',
    instagram: 'Your instagram username here',
    facebook: 'Your facebook username here',
    image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6',
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co'
  })

  return {
    type: 'text/html; charset=utf8',
    body
  }
}
