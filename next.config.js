// const repo = 'nextjs-blog'
// const assetPrefix = `/${repo}/`
// const basePath = `/${repo}`

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
// }

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
//   === so that the images could be uploadable to gh-pages ===
  images: {
    loader: 'imgix',
    // path: 'supermacchan-blog',
    path: 'https://supermacchan-blog.imgix.net',
    formats: ['image/webp'],
    // disableStaticImages: false,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'https://supermacchan-blog.imgix.net',
    //   },
    // ],
  },
}