/** @type {import('next').NextConfig} */
// Next.js で Recoil を使うと `Duplicate atom key "xxx"` というエラーが出てしまうのを
// next-intercept-stdout を使って回避
const withInterceptStdout = require('next-intercept-stdout')

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
)
