/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['ehzxpvbfwwaraguxdmzg.supabase.co'], // 画像のホスト名を指定
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
