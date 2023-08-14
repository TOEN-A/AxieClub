import React from 'react'

const TopPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h1 className="max-w-[39rem] text-2xl md:text-3xl text-gray-800 font-bold mb-8">
        アクシーインフィニティ(AxieInfinity)
        の情報について日本語でまとめるサイトにしたい
      </h1>
      <div className="max-w-3xl text-left">
        <p className="text-[0.8rem] md:text-base text-gray-700">
          世界最大のブロックチェーンゲームであるアクシーインフィニティについてまとめていきます。
          <br />
          カード一覧作るだけで疲れたので、失踪する可能性大。
          <br />
          せめてルーン・チャーム一覧くらいまでは頑張りたい。
          <br />
          カードの英語情報だけは管理人が不在になっても自動更新され続けます。
          <br />
          要望・意見・バグ見つけた方はお気軽に
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
