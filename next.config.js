const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'https://supermacchan-blog.imgix.net',
    domains: ["https://supermacchan-blog.imgix.net", "https://supermacchan.github.io/nextjs-blog/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**/imgix.net",
        port: '',
        pathname: "/images/**"
      }
  ]
  },
  async headers() {
    return [
      {
        source: "//",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Content-Type", value: "image/webp"}
        ],
      },
    ]
  },
}

  