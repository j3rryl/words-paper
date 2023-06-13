/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports:{
    '@mui/icons-material':{
      transform: '@mui/icons-material/{{member}}'
    }
  },
  images: {
    domains: ['images.unsplash.com','mavunobios.co.ke'],
},
}

module.exports = nextConfig