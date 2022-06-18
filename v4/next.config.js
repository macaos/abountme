/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})


const nextConfig = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    );
    return config
  }
})

module.exports = nextConfig

