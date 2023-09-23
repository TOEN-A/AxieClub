import NavBar from './components/navBar'
import './globals.css'

export const metadata = {
  title:
    'アクシーインフィニティ(AxieInfinity)の情報について日本語でまとめるサイトになるかもしれないし、全然違うサイトになるかもしれない',
  description:
    '世界最大のブロックチェーンゲーム(BCG)アクシーインフィニティ(AxieInfinity)についてまとめていきます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-primary">
      <body>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <NavBar />
            {children}
          </div>
      </body>
    </html>
  )
}
