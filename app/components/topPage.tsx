import React from 'react'

const TopPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h1 className="max-w-[39rem] text-2xl md:text-3xl text-gray-800 font-bold mb-3">
        アクシーインフィニティ(AxieInfinity)
        <br />日本語まとめサイト(仮)
      </h1>
      <div className="max-w-[36rem] text-left">
        <p className="text-[0.8rem] md:text-base text-gray-700">
          　世界最大のブロックチェーンゲームであるアクシーインフィニティについてまとめていきます。
          <br />
          　バグを見つけた方、その他ご意見などある方はお気軽に
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
