interface ContentMap {
  [key: string]: {
    text: string[]
    images?: string[]
    processed?: number
  }
}

export const subtext: ContentMap = {
  Cleanse: {
    text: [
      'Cleanse: Remove 1 random Debufffromthetarget, up to 4 stacks or 4turns.',
    ],
    images: [],
  },
  Cleanser: {
    text: [
      'Cleanser: Each stack prevents up to 4 stacks or 4 turns of 1 Debuff.',
    ],
    images: [],
  },
  Innate: {
    text: ['Innate: Start each battle with this card on top of Draw Pile.'],
    images: [],
  },
  Initial: {
    text: [
      'lnitial: Trigger an effect if this card is the first card played in a turn.',
    ],
    images: [],
  },
  Banish: {
    text: [
      'Banish: When played, this card is put into Banish Pile. Banished Cards are not reshuffled into Draw Pile.',
    ],
    images: [],
  },
  Mavis: {
    text: [
      'Mavis: Bird | 24 HP | When your turn starts, gain 1 Energy Fragment. When your turn ends. the enemy loses 1 Fragment then this Unit loses 8 HP.',
      'Energy Fragment: Collecting enoughEnergy Fragments will cause an Energy Burst',
      'Energy Burst: When created, at the start of your turn, gain 1 extra Energy until the end of the battle.',
    ],
    images: [],
  },
  'Little Robin': {
    text: [
      'Robin: Bird | 24 HP | On death,deal DMG to all enemies (begin at 0 DMG). Whenever an ally deals a hit. +3 DMG on death. (Cap: 90 DMG). When your turn ends, lose 8 HP.',
    ],
    images: [],
  },
  Unstable: {
    text: [
      'UnstabIe: When played, ExiIe the card, then put 1 Confused card into Discard Pile. Banish overrides Unstable.',
    ],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Confused.png',
    ],
  },
  Confused: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Confused.png',
    ],
  },
  Weak: {
    text: ['Weak: Deals 20% DMG. Grant -20% Shield'],
    images: [],
  },
  Fragile: {
    text: ['Fragile: Takes +10% DMG, additonal 10% while Shielded.'],
    images: [],
  },
  Bleed: {
    text: [
      "Bleed: Lose 12 HP whenever this Axie plays a Card. When each turn ends, if this Axie didn't lose HP from Bleed, -1 Bleed.",
    ],
    images: [],
  },
  Jinx: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Jinx.png',
    ],
  },
  Purify: {
    text: [
      'Purify: Exile a random Cursed Card from your Draw Pile. Discard Pile, or Hand. in that order.',
    ],
    images: [],
  },

  Steal: {
    text: ['Steal: Heal HP equal to HP Lost by the target.'],
    images: [],
  },
  Eggshell: {
    text: ['Eggshell: When your turn ends, summons gain 25 Shield.'],
    images: [],
  },
  Cuckoo: {
    text: [
      'Cuckoo: Either, when Sleep is applied to the Unit,  prevent it; or the next Single Attack deals +75 DMG.',
      "Sleep: This Unit's cards have no effect. When attacked or after playing a card, remove Sleep.",
    ],
    images: [],
  },
  Sleep: {
    text: [
      "Sleep: This Unit's cards have no effect. When attacked or after playing a card, remove Sleep.",
    ],
    images: [],
  },
  Dispel: {
    text: [
      'Dispel: Remove 1 random Buff from target, up to 3 stacks or 3 turns.',
    ],
    images: [],
  },
  'Feather Dagger': {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/FeatherDagger.png',
    ],
  },
  Feather: {
    text: [
      'Feather: Whenever this Axie attacks, it gains 1 Plume per hit then other allies with Feather gain 1 Plume. When your turn ends, if this Axie attacked, it loses 1 Feather. Max Stacks: 10.',
      'Plume: Attacks deal +1 DMG per stack. When this Axie loses all {Feather}, it loses all {Plumes}. This is not a Buff, Debuff, Secret, or Power. Max Stacks: 20.',
    ],
    images: [],
  },
  Hex: {
    text: [
      'Hex: Whenever this Axie plays a non-Attack Card, shuffle 1 Confused into Draw Pile.',
    ],
    images: [],
  },
  Fear: {
    text: [
      'Fear: Whenever this Axie plays an Attack Card, shuffle 1 Confused into Draw Pile.',
    ],
    images: [],
  },
  Retain: {
    text: ['Retain: When your turn ends, this card is not discarded.'],
    images: [],
  },
  Blackmail: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Blackmail.png',
    ],
  },
  Rage: {
    text: [
      'Rage: Attacks deal +1 DMG per stack. Take +1 DMG per stack when Attacked. On your turn, at 10 stacks, consume all Rage to enter Fury form. Max Stack: 10.',
      "Fury: +1 Energy. Deal +50 % DMG, can't grant Energy Fragment, and can't gain, Rage til the turn ends.",
      'Energy Fragment: Collecting enoughEnergy Fragments will cause an Energy Burst',
      'Energy Burst: When created, at the start of your turn, gain 1 extra Energy until the end of the battle.',
    ],
    images: [],
  },
  Fury: {
    text: [
      "Fury: +1 Energy. Deal +50 % DMG, can't grant Energy Fragment, and can't gain, Rage til the turn ends.",
      'Rage: Attacks deal +1 DMG per stack. Take +1 DMG per stack when Attacked. On your turn, at 10 stacks, consume all Rage to enter Fury form. Max Stack: 10.',
      'Energy Fragment: Collecting enoughEnergy Fragments will cause an Energy Burst',
      'Energy Burst: When created, at the start of your turn, gain 1 extra Energy until the end of the battle.',
    ],
    images: [],
  },
  Vulnerable: {
    text: ['VuInerabIe:Takes +10% DMG.additonal 10% while not Shielded.'],
    images: [],
  },
  'Energy Fragment': {
    text: [
      'Energy Fragment: Collecting enoughEnergy Fragments will cause an Energy Burst',
      'Energy Burst: When created, at the start of your turn, gain 1 extra Energy until the end of the battle.',
    ],
    images: [],
  },
  Void: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Void.png',
    ],
  },
  Limit: {
    text: [
      'Limit: After a Card is played to its Limit, including its copies, Effects that follow will not activate until end of turn.',
    ],
    images: [],
  },

  'Death Mark': {
    text: [
      'Death Mark: Take Pure DMG from Attacks. Whenever the enemy plays an Attack, take 12 <Pure DMG> per Energy Cost of the Attack.',
      'Pure DMG: Deal DMG that ignores Shield.',
    ],
    images: [],
  },
  Taunt: {
    text: ['Taunt: Units with Taunt are attacked first'],
    images: [],
  },
  Detect: {
    text: ['Detect: Remove a random Secret from the target.'],
    images: [],
  },

  Doubt: {
    text: [
      'Doubt: Receive -25% Heal & Shield. HP Loss Effects are increased by +25%.',
    ],
    images: [],
  },
  'Grievous Wound': {
    text: [
      'Grievous wound: After losing HP from Bleed, lose 10 HP per Gievous Wound, then apply 1 Grievous Wound. Max stack: 10.',
      "Bleed: Lose 12 HP whenever this Axie plays a Card. When each turn ends, if this Axie didn't lose HP from Bleed, -1 Bleed.",
    ],
    images: [],
  },
  'Lumber Shield': {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/LumberShield.png',
    ],
  },
  Burn: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Burn.png',
    ],
  },
  Exile: {
    text: ['ExiIe: When played. this card is removed from the battle.'],
    images: [],
  },
  Scry: {
    text: [
      'Scry: Look at cards that are on top of Draw Pile. You may discard any of them.',
    ],
    images: [],
  },
  Cocoon: {
    text: [
      "Cocoon: When your Enemy's turn starts, +4 Shield per stack. When that turn ends, retain 5% remaining Shield per stack. Max stack: 10.",
    ],
    images: [],
  },
  'Pure DMG': {
    text: ['Pure DMG: Deal DMG that ignores Shield.'],
    images: [],
  },
  Goo: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/EN/Goo.png',
    ],
  },
  Keep: {
    text: [
      'Keep: Battle Mechanic. Select cards in Hand. and they will be Retained this turn.',
    ],
    images: [],
  },
  Poison: {
    text: [
      'Poison : When your turn starts, lose 3HP per Poison, then reduce Poison by 1. Max stack: 40.',
    ],
    images: [],
  },
  Leaf: {
    text: [
      'Leaf: When your turn ends, heal 4 HP per stack. Overheal by Leaf converts to Shield. Max stack: 10.',
    ],
    images: [],
  },
  Clover: {
    text: [
      'Clover: Plant | 35 HP | When your turn starts, randomly grant 1 or 2 Leaf to allied Axies. Clover dies after 4 Leaf is granted this way.',
      'Leaf: When your turn ends, heal 4 HP per stack. Overheal by Leaf converts to Shield. Max stack: 10.',
    ],
    images: [],
  },
  Trunk: {
    text: [
      'Trunk: Plant | 75 HP | Apply Taunt to self.',
      'Taunt: Units with Taunt are attacked first',
    ],
    images: [],
  },
  Strawberry: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/Strawberry.png',
    ],
  },
  'Turnip Rocket': {
    text: [
      "Turnip Rocket: When the turn ends, deal DMG to a random enemy =50% of Turnip's total Stats. Prioritize Summons. Can't be Dispelled.",
    ],
    images: [],
  },
  Mushroom: {
    text: [
      "Mushroom: Plant | 24 HP | When your turn ends. heal all allied Axies for HP equal to this Unit's Max HP then this Unit loses 8HP.",
    ],
    images: [],
  },
  'Pure Water': {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/PureWater.png',
    ],
  },
  Bubble: {
    text: [
      "Bubble: Single Attacks deal 1.5% of the target's current HP per Bubble as Bonus DMG. AOE and Multihit Attacks deal 0.5%. convert to Bubble Bomb at 5 stacks.",
      "Bubble Bomb: Can't be Dispelled. AOE and Multihit Attacks deal +5 DMG. Single Attacks cause Bubble Bombs to explode to deal 24 DMG per stack to allenemes.",
    ],
    images: [],
  },
  'Bubble Bomb': {
    text: [
      "Bubble Bomb: Can't be Dispelled. AOE and Multihit Attacks deal +5 DMG. Single Attacks cause Bubble Bombs to explode to deal 24 DMG per stack to allenemes.",
    ],
    images: [],
  },
  'Energy Burst': {
    text: [
      'Energy Burst: When created, at the start of your turn, gain 1 extra Energy until the end of the battle.',
    ],
    images: [],
  },
  Spike: {
    text: [
      'Spike: Whenever hit, consumes 1 stack to reflect 5 DMG and gain 5 Bloodspike. Maxstack: 10.',
      "Bloodspike: Can't be Dispelled. On death, deal Pure DMG equal to Bloodspike stacks to all enemies.",
    ],
    images: [],
  },
  Bloodspike: {
    text: [
      "Bloodspike: Can't be Dispelled. On death, deal Pure DMG equal to Bloodspike stacks to all enemies.",
    ],
    images: [],
  },
  'Snake Jar': {
    text: [
      "Snake jar: If this unit doesn't die in 6 turns, deal DMG to all Enemies = 1.5x Snake Jar's Base Shield. Can't be dispelled.",
    ],
    images: [],
  },
  Return: {
    text: [
      'Return: When your turn ends, if this card is still in Hand, put it onto the top of Draw Pile',
    ],
    images: [],
  },
  Ambush: {
    text: ['Ambush: Target the closest or furthest enemy.'],
    images: [],
  },
  Solo: {
    text: ['Solo: only 1 Axie per team can have this Effect.'],
    images: [],
  },
  Round: {
    text: ["Round: 1 Round includes 1 of your Turn and 1 Of the enemy's Turn."],
    images: [],
  },
  bloodstorm: {
    text: [
      'bloodstorm : -1 Bleed from the target then all Enemy Axies -12 HP.',
      "Bleed: Lose 12 HP whenever this Axie plays a Card. When each turn ends, if this Axie didn't lose HP from Bleed, -1 Bleed.",
    ],
    images: [],
  },
  Immortal: {
    text: [
      "Immortal: lnstead of dying. survive with 1 HP and can't die. When Immortalis lost, this Axie dies.",
    ],
    images: [],
  },
  GiantBubble: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/GiantBubble.png',
    ],
  },
  ForestBreath: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/ForestBreath.png',
    ],
  },
  ForestWrath: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/ForestWrath.png',
    ],
  },
  VenomBurst: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/VenomBurst.png',
    ],
  },
  Prayer: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/Prayer.png',
    ],
  },
  Purge: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/Purge.png',
    ],
  },
  Scan: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/Scan.png',
    ],
  },
  'Blue Mirror': {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/BlueMirror.png',
    ],
  },
  'Red Mirror': {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/RedMirror.png',
    ],
  },
  'Green Mirror': {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/EN/GreenMirror.png',
    ],
  },
  Degrade: {
    text: [
      'Degrade:When your turn ends, if the card is still in Hand, Exile the card, then put 1 Confused card into Discard Pile.Ethereal overrides Degrade.',
    ],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/Confused.png',
    ],
  },
  クレンズ: {
    text: [
      'クレンズ: 対象からランダムにデパフを1つ取り除く、最大4スタックまたは4ターンまで。',
    ],
    images: [],
  },
  クレンザー: {
    text: [
      'クレンザー: 各スタックは最大1つのデバフスタックまたは1ターンのデバフを防ぐ。（最大スタック: 10）',
    ],
    images: [],
  },
  イネイト: {
    text: [
      'イネイト: バトル開始時には、このカードが山札の一番上に配置されます。',
    ],
    images: [],
  },
  イニシャル: {
    text: [
      'イニシャル: このカードがターンで最初にプレイされるカードである場合、効果を発動する。',
    ],
    images: [],
  },
  バニッシュ: {
    text: [
      'バニッシュ: プレイ時、このカードはバニッシュ山に移動する。バニッシュされたカードは山札に再びシャッフルされない。',
    ],
    images: [],
  },
  メイビス: {
    text: [
      'メイビス: バード | 24HP | ターン開始時、エネルギーフラグメントを1得る。ターン終了時、メイビスのATKに等しいダメージを最も近い敵に与え、敵はフラグメントを1失い、その後この対象はHPを8失う。',
      'エナジーフラグメント: エナジーフラグメントをたくさん集めると、エナジーバーストが発生する。',
      'エナジーバースト: バーストすると、あなたのターン開始時からバトル終了まで、エナジーを1追加する。',
    ],
    images: [],
  },
  リトルロビン: {
    text: [
      'ロビン:バード | 24HP | 死亡時、全ての敵にダメージを与える(デフォルトダメージはロビンのATK)。味方がヒットを与えるたびに、死亡時のダメージを+3する。(上限:90ダメージ)。ターン終了時、HPを8失う。',
    ],
    images: [],
  },
  アンステーブル: {
    text: [
      'アンステーブル: プレイ時、カードをエグサイルし、その後1枚のコンフューズドカードを捨て山に置く。バニッシュはアンステーブルを上書きする。',
    ],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/ConfusedJP.png',
    ],
  },
  コンフューズド: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/ConfusedJP.png',
    ],
  },
  ウィーク: {
    text: ['ウィーク: -20%のDMGを与える。シールド付与-20 %'],
    images: [],
  },
  フラジャイル: {
    text: ['フラジャイル: DMGを+10%受け、シールドがある間はさらに+10%受ける。'],
    images: [],
  },
  ブリード: {
    text: [
      'ブリード: このアクシーがカードをプレイする度に、12のHPを失う。毎ターンの終了時、このアクシーがブリードでHPを失っていなければ、ブリードを一つ減らす',
    ],
    images: [],
  },
  ジンクス: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/JinxJP.png',
    ],
  },
  ピュリファイ: {
    text: [
      'ピュリファイ: ランダムな呪われたカード1枚をあなたの山札、手札、捨て山からこの順番でエグサイルする。',
    ],
    images: [],
  },

  スティール: {
    text: [
      'スティール:対象からリソースを奪う。対象がアラートを持っていない場合、2アラートを適用し、自身は1カンニングを獲得する。',
      'カニング:味方のスティール効果をスタックごとに10%増加。最大スタック:10。',
      'アラート:このユニットからのスティーリングはカニングを与えない。'
    ],
    images: [],
  },
  エッグシェル: {
    text: ['エッグシェル:ターンが終了すると、このアクシーと召喚獣はエッグシェルのATKに等しいシールドを得る。'],
    images: [],
  },
  クックー: {
    text: [
      'クックー:いずれか、対象にスリープが付与された場合、防止するか、次の単体攻撃は+75のダメージを与える。',
      'スリープ: この対象のカードは効果を持たない。攻撃を受けた時またはカードをプレイした後、スリープを解除する。',
    ],
    images: [],
  },
  スリープ: {
    text: [
      'スリープ: この対象のカードは効果を持たない。攻撃を受けた時またはカードをプレイした後、スリープを解除する。',
    ],
    images: [],
  },
  ディスペル: {
    text: [
      'ディスペル: 対象からランダムにバフを1つ取り除く、最大3スタックまたは3ターンまで。',
    ],
    images: [],
  },
  フェザーダガー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/FeatherDaggerJP.png',
    ],
  },
  フェザー: {
    text: [
      'フェザー: このAxieの攻撃、またはフェザーを持つ他の味方の攻撃が命中するたび、DMGが+1され、最大+20される。ターン終了時、このAxieが攻撃した場合、フェザーを1つ失う。全てのフェザーを失うとボーナスDMGはリセットされる。最大スタック:10.',
    ],
    images: [],
  },
  ヘックス: {
    text: [
      'へックス :このアクシーが攻撃以外のカードをプレイするたび、コンフューズドを1枚山札にシャッフルする。',
    ],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/ConfusedJP.png',
    ],
  },
  フィアー: {
    text: [
      'フィアー:このアクシーがカードをプレイするたびに、山札に1枚のコンフューズドをシャッフルし、フィアーを-1する。各ターン終了時にフィアーを-1する。最大スタック数:6。',
    ],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/ConfusedJP.png',
    ],
  },
  リテイン: {
    text: ['リテイン:ターン終了時、このカードは捨てられません。'],
    images: [],
  },
  ブラックメール: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/BlackmailJP.png',
    ],
  },
  レイジ: {
    text: [
      'レイジ: スタックごとに攻撃はダメージが+1される。攻撃を受けた際には、スタックごとにダメージが+1される。あなたのターン中、スタックが10になると、すべての、レイジを消費してフューリーの形態に入る。最大スタック:10',
      'フューリー: +1のエナジーを獲得する。カードを1枚ドローする。+50%のダメージを与えるが、エナジーフラグメントを付与することはできす、ターン終了まで、レイジを得ることはできない。',
      'エナジーフラグメント: エナジーフラグメントをたくさん集めると、エナジーバーストが発生する。',
      'エナジーバースト: バーストすると、あなたのターン開始時からバトル終了まで、エナジーを1追加する。',
    ],
    images: [],
  },
  フューリー: {
    text: [
      'フューリー: +1のエナジーを獲得する。カードを1枚ドローする。+50%のダメージを与えるが、エナジーフラグメントを付与することはできす、ターン終了まで、レイジを得ることはできない。',
      'レイジ: スタックごとに攻撃はダメージが+1される。攻撃を受けた際には、スタックごとにダメージが+1される。あなたのターン中、スタックが10になると、すべての、レイジを消費してフューリーの形態に入る。最大スタック:10',
      'エナジーフラグメント: エナジーフラグメントをたくさん集めると、エナジーバーストが発生する。',
      'エナジーバースト: バーストすると、あなたのターン開始時からバトル終了まで、エナジーを1追加する。',
    ],
    images: [],
  },
  ヴォルナラブル: {
    text: [
      'ヴォルナラブル: DMGを+10%受け、シールドがある間はさらに+10%受ける。',
    ],
    images: [],
  },
  エナジーフラグメント: {
    text: [
      'エナジーフラグメント: エナジーフラグメントをたくさん集めると、エナジーバーストが発生する。',
      'エナジーバースト: バーストすると、あなたのターン開始時からバトル終了まで、エナジーを1追加する。',
    ],
    images: [],
  },
  ヴォイド: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/VoidJP.png',
    ],
  },
  リミット: {
    text: [
      'リミット: カードがリミットまでプレイされた後、そのコピーを含めた効果は、ターン終了まで発動しません。',
    ],
    images: [],
  },

  デスマーク: {
    text: [
      'デスマーク: 受ける攻撃が全てピュアダメージになる。敵が攻撃力ードをプレイする度に、その攻撃のエナジーコストごとに12のビュアダメージを受ける。',
      'ピュアダメージ: シールドを無視したダメージを与える。',
    ],
    images: [],
  },
  トーント: {
    text: ['トーント: 最初にトーントを持つ対象が攻撃されます。'],
    images: [],
  },
  ディテクト: {
    text: ['ディテクト: 対象からランダムなシークレットを1つ取り除く。'],
    images: [],
  },

  ダウト: {
    text: ['ダウト: 回復&シールド-25%。HPロスエフェクトは+25%増加する。'],
    images: [],
  },
  グリーバスウーンド: {
    text: [
      'グリーバスウーンド: プリードでHPを失った後、グリーバスウーンド1つにつきHPを10失い、グリーバスウーンドを1つ与える。最大スタック:10。',
      'ブリード: このアクシーがカードをプレイする度に、12のHPを失う。毎ターンの終了時、このアクシーがブリードでHPを失っていなければ、ブリードを一つ減らす',
    ],
    images: [],
  },
  ランバーシールド: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/LumberShieldJP.png',
    ],
  },
  バーン: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/BurnJP.png',
    ],
  },
  エグサイル: {
    text: ['エグサイル: プレイ時、このカードはバトルから削除されます。'],
    images: [],
  },
  スクライ: {
    text: [
      'スクライ: 山札の一番上にあるカードを見る。その中から任意のカードを捨てる。',
    ],
    images: [],
  },
  コクーン: {
    text: [
      'コクーン: 敵のターン開始時、スタックごとにシールドが+4増加する。そのターンが終わると、残っているシールドの5%を保持する。最大スタック数:10。',
    ],
    images: [],
  },
  ピュアダメージ: {
    text: ['ピュアダメージ: シールドを無視したダメージを与える。'],
    images: [],
  },
  グー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/GooJP.png',
    ],
  },
  キープ: {
    text: [
      'キープ: バトルメカニクス。手札のカードを選択すると、それらはこのターン中リテインされます。',
    ],
    images: [],
  },
  ポイズン: {
    text: [
      'ポイズン: ターン開始時、ポイズンごとに3のHPを失い、その後ポイズンを1減らす。最大スタック数は40。',
    ],
    images: [],
  },
  リーフ: {
    text: [
      'リーフ: ターン終了時、スタックごとに4HP回復する。リーフによるオーバーヒールはシールドに変換される。最大スタック数10。',
    ],
    images: [],
  },
  クローバー: {
    text: [
      'クローバー: プラント | HP: カードの回復量 | あなたのターン終了時、味方全員にリーフを+1する。敵のターン終了時、全てのリーフを消費し、1リーフあたり10のダメージをランダムな敵に4回与える。',
      'リーフ: ターン終了時、スタックごとに4HP回復する。リーフによるオーバーヒールはシールドに変換される。最大スタック数10。',
    ],
    images: [],
  },
  トランク: {
    text: [
      'トランク:プラント | HP: カードの回復量×2 | 自分にトーントを与える。',
      'トーント: 最初にトーントを持つ対象が攻撃されます。',
    ],
    images: [],
  },
  ストロベリー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/StrawberryJP.png',
    ],
  },
  ターニップロケット: {
    text: [
      'ターニップロケット: ターン終了時、ターニップの総ステータスの1/2に等しいDMGをランダムな敵に与える。召喚獣を優先。ディスペルできない。',
    ],
    images: [],
  },
  マッシュルーム: {
    text: [
      'マッシュルーム: プラント | HP: カードの回復量 | ターン終了時、このマッシュルームの最大HPに等しいHPで全ての味方のアクシーを回復する。その後、この対象はHPを35%失う。',
    ],
    images: [],
  },
  ピュアウォーター: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/PureWaterJP.png',
    ],
  },
  バブル: {
    text: [
      'バブル: 単体攻撃はバブル1つにつき対象の現在HPの1.5%をポーナスDMGとして与える。AoE攻撃とマルチヒット攻撃は0.5%。5スタックでをバブルポムに変換される。',
      'バブルポム:ディスペルできない。AoEとマルチヒット攻撃は+5DMGを与え、単体攻撃はをバブルポムを爆発させて敵全体に1スタックにつき24DMGを与える。',
    ],
    images: [],
  },
  バブルボム: {
    text: [
      'バブルポム:ディスペルできない。AoEとマルチヒット攻撃は+5DMGを与え、単体攻撃はをバブルポムを爆発させて敵全体に1スタックにつき32DMGを与える。',
    ],
    images: [],
  },
  エナジーバースト: {
    text: [
      'エナジーバースト: バーストすると、あなたのターン開始時からバトル終了まで、エナジーを1追加する。',
    ],
    images: [],
  },
  スパイク: {
    text: [
      'スパイク: 攻撃を受けるたびに、1スタック消費して5のダメージを反射し、5のブラッドスパイクを獲得する。最大スタック数:10。',
      'ブラッドスパイク: ディスペルされない。死亡時、ブラッドスパイクスタックに等しいピュアダメージを全ての敵に与える。',
    ],
    images: [],
  },
  ブラッドスパイク: {
    text: [
      'ブラッドスパイク: ディスペルされない。死亡時、ブラッドスパイクスタックに等しいピュアダメージを全ての敵に与える。',
    ],
    images: [],
  },
  スネークジャー: {
    text: [
      'スネークジャー: このアクシーが6ターン以内に死亡しない場合、全ての敵にスネークジャーカードのシールド値×1.5倍のダメージを与える。ディスペルできない。',
    ],
    images: [],
  },
  リターン: {
    text: [
      'リターン: ターン終了時、もし手札にこのカードが残っている場合、それを山札の一番上に置く。',
    ],
    images: [],
  },
  アンブッシュ: {
    text: ['アンブッシュ: 最も近いまたは最も遠い敵を選択する。'],
    images: [],
  },
  ソロ: {
    text: ['ソロ: チームごとにこの効果を持つアクシーは1体のみです。'],
    images: [],
  },
  ラウンド: {
    text: [
      'ラウンド: 1ラウンドは、あなたのターン1回と敵のターン1回を含みます。',
    ],
    images: [],
  },
  AoE: {
    text: ['AoE: 全体攻撃。特定のグループ内の全ての相手を対象とする能力。'],
    images: [],
  },
  ブラッドストーム: {
    text: [
      'ブラッドストーム: 対象のブラッドを-1し、すべての敵アクシーのHPを12減らす。',
      'ブリード: このアクシーがカードをプレイする度に、12のHPを失う。毎ターンの終了時、このアクシーがブリードでHPを失っていなければ、ブリードを一つ減らす',
    ],
    images: [],
  },
  イモータル: {
    text: [
      'イモータル: 死ぬ代わりに、1のHPで生き残り、死ぬことができなくなります。イモータルが失われると、このアクシーは死にます。',
    ],
    images: [],
  },
  ジャイアントバブル: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/GiantBubbleJP.png',
    ],
  },
  フォレストブレス: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/ForestBreathJP.png',
    ],
  },
  フォレストラース: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/ForestWrathJP.png',
    ],
  },
  ヴェノムバースト: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/VenomBurstJP.png',
    ],
  },
  プレアー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/PrayerJP.png',
    ],
  },
  パージ: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/PurgeJP.png',
    ],
  },
  スキャン: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/ScanJP.png',
    ],
  },
  スプラッシュDMG: {
    text: [
      'スプラッシュDMG:メインの対象へのDMGに基づき、他のすべての対象にDMGを与える。',
    ],
    images: [],
  },
  ディグレード: {
    text: [
      'ディグレード:ターン終了時、カードがまだ手札にある場合、カードをエグザイルし、その後1コンフューズドカードを捨て山に入れる。エセリアルはディグレードを上書きする。',
    ],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/curseCards/JP/ConfusedJP.png',
    ],
  },
  ブルーミラー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/BlueMirrorJP.png',
    ],
  },
  レッドミラー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/RedMirrorJP.png',
    ],
  },
  グリーンミラー: {
    text: [],
    images: [
      'https://ehzxpvbfwwaraguxdmzg.supabase.co/storage/v1/object/public/images/toolCards/JP/GreenMirrorJP.png',
    ],
  },
  ガード: {
    text: [
      'ガード:このユニットのシールドは他の味方のアクシーが受けるDMGの最大50%をブロックする。最大スタック数: 1',
    ],
    images: [],
  },
  ブルワーク: {
    text: [
      'ブルワーク:敵ターン終了時、シールドを失う前に、ブルワークのスタック1つにつきシールド残量の5%をDMGとしてすべての敵Axiesに与える。味方のAxieが死亡するたびブルワークを2つ失う。最大スタック: 10',
    ],
    images: [],
  },
  リバースヒール: {
    text: ['リバースヒール:対象を回復する代わりにHPを失う。'],
    images: [],
  },
  アラート: {
    text: [
      'スティール:対象からリソースを奪う。対象がアラートを持っていない場合、2アラートを適用し、自身は1カンニングを獲得する。',
      'カニング:味方のスティール効果をスタックごとに10%増加。最大スタック:10。',
      'アラート:このユニットからのスティーリングはカニングを与えない。'
    ],
    images: [],
  },
  カンニング: {
    text: [
      'スティール:対象からリソースを奪う。対象がアラートを持っていない場合、2アラートを適用し、自身は1カンニングを獲得する。',
      'カニング:味方のスティール効果をスタックごとに10%増加。最大スタック:10。',
      'アラート:このユニットからのスティーリングはカニングを与えない。'
    ],
    images: [],
  },
  サイレンスウィスパー: {
    text: [
      'サイレンスウィスパー:このユニットが効果によるHP損失を受けるたびに、最大50HPの損失を防ぐためにサイレンスウィスパーを-1し、防いだ量だけ回復する。ターン終了時にサイレンスウィスパーを-1。最大スタック:10。',
    ],
    images: [],
  },
  ヴェンジェンス: {
    text: [
      'ヴェンジェンス:味方の次の攻撃は全てのヴェンジェンスを消費してボーナスDMGを与える;単体攻撃はスタックごとに+1DMG、AoEおよび複数攻撃は3スタックごとに+1DMG。最大スタック:120。',
    ],
    images: [],
  },
}
