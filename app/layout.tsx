import NavBar from './components/nav-bar'
import './globals.css'

export const metadata = {
  title: 'アクシーインフィニティ(AxieInfinity)の情報について日本語でまとめるサイトになるかもしれないし、全然違うサイトになるかもしれない',
  description: '世界最大のブロックチェーンゲーム(BCG)アクシーインフィニティ(AxieInfinity)についてまとめていきます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
