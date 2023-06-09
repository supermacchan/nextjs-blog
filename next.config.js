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
          { 
            key: "Access-Control-Allow-Origin", 
            value: "*" 
          },
          { 
            key: "Access-Control-Allow-Credentials", 
            value: "true" 
          },
          {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
          { 
            key: "Content-Type", 
            value: "image/webp"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
          }
        ],
      },
    ]
  },
}

  