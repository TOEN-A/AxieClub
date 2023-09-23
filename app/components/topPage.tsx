import React from 'react'

const TopPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h1 className="max-w-[39rem] text-2xl md:text-3xl text-secondary font-bold mb-3">
        アクシーインフィニティ(AxieInfinity)
      </h1>
      <h1 className="max-w-[39rem] text-2xl md:text-3xl text-secondary font-bold mb-3">
        日本語情報サイト(仮)
      </h1>
      <div className="max-w-[36rem] text-left">
        <p className="text-[0.8rem] md:text-base text-secondary">
          　世界最大のブロックチェーンゲームであるアクシーインフィニティについてまとめていきます。が、私のブロックチェーン技術を含めたプログラミングスキル向上がぶっちゃけたサイト立ち上げ理由なので、気付いたら全然違うサイトになってるかもです。
          <br />
          　ルーン・チャーム一覧くらいまではページ作成頑張りたいけど、カード一覧作るだけで疲れたのと、バックエンド側でも遊びたいのでS5の間はやらないかも。
          <br />
          　カードの英語情報だけは管理人がやる気なくなって失踪しても自動更新され続けます。
          <br />
          　スマホでも動作するようには心掛けてるけど、デバッグ大変なのでブラウザのおまけ機能くらいで触ってもらえるとありがたいです。
          <br />
          　こんなのを記事としてまとめて欲しいとかのネタ提供してくれる方、バグを見つけた方、その他ご意見などある方はお気軽に
          <a
            className="underline"
            href="https://twitter.com/TOENBCG1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          まで連絡ください。
        </p>
      </div>
    </div>
  )
}

export default TopPage
