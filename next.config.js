const withInterceptStdout = require('next-intercept-stdout')

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    images: {
      domains: ['image.tmdb.org'],
    },
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
)
